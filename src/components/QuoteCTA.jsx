import React from 'react';
import { ArrowRight, ArrowLeft, MessageSquare, PhoneCall, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_INFO } from '../data/company';

export const QuoteCTA = ({ onOpenQuote }) => {
  const { t, isRtl } = useLanguage();

  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-r from-navy-950 via-slate-900 to-navy-900 text-white overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-72 bg-brand-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-5">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{isRtl ? 'خدمة فورية 24/7' : '24/7 Immediate Moving Service'}</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-5 leading-tight">
          {t.ctaBanner.title}
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          {t.ctaBanner.subtitle}
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <button
            onClick={onOpenQuote}
            className="px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-navy-950 text-base font-extrabold shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 transition-all inline-flex items-center gap-2"
          >
            <span>{t.ctaBanner.btnQuote}</span>
            {isRtl ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
          </button>

          <a
            href={isRtl ? COMPANY_INFO.whatsappUrlAr : COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl bg-whatsapp hover:bg-whatsapp-hover text-white text-base font-bold shadow-lg shadow-whatsapp/25 hover:shadow-whatsapp/40 hover:-translate-y-0.5 transition-all inline-flex items-center gap-2"
          >
            <MessageSquare className="w-5 h-5 fill-white text-whatsapp" />
            <span>{t.ctaBanner.btnWhatsApp}</span>
          </a>
        </div>

        {/* Call backup link */}
        <p className="text-xs sm:text-sm text-slate-400 flex items-center justify-center gap-2">
          <span>{t.ctaBanner.callText}</span>
          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="text-amber-400 hover:text-amber-300 font-bold underline underline-offset-4"
            dir="ltr"
          >
            {COMPANY_INFO.phone}
          </a>
        </p>

      </div>
    </section>
  );
};
