import React from 'react';
import { ArrowRight, Play, CheckCircle2, ShieldCheck, Clock, Headphones, Mouse } from 'lucide-react';
import { FutureRankLogo } from './FutureRankLogo';
import { STUDIO_INFO } from '../data/contentData';

interface HeroProps {
  onOpenVideo: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenVideo, onExploreServices }) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen pt-28 pb-16 flex items-center overflow-hidden bg-[#030712]"
    >
      {/* Background Ambient Glows & Cyber Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-40 w-[30rem] h-[30rem] bg-indigo-600/20 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-cyan-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* AI Powered Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-semibold tracking-wider uppercase mb-6 shadow-sm shadow-purple-900/50">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>AI POWERED DIGITAL SOLUTIONS</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6 font-['Space_Grotesk',sans-serif]">
              Building the Future <br />
              with{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-fuchsia-500 bg-clip-text text-transparent filter drop-shadow-[0_0_25px_rgba(168,85,247,0.4)]">
                AI & Technology
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300/90 max-w-2xl leading-relaxed mb-8 font-normal">
              {STUDIO_INFO.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <button
                onClick={onExploreServices}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-purple-500 hover:to-indigo-500 shadow-xl shadow-purple-900/40 hover:shadow-purple-600/50 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenVideo}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/70 hover:border-purple-500/50 transition-all duration-300 hover:scale-[1.02] cursor-pointer group"
              >
                <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                  <Play className="w-3 h-3 text-purple-400 fill-purple-400 ml-0.5" />
                </div>
                <span>Watch Video</span>
              </button>
            </div>

            {/* 4 Feature Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800/80 w-full">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Modern Design</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-300">
                <ShieldCheck className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Secure & Scalable</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-300">
                <Clock className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>On-Time Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-300">
                <Headphones className="w-4 h-4 text-fuchsia-400 shrink-0" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Future Rank Studio Hero Visual */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
            
            {/* Center Visual Container */}
            <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
              
              {/* Outer Orbit Rings */}
              <div className="absolute inset-0 rounded-full border border-purple-500/20 animate-spin-slow pointer-events-none" />
              <div className="absolute inset-8 rounded-full border border-dashed border-cyan-500/25 pointer-events-none" />
              <div className="absolute inset-16 rounded-full border border-indigo-500/20 pointer-events-none" />

              {/* Glowing Holographic Digital Globe Sphere */}
              <div className="absolute inset-6 rounded-full overflow-hidden opacity-75 shadow-[0_0_80px_rgba(124,58,237,0.35)] pointer-events-none">
                <img
                  src="/src/assets/images/hero_digital_globe_1791264649460.jpg"
                  alt="Future Rank Studio Digital Globe"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover mix-blend-screen scale-110 filter brightness-110 contrast-125 animate-float-slow"
                />
              </div>

              {/* Floating Center Future Rank 3D Branding Badge */}
              <div className="relative z-20 flex flex-col items-center justify-center p-6 rounded-3xl bg-slate-950/80 backdrop-blur-xl border border-purple-500/40 shadow-2xl shadow-purple-950/80 text-center animate-float-slow">
                <FutureRankLogo size="xl" showText={false} />
                
                <div className="mt-4 text-center">
                  <h2 className="text-xl sm:text-2xl font-black text-white tracking-wider font-['Space_Grotesk',sans-serif]">
                    FUTURE RANK
                  </h2>
                  <div className="flex items-center justify-center gap-2 mt-1">
                    <span className="h-[1px] w-6 bg-gradient-to-r from-transparent to-purple-400"></span>
                    <span className="text-[11px] sm:text-xs font-semibold text-purple-300 tracking-[0.35em]">
                      STUDIO
                    </span>
                    <span className="h-[1px] w-6 bg-gradient-to-l from-transparent to-purple-400"></span>
                  </div>
                </div>

                {/* Cyber badge indicator */}
                <div className="mt-4 px-3 py-1 rounded-full bg-purple-900/40 border border-purple-500/30 text-[10px] font-mono text-cyan-300">
                  EST. 2020 · WEB & AI SPECIALISTS
                </div>
              </div>

              {/* Decorative side quote */}
              <div className="hidden sm:block absolute -right-6 top-1/2 -translate-y-1/2 text-right z-20 pointer-events-none">
                <p className="text-xs font-semibold text-purple-300/90 leading-tight">
                  Your Vision.
                </p>
                <p className="text-xs font-semibold text-indigo-300/90 leading-tight mt-1">
                  Our Technology.
                </p>
                <p className="text-[11px] text-cyan-400/90 font-mono mt-1">
                  The Future Starts Here.
                </p>
              </div>

            </div>

            {/* Scroll Down Indicator */}
            <a
              href="#services"
              className="mt-8 inline-flex flex-col items-center text-slate-400 hover:text-purple-400 transition-colors group cursor-pointer"
            >
              <div className="w-5 h-8 rounded-full border-2 border-slate-600 group-hover:border-purple-400 flex items-start justify-center p-1 transition-colors">
                <div className="w-1 h-2 bg-slate-400 group-hover:bg-purple-400 rounded-full animate-bounce" />
              </div>
              <span className="text-[10px] font-medium tracking-widest uppercase mt-1 text-slate-500 group-hover:text-slate-300">
                Scroll Down
              </span>
            </a>

          </div>

        </div>
      </div>
    </section>
  );
};
