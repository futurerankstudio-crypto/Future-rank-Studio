import React, { useState, useMemo } from 'react';
import { Search, ExternalLink, Filter, Sparkles, Layers, ArrowRight } from 'lucide-react';
import { ALL_PROJECTS } from '../data/projectsData';
import { Project } from '../types';

interface WebsitesDirectoryProps {
  onSelectProject: (project: Project) => void;
}

export const WebsitesDirectory: React.FC<WebsitesDirectoryProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [visibleCount, setVisibleCount] = useState<number>(12);

  const categories = [
    'All',
    'AI & SaaS',
    'Real Estate',
    'E-Commerce',
    'Healthcare',
    'Restaurant & Food',
    'Corporate & Finance',
    'Education',
    'Creative & Media',
  ];

  const filteredProjects = useMemo(() => {
    return ALL_PROJECTS.filter((project) => {
      const matchesCategory =
        selectedCategory === 'All' || project.category === selectedCategory;
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.techStack.some((t) =>
          t.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const displayedProjects = filteredProjects.slice(0, visibleCount);

  return (
    <section id="websites" className="relative py-24 bg-[#030712] border-b border-purple-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-mono font-semibold uppercase mb-3">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>FULL PRODUCTION PORTFOLIO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-['Space_Grotesk',sans-serif]">
            35+ Production Websites &amp; Applications
          </h2>
          <p className="mt-3 text-base text-slate-300/80 leading-relaxed">
            Every website is custom engineered for maximum conversion, lightning-fast Core Web Vitals, and responsive beauty across all devices.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-800/80">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setVisibleCount(12);
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-900/50'
                    : 'bg-slate-900/60 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Quick Filter Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by tech or industry..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 focus:border-purple-500 focus:outline-none text-xs text-white placeholder-slate-500 transition-colors"
            />
          </div>

        </div>

        {/* Project Results Count */}
        <div className="flex items-center justify-between text-xs text-slate-400 mb-6">
          <span>
            Showing <strong className="text-purple-400">{displayedProjects.length}</strong> of{' '}
            <strong className="text-white">{filteredProjects.length}</strong> websites
          </span>
          {selectedCategory !== 'All' && (
            <button
              onClick={() => setSelectedCategory('All')}
              className="text-xs text-cyan-400 hover:underline"
            >
              Reset filter
            </button>
          )}
        </div>

        {/* 35+ Project Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group rounded-2xl overflow-hidden bg-slate-900/40 border border-slate-800/80 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-purple-950/40 cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Browser Top Bar */}
                <div className="px-3.5 py-2 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-rose-500/70 inline-block" />
                    <span className="w-2 h-2 rounded-full bg-amber-500/70 inline-block" />
                    <span className="w-2 h-2 rounded-full bg-emerald-500/70 inline-block" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 truncate max-w-[160px]">
                    {project.liveUrl.replace('https://', '')}
                  </span>
                  <span className="text-[10px] font-mono text-purple-400 font-semibold uppercase">
                    {project.category}
                  </span>
                </div>

                {/* Screenshot Mockup Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                  
                  {/* Floating Metric Badge */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-bold bg-black/75 backdrop-blur-md text-emerald-400 border border-emerald-500/40">
                    {project.metrics}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5">
                  <span className="text-[11px] font-medium text-cyan-400 block mb-1">
                    {project.industry}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-purple-300 transition-colors font-['Space_Grotesk',sans-serif]">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-slate-800/80 text-slate-300 border border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-slate-500">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="px-5 py-3.5 bg-slate-950/60 border-t border-slate-800/60 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-purple-400 transition-colors">
                <span>View Live Demo &amp; Case</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredProjects.length && (
          <div className="text-center mt-12">
            <button
              onClick={() => setVisibleCount((prev) => prev + 12)}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 border border-purple-500/30 hover:border-purple-500/60 transition-all cursor-pointer shadow-lg"
            >
              <span>Load More Websites ({filteredProjects.length - visibleCount} remaining)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
