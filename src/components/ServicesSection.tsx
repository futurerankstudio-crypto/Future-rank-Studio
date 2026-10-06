import React, { useState } from 'react';
import {
  Globe,
  Brain,
  Smartphone,
  Palette,
  Cloud,
  ShoppingCart,
  TrendingUp,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  X,
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { SERVICES, STUDIO_INFO } from '../data/contentData';
import { Service } from '../types';

interface ServicesSectionProps {
  onSelectServiceForQuote?: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForQuote }) => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const renderIcon = (iconName: string, className = 'w-7 h-7') => {
    switch (iconName) {
      case 'Globe':
        return <Globe className={className} />;
      case 'Brain':
        return <Brain className={className} />;
      case 'Smartphone':
        return <Smartphone className={className} />;
      case 'Palette':
        return <Palette className={className} />;
      case 'Cloud':
        return <Cloud className={className} />;
      case 'ShoppingCart':
        return <ShoppingCart className={className} />;
      case 'TrendingUp':
        return <TrendingUp className={className} />;
      case 'ShieldCheck':
        return <ShieldCheck className={className} />;
      default:
        return <Globe className={className} />;
    }
  };

  return (
    <section id="services" className="relative py-24 bg-[#030712] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-indigo-900/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-fuchsia-400 block mb-2 font-mono">
              OUR SERVICES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-['Space_Grotesk',sans-serif]">
              What We Do
            </h2>
            <p className="mt-3 text-base text-slate-300/80 leading-relaxed">
              We offer a full range of digital and technology services to help your business grow in the modern world.
            </p>
          </div>

          <a
            href="#websites"
            className="inline-flex items-center gap-2 text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors group self-start md:self-end"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="group relative rounded-2xl p-6 bg-slate-900/40 hover:bg-slate-900/70 border border-slate-800/80 hover:border-purple-500/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-950/40 cursor-pointer flex flex-col justify-between"
            >
              {/* Top Row: Icon & hover arrow */}
              <div>
                <div
                  className="w-13 h-13 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: `${service.color}18`,
                    color: service.color,
                    border: `1px solid ${service.color}35`
                  }}
                >
                  {renderIcon(service.iconName, 'w-6 h-6')}
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors font-['Space_Grotesk',sans-serif]">
                  {service.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed">
                  {service.shortDesc}
                </p>
              </div>

              {/* Bottom Tag / Details trigger */}
              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs font-semibold text-slate-500 group-hover:text-purple-400 transition-colors">
                <span>Explore Details</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-[#090d1a] border border-purple-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-purple-950/60 max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-start gap-4 mb-6">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                style={{
                  backgroundColor: `${selectedService.color}25`,
                  color: selectedService.color,
                  border: `1px solid ${selectedService.color}50`
                }}
              >
                {renderIcon(selectedService.iconName, 'w-7 h-7')}
              </div>
              <div>
                <span className="text-xs font-mono uppercase text-purple-400 font-semibold">
                  Service Overview
                </span>
                <h3 className="text-2xl font-bold text-white font-['Space_Grotesk',sans-serif]">
                  {selectedService.title}
                </h3>
                <p className="text-sm text-slate-300 mt-1">
                  {selectedService.shortDesc}
                </p>
              </div>
            </div>

            {/* Core Capabilities */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                Key Deliverables & Highlights
              </h4>
              <ul className="space-y-2.5">
                {selectedService.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Chips */}
            <div className="mb-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Technologies We Use
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedService.popularTech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-slate-800/80 text-purple-200 border border-slate-700/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-800">
              <a
                href={STUDIO_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-emerald-950/80 text-emerald-300 border border-emerald-500/50 hover:bg-emerald-900 transition-colors"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Discuss on WhatsApp (+92 321 7507345)</span>
              </a>

              <button
                onClick={() => {
                  const serviceName = selectedService.title;
                  setSelectedService(null);
                  if (onSelectServiceForQuote) {
                    onSelectServiceForQuote(serviceName);
                  }
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 transition-all cursor-pointer shadow-lg shadow-purple-900/40"
              >
                <span>Request Custom Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
