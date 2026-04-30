export enum AssetStatus {
  INGESTED = "INGESTED",
  TRANSCODING = "TRANSCODING",
  DISTRIBUTING = "DISTRIBUTING",
  PUBLISHED = "PUBLISHED",
  ARCHIVED = "ARCHIVED",
  FAILED = "FAILED"
}

export enum MediaFormat {
  MP4 = "MP4",
  MOV = "MOV",
  AVI = "AVI",
  MKV = "MKV",
  HLS = "HLS",
  DASH = "DASH"
}

export interface MediaAsset {
  id: string;
  title: string;
  description: string;
  originalFormat: MediaFormat;
  status: AssetStatus;
  metadata: {
    resolution: string;
    bitrate: string;
    duration: number; // seconds
    codec: string;
    language: string;
  };
  storagePath: string;
  distributionUrls: string[];
  drmProtected: boolean;
}

export interface ViewerMetric {
  assetId: string;
  timestamp: string;
  viewerId: string;
  watchTime: number;
  bufferRatio: number;
  quality: string;
  region: string;
  device: string;
}

export interface TranscodingJob {
  id: string;
  assetId: string;
  targets: string[]; // e.g. ["720p", "1080p", "4k"]
  priority: "HIGH" | "NORMAL" | "LOW";
  progress: number;
}
