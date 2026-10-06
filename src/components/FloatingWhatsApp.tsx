import React, { useState } from 'react';
import { MessageSquare, PhoneCall, X, Send, Sparkles } from 'lucide-react';
import { STUDIO_INFO } from '../data/contentData';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [quickMsg, setQuickMsg] = useState('Hi Future Rank Studio! I have a project inquiry.');

  const handleStartChat = () => {
    const encoded = encodeURIComponent(quickMsg);
    window.open(`https://wa.me/${STUDIO_INFO.whatsappRaw}?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Quick Chat Popover */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-88 rounded-2xl bg-[#090d1a] border border-emerald-500/50 shadow-2xl shadow-emerald-950/60 p-5 text-slate-200 animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center text-emerald-400 font-bold text-xs">
                  FR
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-[#090d1a]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white font-['Space_Grotesk',sans-serif]">
                  Future Rank Studio
                </h4>
                <p className="text-[11px] text-emerald-400 font-medium">
                  Adeel Abbas &amp; Mir Zain Haider (Online)
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body text */}
          <div className="py-4 space-y-2 text-xs">
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300">
              👋 Assalam-o-Alaikum / Hello! Welcome to Future Rank Studio. How can we help you scale your business with custom Web &amp; AI solutions today?
            </div>
            <p className="text-[10px] text-slate-500 font-mono">
              Direct WhatsApp Hotline: {STUDIO_INFO.phone}
            </p>
          </div>

          {/* Quick Input & Send */}
          <div className="space-y-2 pt-2 border-t border-slate-800">
            <input
              type="text"
              value={quickMsg}
              onChange={(e) => setQuickMsg(e.target.value)}
              placeholder="Type your message..."
              className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-emerald-500"
            />
            <button
              onClick={handleStartChat}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-xs bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-colors shadow-lg cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Open WhatsApp Chat</span>
            </button>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <div className="relative group">
        {/* Glow */}
        <div className="absolute inset-0 rounded-full bg-emerald-500 blur-lg opacity-60 group-hover:opacity-90 animate-pulse transition-opacity" />
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm shadow-xl shadow-emerald-950 transition-all hover:scale-105 cursor-pointer"
          aria-label="Chat on WhatsApp"
        >
          <PhoneCall className="w-5 h-5 fill-slate-950" />
          <span className="hidden sm:inline">WhatsApp Us</span>
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-950 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-slate-950"></span>
          </span>
        </button>
      </div>
    </div>
  );
};
