import React, { useState } from 'react';
import {
  X,
  ExternalLink,
  Laptop,
  Smartphone,
  CheckCircle2,
  PhoneCall,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Share2
} from 'lucide-react';
import { Project } from '../types';
import { STUDIO_INFO } from '../data/contentData';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onRequestSimilar: (projectName: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onRequestSimilar
}) => {
  const [deviceView, setDeviceView] = useState<'desktop' | 'mobile'>('desktop');

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-5xl bg-[#090d1a] border border-purple-500/50 rounded-3xl shadow-2xl shadow-purple-950/80 max-h-[92vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Top Control Bar */}
        <div className="px-5 py-3.5 bg-slate-900/95 border-b border-slate-800 flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3">
            {/* Window control dots */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={onClose}
                className="w-3 h-3 rounded-full bg-rose-500 hover:opacity-80 transition-opacity cursor-pointer"
                title="Close"
              />
              <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
            </div>

            {/* URL Display */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300">
              <span className="text-emerald-400">https://</span>
              <span>{project.liveUrl.replace('https://', '')}</span>
            </div>
          </div>

          {/* Device toggle */}
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800">
              <button
                onClick={() => setDeviceView('desktop')}
                className={`p-1.5 rounded-lg text-xs font-medium transition-colors ${
                  deviceView === 'desktop' ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
                title="Desktop View"
              >
                <Laptop className="w-4 h-4" />
              </button>
              <button
                onClick={() => setDeviceView('mobile')}
                className={`p-1.5 rounded-lg text-xs font-medium transition-colors ${
                  deviceView === 'mobile' ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
                title="Mobile View"
              >
                <Smartphone className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto flex-1 p-6 sm:p-8 space-y-8">
          
          {/* Project Header Info */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-purple-950 text-purple-300 border border-purple-800">
                  {project.category}
                </span>
                <span className="text-xs text-slate-400">
                  {project.industry}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-['Space_Grotesk',sans-serif]">
                {project.title}
              </h2>
              <p className="mt-2 text-sm text-slate-300 max-w-2xl leading-relaxed">
                {project.fullDescription || project.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch md:items-end gap-3 shrink-0">
              <button
                onClick={() => onRequestSimilar(project.title)}
                className="px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-lg shadow-purple-900/50 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Request Similar Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Interactive Preview Canvas */}
          <div className="flex justify-center bg-slate-950/80 rounded-2xl p-4 border border-slate-800/80">
            <div
              className={`transition-all duration-300 overflow-hidden rounded-xl border border-purple-500/30 shadow-2xl ${
                deviceView === 'desktop' ? 'w-full' : 'w-[360px]'
              }`}
            >
              {/* Mockup Header */}
              <div className="relative aspect-[16/9] w-full bg-slate-900 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-70" />
                
                {/* Overlay Live Simulation Banner */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-3 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-700/60">
                  <div>
                    <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold block">
                      Production Live Deployment
                    </span>
                    <span className="text-xs text-white font-semibold">
                      Client: {project.client} ({project.year})
                    </span>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                    {project.metrics}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Features and Tech Stack Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            {/* Features */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-400" />
                Key Engineered Capabilities
              </h3>
              <div className="space-y-2.5">
                {project.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-200">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack & Details */}
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  Technology Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-slate-900 text-purple-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Direct Founder Consultation Box */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-purple-950/50 to-indigo-950/50 border border-purple-500/40">
                <h4 className="text-sm font-bold text-white font-['Space_Grotesk',sans-serif] mb-1">
                  Want a project like this built for your business?
                </h4>
                <p className="text-xs text-slate-300 mb-3">
                  Adeel Abbas and Mir Zain Haider offer free initial architectural roadmaps and estimates.
                </p>
                <a
                  href={`https://wa.me/${STUDIO_INFO.whatsappRaw}?text=Hello%20Future%20Rank%20Studio%2C%20I%20love%20the%20${encodeURIComponent(project.title)}%20project%20and%20want%20to%20build%20something%20similar%21`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Discuss on WhatsApp (+92 321 7507345)</span>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
