import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import MediaDashboard from './pages/MediaDashboard';

const Placeholder = ({ name }: { name: string }) => (
  <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
    <h2 className="text-xl font-bold text-white mb-2">{name}</h2>
    <p className="text-slate-400">The Media & Entertainment Landing Zone is currently orchestrating global content pipelines and optimizing adaptive bitrate streaming delivery. AI-driven metadata enrichment and multi-CDN distribution patterns will be fully operational once the transcoding synchronization is finalized.</p>
  </div>
);

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<MediaDashboard />} />
          <Route path="/ingest" element={<Placeholder name="Content Ingestion & MAM Pipeline" />} />
          <Route path="/transcode" element={<Placeholder name="Multi-Format Transcoding Engine" />} />
          <Route path="/streaming" element={<Placeholder name="Real-time Streaming Analytics" />} />
          <Route path="/viewers" element={<Placeholder name="Viewer Behavior & Insights" />} />
          <Route path="/distribution" element={<Placeholder name="Global Multi-CDN Distribution" />} />
          <Route path="/licensing" element={<Placeholder name="DRM, Rights & Licensing Hub" />} />
          <Route path="/monetization" element={<Placeholder name="Advertising & Monetization Engine" />} />
          <Route path="/assets" element={<Placeholder name="Digital Asset Management (DAM)" />} />
          <Route path="/settings" element={<Placeholder name="System & Media Settings" />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;
