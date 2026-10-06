import React, { useState } from 'react';
import { Search, Palette, Code2, ShieldCheck, Rocket, ArrowRight, CheckCircle2 } from 'lucide-react';
import { PROCESS_STEPS } from '../data/contentData';
import { ProcessStep } from '../types';

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search':
        return <Search className="w-5 h-5" />;
      case 'Palette':
        return <Palette className="w-5 h-5" />;
      case 'Code2':
        return <Code2 className="w-5 h-5" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5" />;
      case 'Rocket':
        return <Rocket className="w-5 h-5" />;
      default:
        return <Code2 className="w-5 h-5" />;
    }
  };

  return (
    <section id="process" className="relative py-24 bg-[#02050e] overflow-hidden border-t border-purple-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-fuchsia-400 block mb-2 font-mono">
              HOW WE WORK
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-['Space_Grotesk',sans-serif]">
              Our Process
            </h2>
            <p className="mt-3 text-base text-slate-300/80 leading-relaxed">
              We follow a clear and proven process to turn your ideas into powerful digital solutions.
            </p>
          </div>

          <div className="hidden md:flex items-center gap-2 text-xs font-mono text-purple-400 bg-purple-950/40 px-3.5 py-1.5 rounded-full border border-purple-500/30">
            <span>5-STEP ZERO-DOWNTIME EXECUTION PIPELINE</span>
          </div>
        </div>

        {/* 5-Step Horizontal Timeline Bar matching screenshot */}
        <div className="relative mb-12">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-fuchsia-500 -translate-y-6 z-0 opacity-40" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {PROCESS_STEPS.map((step, idx) => {
              const isSelected = activeStep === idx;
              return (
                <div
                  key={step.step}
                  onClick={() => setActiveStep(idx)}
                  className={`relative p-6 rounded-2xl bg-slate-900/40 border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'border-purple-500 shadow-xl shadow-purple-950/50 bg-slate-900/90 -translate-y-2'
                      : 'border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/60'
                  }`}
                >
                  {/* Step Icon & Number */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                          isSelected
                            ? 'bg-purple-600 text-white shadow-md shadow-purple-600/50'
                            : 'bg-slate-800 text-slate-300'
                        }`}
                      >
                        {getStepIcon(step.icon)}
                      </div>
                      <span className="text-xl font-black font-mono text-purple-400/80">
                        {step.step}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white mb-2 font-['Space_Grotesk',sans-serif]">
                      {step.title}
                    </h3>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-semibold text-purple-400">
                    <span>{isSelected ? 'Viewing Details' : 'View Milestones'}</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Step Deliverables Detail Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-purple-500/30 backdrop-blur-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-mono uppercase text-cyan-400 font-bold">
                Step {PROCESS_STEPS[activeStep].step} Breakdown
              </span>
              <h4 className="text-xl sm:text-2xl font-bold text-white font-['Space_Grotesk',sans-serif]">
                {PROCESS_STEPS[activeStep].title}: Deliverables &amp; Quality Gates
              </h4>
            </div>
            <span className="text-xs text-slate-400">
              Guaranteed On-Time Milestone Delivery
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PROCESS_STEPS[activeStep].details.map((detail, dIdx) => (
              <div
                key={dIdx}
                className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-start gap-3"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-300 leading-relaxed">{detail}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
