import React, { useState, useEffect } from 'react';
import { Search, X, ArrowRight, ExternalLink, Globe, Brain, Code } from 'lucide-react';
import { ALL_PROJECTS } from '../data/projectsData';
import { SERVICES, TEAM_MEMBERS } from '../data/contentData';
import { Project } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (project: Project) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProject
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        // Toggle or open
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredProjects = query
    ? ALL_PROJECTS.filter((p) =>
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        p.industry.toLowerCase().includes(query.toLowerCase()) ||
        p.techStack.some((t) => t.toLowerCase().includes(query.toLowerCase()))
      ).slice(0, 6)
    : ALL_PROJECTS.slice(0, 5);

  const filteredServices = query
    ? SERVICES.filter((s) =>
        s.title.toLowerCase().includes(query.toLowerCase()) ||
        s.shortDesc.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 4)
    : [];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-[#090d1a] border border-purple-500/40 rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        
        {/* Search Input Bar */}
        <div className="flex items-center px-5 py-4 border-b border-slate-800">
          <Search className="w-5 h-5 text-purple-400 mr-3 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search 35+ websites, AI solutions, services..."
            className="w-full bg-transparent text-sm sm:text-base text-white placeholder-slate-500 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Results */}
        <div className="p-4 max-h-[60vh] overflow-y-auto space-y-4">
          
          {/* Services Matches */}
          {filteredServices.length > 0 && (
            <div>
              <span className="text-[10px] font-mono uppercase text-slate-500 font-bold px-2 block mb-2">
                Services
              </span>
              <div className="space-y-1">
                {filteredServices.map((service) => (
                  <a
                    key={service.id}
                    href="#services"
                    onClick={() => onClose()}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-purple-950/40 border border-transparent hover:border-purple-500/30 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Brain className="w-4 h-4 text-purple-400" />
                      <div>
                        <span className="text-xs font-bold text-white block">{service.title}</span>
                        <span className="text-[11px] text-slate-400">{service.shortDesc}</span>
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Websites & Projects Matches */}
          <div>
            <span className="text-[10px] font-mono uppercase text-slate-500 font-bold px-2 block mb-2">
              {query ? `Websites (${filteredProjects.length})` : 'Popular Website Showcases'}
            </span>
            <div className="space-y-1.5">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => {
                    onClose();
                    onSelectProject(project);
                  }}
                  className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-900 border border-transparent hover:border-slate-800 transition-colors cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-10 h-7 rounded object-cover border border-slate-700 shrink-0"
                    />
                    <div>
                      <span className="text-xs font-bold text-white group-hover:text-purple-300 block">
                        {project.title}
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono">
                        {project.category} · {project.framework}
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-purple-400" />
                </div>
              ))}
            </div>
          </div>

          {/* Quick Founders Shortcut */}
          <div className="pt-3 border-t border-slate-800/80 px-2 flex items-center justify-between text-xs text-slate-400">
            <span>Leadership: Adeel Abbas &amp; Mir Zain Haider</span>
            <a
              href="#about"
              onClick={onClose}
              className="text-purple-400 hover:underline"
            >
              View Founders &rarr;
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
