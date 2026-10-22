React, { useState } from 'react';
import { Mail, PhoneCall, Send, MessageSquare, CheckCircle, Clock, MapPin, Sparkles } from 'lucide-react';
import {  STUDIO_INFO, SERVICES } from '../data/contentData';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: initialService || 'Website Development',
    budget: '$1,000 - $3,000',
    message: ''
  });import

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendViaWhatsApp = () => {
    const text = `Hello Future Rank Studio!%0A%0A*Name:* ${encodeURIComponent(formData.name || 'Client')}%0A*Email:* ${encodeURIComponent(formData.email || 'N/A')}%0A*Phone:* ${encodeURIComponent(formData.phone || 'N/A')}%0A*Service:* ${encodeURIComponent(formData.service)}%0A*Budget:* ${encodeURIComponent(formData.budget)}%0A*Project Brief:* ${encodeURIComponent(formData.message || 'I would like to discuss a project with Future Rank Studio.')}`;
    window.open(`https://wa.me/${STUDIO_INFO.whatsappRaw}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="relative py-24 bg-[#030712] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-[32rem] h-[32rem] bg-indigo-900/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-fuchsia-400 block mb-2">
            START YOUR PROJECT
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Space_Grotesk',sans-serif]">
            Get In Touch With Future Rank Studio
          </h2>
          <p className="mt-4 text-base text-slate-300/80 leading-relaxed">
            Have a project in mind or need an enterprise AI &amp; Web solution? Send us a message or chat with our founders directly on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column: Direct Contact Info & WhatsApp Hub */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary WhatsApp Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-emerald-950/60 via-slate-900/80 to-slate-950 border border-emerald-500/40 shadow-xl shadow-emerald-950/40">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-400">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold block">
                    Fastest Response (Under 15 Mins)
                  </span>
                  <h3 className="text-lg font-bold text-white font-['Space_Grotesk',sans-serif]">
                    Official WhatsApp Hotline
                  </h3>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-5">
                Message Adeel Abbas &amp; Mir Zain Haider directly for instant consultations, live estimates, and immediate project kickoffs.
              </p>

              <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-300 mb-5">
                {STUDIO_INFO.phone}
              </div>

              <a
                href={STUDIO_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl font-bold text-sm bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-all shadow-lg shadow-emerald-950 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat Instantly on WhatsApp</span>
              </a>
            </div>

            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-slate-400 font-semibold block">
                  Official Email Address
                </span>
                <a
                  href={`mailto:${STUDIO_INFO.email}`}
                  className="text-sm sm:text-base font-bold text-white hover:text-purple-400 transition-colors"
                >
                  {STUDIO_INFO.email}
                </a>
                <p className="text-xs text-slate-400 mt-1">
                  Send RFPs, documentation, or design files anytime.
                </p>
              </div>
            </div>

            {/* Service Guarantee Card */}
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span>24/7 Availability &amp; Global Client Support</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>NDA &amp; Strict Confidentiality Protection</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span>Serving Clients in US, UK, UAE, EU &amp; Worldwide</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/40 border border-purple-500/30 backdrop-blur-xl shadow-2xl">
              
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-['Space_Grotesk',sans-serif]">
                    Thank You! Message Received.
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Adeel Abbas or Mir Zain Haider will review your requirements and respond within 15 minutes.
                  </p>
                  <div className="pt-4 flex flex-wrap justify-center gap-3">
                    <button
                      onClick={handleSendViaWhatsApp}
                      className="px-5 py-2.5 rounded-xl text-xs font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-colors"
                    >
                      Also Open this on WhatsApp
                    </button>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 text-slate-300 hover:bg-slate-700 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <span className="text-xs font-mono uppercase text-purple-400 font-bold">
                      PROJECT INQUIRY FORM
                    </span>
                    <span className="text-[11px] text-slate-500">
                      Response within 15 mins
                    </span>
                  </div>

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-purple-500 focus:outline-none text-sm text-white placeholder-slate-600 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Business Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-purple-500 focus:outline-none text-sm text-white placeholder-slate-600 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Phone & Service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Phone / WhatsApp Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-purple-500 focus:outline-none text-sm text-white placeholder-slate-600 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Service Needed *
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-purple-500 focus:outline-none text-sm text-white transition-colors"
                      >
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.title} className="bg-slate-900">
                            {s.title}
                          </option>
                        ))}
                        <option value="Custom Enterprise Solution" className="bg-slate-900">
                          Custom Enterprise Solution
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Budget Selector */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Estimated Project Budget
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {['$500 - $1,500', '$1,500 - $3,500', '$3,500 - $8,000', '$8,000+ Enterprise'].map((b) => (
                        <button
                          type="button"
                          key={b}
                          onClick={() => setFormData({ ...formData, budget: b })}
                          className={`py-2 px-2 rounded-lg text-xs font-medium text-center transition-all cursor-pointer ${
                            formData.budget === b
                              ? 'bg-purple-600 text-white border border-purple-400'
                              : 'bg-slate-950 text-slate-400 border border-slate-800 hover:text-white'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message / Brief */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Tell Us About Your Project &amp; Timeline *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe what you want to build, any reference websites, key features, and desired launch date..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-purple-500 focus:outline-none text-sm text-white placeholder-slate-600 transition-colors"
                    />
                  </div>

                  {/* Submit Buttons */}
                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                    <button
                      type="submit"
                      className="w-full sm:flex-1 py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-lg shadow-purple-900/40 transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleSendViaWhatsApp}
                      className="w-full sm:w-auto py-3.5 px-5 rounded-xl font-bold text-sm bg-emerald-950/80 text-emerald-300 border border-emerald-500/50 hover:bg-emerald-900 transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      <PhoneCall className="w-4 h-4" />
                      <span>Send to WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
