import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, ExternalLink, Sparkles, Layers, Award, Star } from 'lucide-react';
import { ALL_PROJECTS } from '../data/projectsData';
import { STUDIO_INFO } from '../data/contentData';
import { Project } from '../types';

interface WebsiteShowcaseProps {
  onOpenProjectDetail: (project: Project) => void;
  onViewAllWebsites: () => void;
}

export const WebsiteShowcase: React.FC<WebsiteShowcaseProps> = ({
  onOpenProjectDetail,
  onViewAllWebsites
}) => {
  // Use first 10 projects for the carousel showcase
  const carouselProjects = ALL_PROJECTS.slice(0, 10);
  const [currentIndex, setCurrentIndex] = useState(1); // Default to Modern Real Estate (index 1)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? carouselProjects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === carouselProjects.length - 1 ? 0 : prev + 1));
  };

  const activeProject = carouselProjects[currentIndex];
  const prevProject = carouselProjects[(currentIndex - 1 + carouselProjects.length) % carouselProjects.length];
  const nextProject = carouselProjects[(currentIndex + 1) % carouselProjects.length];

  return (
    <section id="portfolio" className="relative py-24 bg-[#02050e] overflow-hidden border-t border-b border-purple-950/30">
      {/* Background glow and subtle dots */}
      <div className="absolute inset-0 bg-dots-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Bio, Button, & 4 Big Stats */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="text-xs font-bold uppercase tracking-widest text-fuchsia-400 block mb-2 font-mono">
              OUR PORTFOLIO
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-['Space_Grotesk',sans-serif]">
              Website Showcase
            </h2>
            <p className="mt-4 text-base text-slate-300/80 leading-relaxed max-w-lg">
              Explore 50+ live websites we&apos;ve designed and developed for different industries. Click on any website to view the live demo and case study.
            </p>

            <button
              onClick={onViewAllWebsites}
              className="mt-6 inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-lg shadow-purple-900/40 hover:shadow-purple-600/50 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
            >
              <span>View All 50 Websites</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* 4 Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-6 mt-12 pt-8 border-t border-slate-800/80 w-full">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-['Space_Grotesk',sans-serif] text-glow-purple">
                  {STUDIO_INFO.stats.liveWebsites}
                </div>
                <div className="text-xs text-slate-400 mt-1 font-medium">
                  Live Websites
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-['Space_Grotesk',sans-serif] text-glow-blue">
                  {STUDIO_INFO.stats.industries}
                </div>
                <div className="text-xs text-slate-400 mt-1 font-medium">
                  Industries
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-['Space_Grotesk',sans-serif]">
                  {STUDIO_INFO.stats.clientSatisfaction}
                </div>
                <div className="text-xs text-slate-400 mt-1 font-medium">
                  Client Satisfaction
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-['Space_Grotesk',sans-serif] text-yellow-400">
                  {STUDIO_INFO.stats.averageRating}
                </div>
                <div className="text-xs text-slate-400 mt-1 font-medium">
                  Average Rating
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Website Mockup Carousel */}
          <div className="lg:col-span-7 relative flex flex-col items-center">
            
            {/* Carousel Stage */}
            <div className="relative w-full max-w-2xl h-[380px] sm:h-[440px] flex items-center justify-center">
              
              {/* Prev Card (Peeking on left) */}
              <div
                onClick={handlePrev}
                className="hidden sm:block absolute -left-6 md:-left-12 w-64 h-80 rounded-2xl overflow-hidden bg-slate-900/60 border border-slate-800/60 opacity-40 hover:opacity-75 transition-all duration-500 transform -rotate-3 scale-90 cursor-pointer shadow-xl z-0"
              >
                <img
                  src={prevProject.image}
                  alt={prevProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 flex flex-col justify-end">
                  <span className="text-[10px] uppercase font-mono text-cyan-400">{prevProject.category}</span>
                  <span className="text-xs font-bold text-white truncate">{prevProject.title}</span>
                </div>
              </div>

              {/* Next Card (Peeking on right) */}
              <div
                onClick={handleNext}
                className="hidden sm:block absolute -right-6 md:-right-12 w-64 h-80 rounded-2xl overflow-hidden bg-slate-900/60 border border-slate-800/60 opacity-40 hover:opacity-75 transition-all duration-500 transform rotate-3 scale-90 cursor-pointer shadow-xl z-0"
              >
                <img
                  src={nextProject.image}
                  alt={nextProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 flex flex-col justify-end">
                  <span className="text-[10px] uppercase font-mono text-cyan-400">{nextProject.category}</span>
                  <span className="text-xs font-bold text-white truncate">{nextProject.title}</span>
                </div>
              </div>

              {/* Active Featured Card (Center with browser frame mockup) */}
              <div className="relative z-10 w-full max-w-lg rounded-2xl overflow-hidden bg-[#0a0f1d] border-2 border-purple-500/50 shadow-2xl shadow-purple-950/80 transition-all duration-500 group">
                
                {/* Browser Top Chrome */}
                <div className="px-4 py-2.5 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <div className="px-3 py-0.5 rounded-md bg-slate-950/80 text-[10px] text-slate-400 font-mono truncate max-w-[200px]">
                    {activeProject.liveUrl.replace('https://', '')}
                  </div>
                  <span className="text-[10px] font-mono text-purple-400 font-semibold uppercase">
                    {activeProject.category}
                  </span>
                </div>

                {/* Mockup Preview Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                  <img
                    src={activeProject.image}
                    alt={activeProject.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d] via-transparent to-black/20" />
                </div>

                {/* Card Content & Action Bar */}
                <div className="p-5 bg-[#0a0f1d]">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-xs font-semibold text-cyan-400 block mb-0.5">
                        {activeProject.industry}
                      </span>
                      <h3 className="text-xl font-bold text-white font-['Space_Grotesk',sans-serif]">
                        {activeProject.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-slate-800 text-slate-300 border border-slate-700/60">
                          {activeProject.framework}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-purple-950/70 text-purple-300 border border-purple-800/40">
                          {activeProject.styling}
                        </span>
                        <span className="text-[11px] text-emerald-400 font-medium">
                          {activeProject.metrics}
                        </span>
                      </div>
                    </div>

                    {/* Live Demo Trigger */}
                    <button
                      onClick={() => onOpenProjectDetail(activeProject)}
                      className="shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-md shadow-purple-900/50 transition-transform active:scale-95 cursor-pointer"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>

              {/* Prev / Next Circular Navigation Controls */}
              <button
                onClick={handlePrev}
                className="absolute left-1 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-slate-900/90 border border-purple-500/40 text-white flex items-center justify-center hover:bg-purple-600 transition-colors shadow-lg cursor-pointer"
                aria-label="Previous website showcase"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-1 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-slate-900/90 border border-purple-500/40 text-white flex items-center justify-center hover:bg-purple-600 transition-colors shadow-lg cursor-pointer"
                aria-label="Next website showcase"
              >
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>

            {/* Pagination Counter: 01 / 50 matching screenshot */}
            <div className="mt-6 flex items-center gap-3">
              <span className="text-sm font-mono font-bold text-purple-400">
                {String(currentIndex + 1).padStart(2, '0')}
              </span>
              <span className="text-xs text-slate-600 font-mono">/</span>
              <span className="text-sm font-mono text-slate-400">
                {String(carouselProjects.length).padStart(2, '0')}
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
