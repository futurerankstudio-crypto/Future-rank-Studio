import React, { useState } from 'react';
import {
  Play,
  ArrowRight,
  Award,
  CheckCircle2,
  Calendar,
  Users,
  Briefcase,
  Smile,
  Mail,
  PhoneCall,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { STUDIO_INFO, TEAM_MEMBERS } from '../data/contentData';

interface AboutSectionProps {
  onOpenStoryVideo: () => void;
  onOpenQuote: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenStoryVideo,
  onOpenQuote
}) => {
  const [selectedLeader, setSelectedLeader] = useState<number | null>(null);

  return (
    <section id="about" className="relative py-24 bg-[#030712] overflow-hidden">
      {/* Background radial blurs */}
      <div className="absolute top-10 left-1/4 w-[32rem] h-[32rem] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[32rem] h-[32rem] bg-indigo-900/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Part: Office Image & Company Introduction matching screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center mb-24">
          
          {/* Left Side: Office & Developer Image with Floating Badges */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-purple-500/30 shadow-2xl shadow-purple-950/50 group">
              <img
                src="/src/assets/images/about_studio_dev_1791264639224.jpg"
                alt="Future Rank Studio Tech Workspace"
                referrerPolicy="no-referrer"
                className="w-full h-[380px] sm:h-[440px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

              {/* Floating Innovation Badge */}
              <div className="absolute top-6 left-6 p-4 rounded-2xl bg-slate-950/80 backdrop-blur-md border border-purple-500/40 shadow-xl max-w-xs">
                <div className="text-xs font-bold text-white tracking-wide uppercase font-mono">
                  Innovation
                </div>
                <div className="text-xs font-medium text-purple-300">
                  Creativity
                </div>
                <div className="text-xs font-medium text-cyan-400">
                  Technology
                </div>
              </div>

              {/* Watch Our Story Play Button Button */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <button
                  onClick={onOpenStoryVideo}
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-purple-600/90 hover:bg-purple-500 text-white font-bold text-xs sm:text-sm backdrop-blur-md border border-purple-400/40 shadow-lg shadow-purple-900/60 transition-all hover:scale-105 cursor-pointer"
                >
                  <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                    <Play className="w-3.5 h-3.5 fill-white ml-0.5" />
                  </div>
                  <span>Watch Our Story</span>
                </button>

                <div className="px-3 py-1.5 rounded-xl bg-black/70 border border-slate-700/60 text-[11px] font-mono text-slate-300">
                  HQ: High-Performance Lab
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Introduction Text & 4 Stats Cards */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="text-xs font-bold uppercase tracking-widest text-fuchsia-400 block mb-2 font-mono">
              ABOUT FUTURE RANK STUDIO
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight font-['Space_Grotesk',sans-serif]">
              We Are a Team of Innovators &amp; Problem Solvers
            </h2>
            <p className="mt-4 text-base text-slate-300/85 leading-relaxed">
              Future Rank Studio is a modern technology company focused on building digital solutions that help businesses grow, automate processes and create better experiences. We combine creativity, technology and strategy to deliver high-quality, scalable and future-ready solutions.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-lg shadow-purple-900/40 transition-all cursor-pointer"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={STUDIO_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold bg-emerald-950/80 text-emerald-300 border border-emerald-500/50 hover:bg-emerald-900/90 transition-all"
              >
                <PhoneCall className="w-4 h-4" />
                <span>WhatsApp: {STUDIO_INFO.phone}</span>
              </a>
            </div>

            {/* 4 Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mt-10 w-full">
              <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/80 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white font-['Space_Grotesk',sans-serif]">
                    {STUDIO_INFO.stats.yearsExperience}
                  </div>
                  <div className="text-xs text-slate-400">
                    Years of Experience
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/80 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white font-['Space_Grotesk',sans-serif]">
                    {STUDIO_INFO.stats.successfulProjects}
                  </div>
                  <div className="text-xs text-slate-400">
                    Successful Projects
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/80 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-fuchsia-500/10 border border-fuchsia-500/30 flex items-center justify-center text-fuchsia-400 shrink-0">
                  <Smile className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white font-['Space_Grotesk',sans-serif]">
                    {STUDIO_INFO.stats.happyClients}
                  </div>
                  <div className="text-xs text-slate-400">
                    Happy Clients
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/80 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white font-['Space_Grotesk',sans-serif]">
                    {STUDIO_INFO.stats.teamMembers}
                  </div>
                  <div className="text-xs text-slate-400">
                    Team Members
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Featured Leadership Section: Adeel Abbas & Mir Zain Haider */}
        <div className="pt-12 border-t border-slate-800/80">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 block mb-2">
              EXECUTIVE LEADERSHIP
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-['Space_Grotesk',sans-serif]">
              Meet the Founders Behind Future Rank Studio
            </h3>
            <p className="mt-2 text-sm text-slate-400">
              Passionate founders combining deep engineering mastery and cutting-edge artificial intelligence to build next-generation software products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {TEAM_MEMBERS.map((member, idx) => (
              <div
                key={member.name}
                className="group relative rounded-3xl p-6 sm:p-8 bg-slate-900/40 hover:bg-slate-900/80 border border-slate-800/90 hover:border-purple-500/60 backdrop-blur-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-purple-950/50 flex flex-col justify-between"
              >
                <div>
                  {/* Photo & Badge */}
                  <div className="relative mb-6 rounded-2xl overflow-hidden aspect-[4/5] bg-slate-950 border border-purple-500/30">
                    <img
                      src={member.image}
                      alt={member.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d] via-transparent to-transparent opacity-80" />
                    
                    {/* Role Overlay Badge */}
                    <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-700/60">
                      <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">
                        {member.title}
                      </span>
                      <h4 className="text-lg font-bold text-white font-['Space_Grotesk',sans-serif]">
                        {member.name}
                      </h4>
                    </div>
                  </div>

                  {/* Member Role & Bio */}
                  <div className="space-y-3">
                    <p className="text-xs font-medium text-purple-300">
                      {member.role}
                    </p>
                    <p className="text-xs text-slate-300/90 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>

                  {/* Specialties Pills */}
                  <div className="mt-5">
                    <span className="text-[10px] font-mono uppercase text-slate-500 font-bold block mb-2">
                      Core Expertise
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {member.specialties.map((item) => (
                        <span
                          key={item}
                          className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-purple-950/60 text-purple-200 border border-purple-800/50"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Direct Contact Bar */}
                <div className="mt-8 pt-5 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                  <a
                    href={member.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-emerald-950/80 text-emerald-300 border border-emerald-500/50 hover:bg-emerald-900 transition-colors"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>WhatsApp Adeel / Zain</span>
                  </a>

                  <a
                    href={`mailto:${STUDIO_INFO.email}?subject=Project%20Inquiry%20for%20${encodeURIComponent(member.name)}`}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-white transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-purple-400" />
                    <span>{STUDIO_INFO.email}</span>
                  </a>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
