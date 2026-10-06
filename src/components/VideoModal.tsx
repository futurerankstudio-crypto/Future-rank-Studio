import React from 'react';
import { X, Play, Sparkles, PhoneCall, ArrowRight } from 'lucide-react';
import { STUDIO_INFO } from '../data/contentData';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  title = 'Future Rank Studio — Reel'
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-3xl bg-[#090d1a] border border-purple-500/40 rounded-3xl overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse inline-block" />
            <h3 className="text-sm font-bold text-white font-['Space_Grotesk',sans-serif]">
              {title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Reel Screen Mockup / Interactive Presentation */}
        <div className="relative aspect-video bg-slate-950 flex flex-col items-center justify-center p-8 overflow-hidden group">
          {/* Animated Background Mesh */}
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/40 via-indigo-950/60 to-black pointer-events-none" />
          <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

          {/* Center Reel Content */}
          <div className="relative z-10 text-center max-w-lg space-y-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 border-2 border-white/20 flex items-center justify-center text-white mx-auto shadow-2xl shadow-purple-600/50">
              <Play className="w-7 h-7 fill-white ml-1" />
            </div>

            <div>
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block mb-1">
                ENGINEERING EXCELLENCE
              </span>
              <h4 className="text-2xl font-black text-white font-['Space_Grotesk',sans-serif]">
                Future Rank Studio Showreel
              </h4>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Watch how founders Adeel Abbas &amp; Mir Zain Haider architect high-performance websites, AI agent systems, and mission-critical cloud infrastructure.
              </p>
            </div>

            {/* Metrics Chips */}
            <div className="pt-2 flex flex-wrap justify-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-purple-950/80 border border-purple-500/40 text-purple-300">
                50+ Live Deployments
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-950/80 border border-cyan-500/40 text-cyan-300">
                20+ Global Industries
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-950/80 border border-emerald-500/40 text-emerald-300">
                100% Satisfaction
              </span>
            </div>
          </div>
        </div>

        {/* Footer info & WhatsApp button */}
        <div className="p-6 bg-slate-900/80 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-slate-400">
            Have questions about our process? Schedule a 15-minute call today.
          </div>

          <a
            href={STUDIO_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-colors"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Connect on WhatsApp ({STUDIO_INFO.phone})</span>
          </a>
        </div>

      </div>
    </div>
  );
};
