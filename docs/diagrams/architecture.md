# Architecture & Media Supply Chain Diagrams

## 11. End-to-End Media Supply Chain (Detailed)
*The flow from production mezzanine to edge delivery.*

```mermaid
graph TD
    subgraph "Production (Mezzanine)"
        Raw[Raw Video: ProRes/DNxHD]
        Meta[Metadata: XML/JSON]
    end
    subgraph "Supply Chain (Orchestrator)"
        Ingest[Ingestion Engine]
        Transcode[Transcoding Engine: FFmpeg]
        Packaging[DRM & Packaging]
    end
    subgraph "Distribution (Origin & Edge)"
        Origin[Origin Store: S3/Blob]
        CDN[Multi-CDN: Edge Nodes]
    end
    subgraph "Consumption (Viewer)"
        HLS[HLS / DASH Playback]
        DRM_Check[DRM License Check]
    end

    Raw --> Ingest
    Meta --> Ingest
    Ingest --> Origin
    Origin --> Transcode
    Transcode --> Packaging
    Packaging --> Origin
    Origin --> CDN
    CDN --> HLS
    HLS --> DRM_Check
```

## 13. "Adaptive Bitrate" (ABR) Logic
```mermaid
graph LR
    Viewer[Viewer Network: 20 Mbps] --> Selection[ABR Logic]
    Selection --> High[Manifest: 1080p / 6 Mbps]
    Viewer2[Viewer Network: 2 Mbps] --> Selection
    Selection --> Low[Manifest: 480p / 1 Mbps]
    Note right of Selection: Dynamic Quality Switching
```

## 20. Live Stream failover Cluster
```mermaid
stateDiagram-v2
    Stream_Active --> Monitor: Continuous QoE Check
    Monitor --> Failover: Latency > 2s / Dropped Frames
    Failover --> Secondary_Encoder: Switch Origin Feed
    Secondary_Encoder --> Stream_Active: Continuity Restored
    Monitor --> Healthy: Metrics within Threshold
    Healthy --> Monitor
```
