import React from 'react';
import { Phone, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_INFO } from '../data/company';

export const TopBar = () => {
  const { t, isRtl } = useLanguage();

  return (
    <div className="bg-navy-950 text-slate-200 text-xs py-1.5 sm:py-2 px-3 sm:px-6 border-b border-slate-800/90 select-none">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1.5 sm:gap-4">
        
        {/* 1. 24/7 Moving & Relocation Assistance Across All 7 Emirates */}
        <div className="flex items-center gap-2 text-[11px] sm:text-xs font-semibold text-slate-100 text-center sm:text-start">
          <span className="flex h-2 w-2 relative shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="tracking-tight sm:tracking-normal">{t.nav.emergencyBadge}</span>
        </div>

        {/* 2 & 3: Phone number (+971 50 717 1355) and 24/7 Available Everyday */}
        <div className="flex items-center justify-center gap-2.5 sm:gap-4 text-[11px] sm:text-xs font-bold">
          
          {/* Phone */}
          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 transition-colors bg-slate-900/90 sm:bg-transparent px-2.5 py-0.5 sm:p-0 rounded-full sm:rounded-none border border-slate-800/80 sm:border-0"
            dir="ltr"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="tracking-wide">{COMPANY_INFO.phone}</span>
          </a>

          <span className="text-slate-700 hidden sm:inline">|</span>

          {/* 24/7 Available Everyday */}
          <div className="inline-flex items-center gap-1.5 text-emerald-400 font-semibold bg-emerald-950/30 sm:bg-transparent px-2 py-0.5 sm:p-0 rounded-full sm:rounded-none border border-emerald-900/40 sm:border-0">
            <Clock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>{isRtl ? COMPANY_INFO.workingHoursLabelAr : COMPANY_INFO.workingHoursLabel}</span>
          </div>
        </div>

      </div>
    </div>
  );
};
