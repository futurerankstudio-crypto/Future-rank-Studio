import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { WebsiteShowcase } from './components/WebsiteShowcase';
import { WebsitesDirectory } from './components/WebsitesDirectory';
import { AboutSection } from './components/AboutSection';
import { AISolutionsSection } from './components/AISolutionsSection';
import { ProcessSection } from './components/ProcessSection';
import { CTASection } from './components/CTASection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { SearchModal } from './components/SearchModal';
import { VideoModal } from './components/VideoModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ProjectQuoteModal } from './components/ProjectQuoteModal';
import { Project } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [searchOpen, setSearchOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const [videoTitle, setVideoTitle] = useState('Future Rank Studio — Showreel');
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string>('Website Development');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Active section spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'portfolio', 'websites', 'ai-solutions', 'case-studies', 'process', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenVideo = (title = 'Future Rank Studio — Showreel') => {
    setVideoTitle(title);
    setVideoOpen(true);
  };

  const handleOpenQuoteWithService = (serviceName?: string) => {
    if (serviceName) setPreselectedService(serviceName);
    setQuoteOpen(true);
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToWebsites = () => {
    const el = document.getElementById('websites');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 flex flex-col font-['Plus_Jakarta_Sans',sans-serif] selection:bg-purple-600 selection:text-white">
      {/* Top Fixed Header */}
      <Navbar
        onOpenSearch={() => setSearchOpen(true)}
        onOpenQuote={() => handleOpenQuoteWithService()}
        activeSection={activeSection}
      />

      {/* Main Page Flow matching screenshot */}
      <main className="flex-1">
        {/* ① & ② Hero Section */}
        <Hero
          onOpenVideo={() => handleOpenVideo('Building the Future with AI & Technology — Overview')}
          onExploreServices={() => {
            const el = document.getElementById('services');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* ③ Our Services ("What We Do") */}
        <ServicesSection
          onSelectServiceForQuote={(srv) => handleOpenQuoteWithService(srv)}
        />

        {/* ④ Portfolio Showcase (3D Carousel matching screenshot) */}
        <WebsiteShowcase
          onOpenProjectDetail={(p) => setSelectedProject(p)}
          onViewAllWebsites={scrollToWebsites}
        />

        {/* Full 35+ Websites Catalog (Requested by user) */}
        <WebsitesDirectory
          onSelectProject={(p) => setSelectedProject(p)}
        />

        {/* ⑤ About Future Rank Studio (Office visual, story, and Founders Adeel Abbas & Mir Zain Haider) */}
        <AboutSection
          onOpenStoryVideo={() => handleOpenVideo('Our Story — Innovation, Creativity, Technology')}
          onOpenQuote={() => handleOpenQuoteWithService()}
        />

        {/* AI Solutions & Automation Deep Dive */}
        <AISolutionsSection />

        {/* ⑥ Our Process (5 Steps Timeline) */}
        <ProcessSection />

        {/* ⑦ CTA Section ("Ready to Take Your Business to the Next Level?") */}
        <CTASection
          onOpenQuote={() => handleOpenQuoteWithService()}
          onScrollToContact={scrollToContact}
        />

        {/* ⑧ Testimonials ("Trusted by Businesses Around the World") */}
        <TestimonialsSection />

        {/* Contact Section (Forms, WhatsApp hotline, email) */}
        <ContactSection initialService={preselectedService} />
      </main>

      {/* ⑨ Footer */}
      <Footer />

      {/* Persistent WhatsApp Floating Button */}
      <FloatingWhatsApp />

      {/* Modals & Dialogs */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectProject={(p) => setSelectedProject(p)}
      />

      <VideoModal
        isOpen={videoOpen}
        onClose={() => setVideoOpen(false)}
        title={videoTitle}
      />

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onRequestSimilar={(name) => {
          setSelectedProject(null);
          handleOpenQuoteWithService(name);
        }}
      />

      <ProjectQuoteModal
        isOpen={quoteOpen}
        onClose={() => setQuoteOpen(false)}
        preselectedService={preselectedService}
      />
    </div>
  );
}
