import React, { useState } from 'react';
import { X, Send, PhoneCall, Sparkles, CheckCircle2, MessageSquare } from 'lucide-react';
import { STUDIO_INFO, SERVICES } from '../data/contentData';

interface ProjectQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const ProjectQuoteModal: React.FC<ProjectQuoteModalProps> = ({
  isOpen,
  onClose,
  preselectedService
}) => {
  const [selectedService, setSelectedService] = useState(preselectedService || 'Website Development');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [timeline, setTimeline] = useState('1 - 2 Weeks');
  const [budget, setBudget] = useState('$1,500 - $3,500');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleWhatsAppSubmit = () => {
    const text = `*New Project Request - Future Rank Studio*%0A%0A*Name:* ${encodeURIComponent(name || 'Client')}%0A*Email:* ${encodeURIComponent(email || 'N/A')}%0A*Phone:* ${encodeURIComponent(phone || 'N/A')}%0A*Service:* ${encodeURIComponent(selectedService)}%0A*Timeline:* ${encodeURIComponent(timeline)}%0A*Budget:* ${encodeURIComponent(budget)}%0A*Project Brief:* ${encodeURIComponent(details || 'Looking to discuss a new project with Adeel & Zain.')}`;
    window.open(`https://wa.me/${STUDIO_INFO.whatsappRaw}?text=${text}`, '_blank');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-[#090d1a] border border-purple-500/50 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-purple-950/80 max-h-[92vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-12 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white font-['Space_Grotesk',sans-serif]">
              Inquiry Dispatched!
            </h3>
            <p className="text-sm text-slate-300 max-w-md mx-auto">
              Adeel Abbas &amp; Mir Zain Haider have received your brief and will respond within 15 minutes.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-3">
              <button
                onClick={handleWhatsAppSubmit}
                className="px-5 py-2.5 rounded-xl text-xs font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-colors"
              >
                Send Direct Message via WhatsApp
              </button>
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 text-slate-300 hover:bg-slate-700 transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleFormSubmit} className="space-y-5">
            <div>
              <span className="text-xs font-mono uppercase text-purple-400 font-bold block mb-1">
                GET STARTED · FAST QUOTE
              </span>
              <h3 className="text-2xl font-bold text-white font-['Space_Grotesk',sans-serif]">
                Tell Us What You Want to Build
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                We craft tailor-made websites, AI automations, and custom apps with guaranteed delivery.
              </p>
            </div>

            {/* Service Selection */}
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-2">
                Select Service
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {SERVICES.map((s) => (
                  <button
                    type="button"
                    key={s.id}
                    onClick={() => setSelectedService(s.title)}
                    className={`p-2.5 rounded-xl text-left text-xs font-medium transition-all cursor-pointer border ${
                      selectedService === s.title
                        ? 'bg-purple-600/30 text-purple-200 border-purple-500 shadow-sm'
                        : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-white'
                    }`}
                  >
                    <span className="line-clamp-1">{s.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Contact details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Adeel or Client"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="contact@company.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>

            {/* Phone & Timeline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Phone / WhatsApp
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+92 300 0000000"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Target Timeline
                </label>
                <select
                  value={timeline}
                  onChange={(e) => setTimeline(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-purple-500"
                >
                  <option value="Urgent (Under 7 Days)">Urgent (Under 7 Days)</option>
                  <option value="1 - 2 Weeks">1 - 2 Weeks (Recommended)</option>
                  <option value="3 - 4 Weeks">3 - 4 Weeks</option>
                  <option value="Flexible">Flexible Schedule</option>
                </select>
              </div>
            </div>

            {/* Project Details */}
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Project Scope / Key Requirements *
              </label>
              <textarea
                required
                rows={3}
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Give us a quick summary of what you need..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-purple-500"
              />
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button
                type="submit"
                className="w-full sm:flex-1 py-3 px-5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-lg shadow-purple-900/40 cursor-pointer flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Project Request</span>
              </button>

              <button
                type="button"
                onClick={handleWhatsAppSubmit}
                className="w-full sm:w-auto py-3 px-5 rounded-xl font-bold text-xs sm:text-sm bg-emerald-950/80 text-emerald-300 border border-emerald-500/50 hover:bg-emerald-900 transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
