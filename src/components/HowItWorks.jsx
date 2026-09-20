import React from 'react';
import { PhoneCall, FileText, Calendar, Smile, Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const HowItWorks = () => {
  const { t, isRtl } = useLanguage();

  const stepIcons = [
    <PhoneCall className="w-6 h-6 text-brand-600" />,
    <FileText className="w-6 h-6 text-amber-600" />,
    <Calendar className="w-6 h-6 text-emerald-600" />,
    <Smile className="w-6 h-6 text-blue-600" />
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>{t.howItWorks.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-950 tracking-tight leading-tight mb-4">
            {t.howItWorks.title}
          </h2>
          <div className="w-16 h-1 bg-brand-600 mx-auto rounded-full mb-4"></div>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {t.howItWorks.subtitle}
          </p>
        </div>

        {/* 4-Step Cards Layout with Connecting Arrow Guides */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {t.howItWorks.steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-card-hover hover:border-brand-400 transition-all duration-300 relative group flex flex-col justify-between"
            >
              {/* Step Number Top Pill */}
              <div className="flex items-center justify-between mb-5">
                <span className="text-2xl font-black text-brand-200 group-hover:text-brand-600 transition-colors font-sans">
                  {step.num}
                </span>
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {stepIcons[idx]}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-navy-950 mb-2.5">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center text-xs font-semibold text-brand-600">
                <span>{isRtl ? `المرحلة 0${idx + 1}` : `Phase 0${idx + 1}`}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
