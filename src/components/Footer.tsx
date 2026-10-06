import React, { useState } from 'react';
import { ArrowRight, Check, PhoneCall, Mail, Heart } from 'lucide-react';
import { FutureRankLogo } from './FutureRankLogo';
import { STUDIO_INFO } from '../data/contentData';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Websites', href: '#websites' },
    { label: 'AI Solutions', href: '#ai-solutions' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-[#02040a] border-t border-purple-950/40 text-slate-400 text-xs">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-purple-900/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        
        {/* Top Part: Logo, Links, Socials & Newsletter matching screenshot */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand & Brief */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-sm">
            <FutureRankLogo size="md" />
            <p className="mt-4 text-xs text-slate-400/90 leading-relaxed">
              Future Rank Studio specializes in premium website engineering, modern AI agent architectures, and enterprise cloud software solutions.
            </p>

            <div className="mt-4 flex items-center gap-4 text-xs text-slate-300">
              <a
                href={STUDIO_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>{STUDIO_INFO.phone}</span>
              </a>
              <span className="text-slate-600">·</span>
              <a
                href={`mailto:${STUDIO_INFO.email}`}
                className="flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{STUDIO_INFO.email}</span>
              </a>
            </div>
          </div>

          {/* Nav links row matching screenshot */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 max-w-xl">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs font-medium text-slate-300 hover:text-purple-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Socials & Newsletter Box matching screenshot */}
          <div className="flex flex-col items-center lg:items-end w-full lg:w-auto">
            {/* Social Icons row */}
            <div className="flex items-center gap-3 mb-4">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-purple-500/50 transition-colors"
                aria-label="Facebook"
              >
                <span className="font-bold text-xs">f</span>
              </a>
              {/* X */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-purple-500/50 transition-colors"
                aria-label="X"
              >
                <span className="font-bold text-xs">𝕏</span>
              </a>
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-purple-500/50 transition-colors"
                aria-label="LinkedIn"
              >
                <span className="font-bold text-xs">in</span>
              </a>
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-purple-500/50 transition-colors"
                aria-label="Instagram"
              >
                <span className="font-bold text-xs">ig</span>
              </a>
              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-purple-500/50 transition-colors"
                aria-label="YouTube"
              >
                <span className="font-bold text-xs">yt</span>
              </a>
            </div>

            {/* Newsletter email box */}
            <div className="w-full sm:w-72">
              <span className="text-[11px] text-slate-400 block mb-1.5 text-center lg:text-right">
                Subscribe to our newsletter
              </span>
              {subscribed ? (
                <div className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-full bg-purple-950/60 border border-purple-500/40 text-purple-300 text-xs">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Subscribed successfully!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="relative flex items-center">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full pl-3.5 pr-10 py-2 rounded-full bg-slate-950 border border-slate-800 focus:border-purple-500 focus:outline-none text-xs text-white placeholder-slate-600"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 w-7 h-7 rounded-full bg-purple-600 hover:bg-purple-500 text-white flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Subscribe"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

        {/* Bottom Line matching screenshot */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Future Rank Studio. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">Building the Future with AI.</span>
            <span>·</span>
            <span>Leadership: Adeel Abbas &amp; Mir Zain Haider</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
