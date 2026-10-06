import React, { useState } from 'react';
import { Brain, Cpu, Sparkles, MessageSquare, Mic, Database, ArrowRight, Check, Bot } from 'lucide-react';
import { STUDIO_INFO } from '../data/contentData';

export const AISolutionsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'agents' | 'rag' | 'voice' | 'vision'>('agents');

  const aiPillars = [
    {
      id: 'agents',
      title: 'Autonomous AI Agents',
      subtitle: 'Multi-step business workflows executing 24/7 without human intervention.',
      icon: Bot,
      color: '#a855f7',
      features: [
        'Automated Customer Inbound Qualification & Booking',
        'ERP & CRM Real-Time Multi-System Sync',
        'Automated Lead Scraping & Enrichment Sequences',
        'Self-Healing Code & Workflow Fallbacks'
      ],
      stat: '78% Less Manual Operations Time'
    },
    {
      id: 'rag',
      title: 'Enterprise RAG & Knowledge Hubs',
      subtitle: 'Instant accurate answers from thousands of internal company PDFs, sheets, and docs.',
      icon: Database,
      color: '#3b82f6',
      features: [
        'Sub-second Vector Search across Company Datasets',
        'Strict RBAC Permission Controls per Document',
        'Zero Hallucination with Grounded Citations',
        'Direct Integration with Slack, Notion, and Teams'
      ],
      stat: '100% Grounded Source Verifications'
    },
    {
      id: 'voice',
      title: 'Real-Time Conversational Voice',
      subtitle: 'Ultra-low latency human-like voice agents answering customer calls.',
      icon: Mic,
      color: '#06b6d4',
      features: [
        '<280ms Speech-to-Speech Response Latency',
        'Natural Emotion, Interruption & Tone Detection',
        'Direct Phone PBX & WebRTC Browser Bridge',
        'Multi-lingual support across 40+ global languages'
      ],
      stat: '98.4% Caller Resolution Rate'
    },
    {
      id: 'vision',
      title: 'Multimodal AI & Vision',
      subtitle: 'Automated receipt parsing, inspection, quality assurance, and asset tagging.',
      icon: Cpu,
      color: '#ec4899',
      features: [
        'Instant Invoice & Medical Receipt Optical Extraction',
        'Manufacturing Defect & Image Anomaly Detection',
        'Automated High-Resolution Product Asset Generation',
        'Real-time Video Stream Surveillance Alerts'
      ],
      stat: '99.9% Data Extraction Accuracy'
    }
  ];

  const currentPillar = aiPillars.find((p) => p.id === activeTab) || aiPillars[0];

  return (
    <section id="ai-solutions" className="relative py-24 bg-[#030712] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-400 block mb-2">
            NEXT-GEN CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Space_Grotesk',sans-serif]">
            Enterprise AI Solutions &amp; Automation
          </h2>
          <p className="mt-4 text-base text-slate-300/80 leading-relaxed">
            We architect and deploy bespoke generative AI, autonomous agent pipelines, and machine learning models tailored to your business data and workflows.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {aiPillars.map((p) => {
            const Icon = p.icon;
            const isSelected = activeTab === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setActiveTab(p.id as any)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-900/50 scale-105'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{p.title}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Pillar Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/40 border border-purple-500/40 backdrop-blur-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-mono mb-4">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>STATE OF THE ART GEMINI &amp; LLM INTEGRATION</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white font-['Space_Grotesk',sans-serif] mb-3">
                {currentPillar.title}
              </h3>

              <p className="text-slate-300 text-base leading-relaxed mb-6">
                {currentPillar.subtitle}
              </p>

              {/* Feature Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {currentPillar.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                    <span className="text-xs sm:text-sm text-slate-300">{feat}</span>
                  </div>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={STUDIO_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-md shadow-purple-900/40"
                >
                  <span>Build AI Solution with Us</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <span className="text-xs font-mono text-emerald-400 font-bold bg-emerald-950/50 px-3 py-2 rounded-xl border border-emerald-500/30">
                  {currentPillar.stat}
                </span>
              </div>
            </div>

            {/* Right Column: Code & Architecture Visualization */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-slate-950 border border-slate-800 p-5 font-mono text-xs shadow-2xl">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-[11px] text-slate-500">
                  <span className="flex items-center gap-1.5 text-purple-400">
                    <Brain className="w-3.5 h-3.5" />
                    agent_executor.ts
                  </span>
                  <span>FutureRank Runtime</span>
                </div>

                <div className="text-slate-400 space-y-1 overflow-x-auto text-[11px] leading-relaxed">
                  <p className="text-emerald-400">// Initialize Future Rank AI Pipeline</p>
                  <p><span className="text-purple-400">const</span> pipeline = <span className="text-blue-400">new</span> FutureRankAI(&#123;</p>
                  <p className="pl-4">model: <span className="text-amber-300">&quot;gemini-2.5-pro&quot;</span>,</p>
                  <p className="pl-4">autonomousAgents: <span className="text-cyan-400">true</span>,</p>
                  <p className="pl-4">vectorIndex: <span className="text-amber-300">&quot;enterprise_knowledge&quot;</span>,</p>
                  <p className="pl-4">telemetry: &#123; latency: <span className="text-amber-300">&quot;&lt;250ms&quot;</span> &#125;</p>
                  <p>&#125;);</p>
                  <p className="mt-2 text-emerald-400">// Dispatched autonomous task</p>
                  <p><span className="text-purple-400">const</span> result = <span className="text-purple-400">await</span> pipeline.<span className="text-cyan-400">executeWorkflow</span>(&#123;</p>
                  <p className="pl-4">trigger: <span className="text-amber-300">&quot;client_inquiry_received&quot;</span>,</p>
                  <p className="pl-4">actions: [<span className="text-amber-300">&quot;crm_sync&quot;</span>, <span className="text-amber-300">&quot;calendar_schedule&quot;</span>]</p>
                  <p>&#125;);</p>
                  <p className="text-cyan-400 mt-2">&#10003; Output: Task executed in 142ms</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
