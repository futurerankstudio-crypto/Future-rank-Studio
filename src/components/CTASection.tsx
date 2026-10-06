import React from 'react';
import { ArrowRight, PhoneCall, Mail, Sparkles, MessageSquare } from 'lucide-react';
import { STUDIO_INFO } from '../data/contentData';

interface CTASectionProps {
  onOpenQuote: () => void;
  onScrollToContact: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({
  onOpenQuote,
  onScrollToContact
}) => {
  return (
    <section className="relative py-20 bg-[#030712] overflow-hidden">
      {/* Background Cyber Glow & Wave Lines */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-950/40 via-indigo-950/40 to-blue-950/40 pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[50rem] h-64 bg-purple-600/20 rounded-full blur-[140px] pointer-events-none" />
      
      {/* Futuristic Wave Lines Graphic */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500 via-purple-500 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-14 rounded-3xl bg-slate-900/60 border border-purple-500/40 backdrop-blur-2xl shadow-2xl shadow-purple-950/60">
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            
            {/* Left Column: Heading and Subtitle */}
            <div className="max-w-2xl text-center lg:text-left">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-fuchsia-400 block mb-2">
                LET&apos;S BUILD SOMETHING GREAT
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-['Space_Grotesk',sans-serif]">
                Ready to Take Your Business to the Next Level?
              </h2>
              <p className="mt-4 text-base text-slate-300/90 leading-relaxed">
                Get in touch with us today and let&apos;s build your dream project together. Reach our team directly via WhatsApp or start your project brief online.
              </p>

              {/* Direct Quick Contact Info */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-6 text-xs text-slate-300">
                <a
                  href={STUDIO_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>WhatsApp: {STUDIO_INFO.phone}</span>
                </a>
                <span className="text-slate-600">·</span>
                <a
                  href={`mailto:${STUDIO_INFO.email}`}
                  className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{STUDIO_INFO.email}</span>
                </a>
              </div>
            </div>

            {/* Right Column: CTA Buttons matching screenshot */}
            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <button
                onClick={onOpenQuote}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-bold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-purple-500 hover:to-indigo-500 shadow-xl shadow-purple-900/50 hover:shadow-purple-600/60 transition-all hover:scale-105 cursor-pointer"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onScrollToContact}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700 hover:border-purple-500/50 transition-all cursor-pointer"
              >
                <span>Contact Us</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
