import React from 'react';
import { Quote, Star, ArrowRight } from 'lucide-react';
import { TESTIMONIALS } from '../data/contentData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="case-studies" className="relative py-24 bg-[#02050e] overflow-hidden border-t border-purple-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-fuchsia-400 block mb-2 font-mono">
              WHAT CLIENTS SAY
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-['Space_Grotesk',sans-serif]">
              Trusted by Businesses Around the World
            </h2>
            <p className="mt-3 text-base text-slate-300/80 leading-relaxed">
              We&apos;re proud to have worked with amazing clients and helped them achieve their goals.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors group self-start md:self-end"
          >
            <span>View All Testimonials</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* 3 Testimonials Grid matching screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="relative rounded-2xl p-6 sm:p-7 bg-slate-900/40 hover:bg-slate-900/70 border border-slate-800/80 hover:border-purple-500/50 backdrop-blur-md transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-lg"
            >
              {/* Top Quote Icon & Review Text */}
              <div>
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-5">
                  <Quote className="w-5 h-5 fill-purple-400/20" />
                </div>

                <p className="text-sm text-slate-300/90 leading-relaxed italic mb-6">
                  &ldquo;{t.content}&rdquo;
                </p>
              </div>

              {/* Bottom Author Info & Stars */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-full object-cover border border-purple-500/40"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white font-['Space_Grotesk',sans-serif]">
                      {t.name}
                    </h4>
                    <p className="text-[11px] text-slate-400">
                      {t.role}, <span className="text-purple-400 font-medium">{t.company}</span>
                    </p>
                  </div>
                </div>

                {/* 5-Star Rating */}
                <div className="flex items-center gap-0.5 text-amber-400">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
