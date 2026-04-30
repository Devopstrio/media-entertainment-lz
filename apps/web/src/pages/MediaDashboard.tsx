import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  AreaChart, Area, Cell, PieChart, Pie, LineChart, Line
} from 'recharts';
import { 
  Tv, 
  Activity, 
  Clock,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  PlayCircle,
  ArrowUpRight,
  ArrowDownRight,
  Zap,
  Globe,
  Layers,
  ShieldCheck,
  Users,
  Video
} from 'lucide-react';

const viewershipData = [
  { time: '00:00', concurrent: 850000 },
  { time: '04:00', concurrent: 420000 },
  { time: '08:00', concurrent: 650000 },
  { time: '12:00', concurrent: 1250000 },
  { time: '16:00', concurrent: 2100000 },
  { time: '20:00', concurrent: 3500000 },
];

const contentFormatBreakdown = [
  { name: '4K Ultra HD', value: 45, color: '#6366f1' },
  { name: '1080p HD', value: 35, color: '#818cf8' },
  { name: '720p HD', value: 15, color: '#a5b4fc' },
  { name: 'SD / Legacy', value: 5, color: '#c7d2fe' },
];

const KPI_CARDS = [
  { title: 'Total Media Library', value: '1.2 PB', trend: 'Assets Managed', color: 'indigo', icon: Layers },
  { title: 'Concurrent Viewers', value: '3.5M', trend: 'Live Right Now', color: 'indigo', icon: Users },
  { title: 'Transcoding Velocity', value: '450', trend: 'Jobs / Hour', color: 'indigo', icon: Zap },
  { title: 'Egress Bandwidth', value: '4.2 Tbps', trend: 'Global Distribution', color: 'indigo', icon: Globe },
];

const MediaDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Streaming & Content Operations</h1>
          <p className="text-slate-400">Institutional media supply chain, global distribution, and multi-format transcoding orchestration.</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
            Ingest New Content
          </button>
          <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
            Start Live Stream
          </button>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {KPI_CARDS.map((card) => (
          <div key={card.title} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative group hover:border-slate-700 transition-all">
            <div className="flex justify-between items-start">
              <div className={`p-2 bg-indigo-600/10 rounded-lg`}>
                <card.icon className={`w-6 h-6 text-indigo-400`} />
              </div>
              <div className="text-xs font-medium text-emerald-400">
                {card.trend}
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-slate-500 font-medium">{card.title}</p>
              <p className="text-3xl font-bold text-white mt-1">{card.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* viewership Trends */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-6">Global Concurrent Viewership (HLS / DASH)</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={viewershipData}>
                <defs>
                  <linearGradient id="colorConcurrent" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="time" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                />
                <Area type="monotone" dataKey="concurrent" stroke="#6366f1" strokeWidth={3} fillOpacity={1} fill="url(#colorConcurrent)" name="Concurrent Viewers" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Content Breakdown */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-6">Consumption by Quality Tier</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={contentFormatBreakdown}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {contentFormatBreakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 space-y-2">
            {contentFormatBreakdown.map((item) => (
              <div key={item.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-sm text-slate-400">{item.name}</span>
                </div>
                <span className="text-sm font-bold text-white">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Media Asset Ledger Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <h3 className="text-lg font-bold text-white">Active Content Supply Chain</h3>
          <button className="text-indigo-400 hover:text-indigo-300 text-sm font-medium">View Transcoding Queue</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-800/50 text-slate-400 text-xs uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-semibold">Content Title</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold">Format</th>
                <th className="px-6 py-4 font-semibold">Distribution</th>
                <th className="px-6 py-4 font-semibold">DRM Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {[
                { name: 'World Cup Final 2026', status: 'Live', format: 'HLS / 4K', distribution: 'Multi-CDN (Global)', drm: 'Widevine / FairPlay' },
                { name: 'Enterprise Tech Keynote', status: 'Transcoding', format: 'MP4 -> ABR', distribution: 'Origin Cache', drm: 'None' },
                { name: 'Seasonal Promo Video', status: 'Published', format: 'DASH / 1080p', distribution: 'Edge Cached', drm: 'PlayReady' },
              ].map((content, i) => (
                <tr key={i} className="hover:bg-slate-800/50 transition-all group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <PlayCircle className="w-5 h-5 text-indigo-400" />
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors">{content.name}</span>
                        <span className="text-xs text-slate-500 font-mono">ID: MEDIA-921-X</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      content.status === 'Live' ? 'bg-indigo-500/10 text-indigo-500 animate-pulse' : 'bg-slate-800 text-slate-400'
                    }`}>
                      {content.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-300">{content.format}</td>
                  <td className="px-6 py-4 text-sm text-slate-400 font-medium">{content.distribution}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-500" />
                      <span className="text-xs text-slate-500">{content.drm}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MediaDashboard;
