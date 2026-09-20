import React from 'react';
import { MessageSquare, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_INFO } from '../data/company';

export const FloatingActions = () => {
  const { isRtl, t } = useLanguage();

  return (
    <div
      className={`fixed bottom-6 z-50 flex flex-col gap-3 ${
        isRtl ? 'left-6' : 'right-6'
      }`}
    >
      {/* Phone Call Floating Button */}
      <a
        href={`tel:${COMPANY_INFO.phoneRaw}`}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-navy-900 text-white shadow-xl hover:bg-navy-800 hover:scale-110 active:scale-95 transition-all duration-200 border-2 border-white/80"
        title={t.floating.callTooltip}
        aria-label="Call Marwan Movers"
      >
        <Phone className="w-6 h-6 text-amber-400" />
        
        {/* Tooltip on Desktop Hover */}
        <span
          className={`absolute hidden md:group-hover:flex items-center whitespace-nowrap px-3 py-1.5 rounded-lg bg-navy-950 text-white text-xs font-bold shadow-lg border border-slate-700 pointer-events-none transition-opacity duration-200 ${
            isRtl ? 'left-16' : 'right-16'
          }`}
        >
          {t.floating.callDirect}
        </span>
      </a>

      {/* WhatsApp Floating Button with Pulse Effect */}
      <a
        href={isRtl ? COMPANY_INFO.whatsappUrlAr : COMPANY_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-whatsapp text-white shadow-2xl hover:bg-whatsapp-hover hover:scale-110 active:scale-95 transition-all duration-200 border-2 border-white/80 animate-soft-pulse"
        title={t.floating.whatsappTooltip}
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="w-7 h-7 fill-white text-whatsapp" />

        {/* Pulse ring */}
        <span className="absolute -inset-1 rounded-full bg-whatsapp/40 animate-ping opacity-60 pointer-events-none"></span>

        {/* Tooltip on Desktop Hover */}
        <span
          className={`absolute hidden md:group-hover:flex items-center whitespace-nowrap px-3 py-1.5 rounded-lg bg-emerald-950 text-white text-xs font-bold shadow-lg border border-emerald-700 pointer-events-none transition-opacity duration-200 ${
            isRtl ? 'left-16' : 'right-16'
          }`}
        >
          {t.floating.whatsappDirect}
        </span>
      </a>
    </div>
  );
};
