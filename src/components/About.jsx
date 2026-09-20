import React from 'react';
import { ShieldCheck, PackageCheck, Clock, Award, Users, HeartHandshake, CheckCircle2, PhoneCall, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_INFO } from '../data/company';

export const About = () => {
  const { t, isRtl } = useLanguage();

  const pillarIcons = [
    <Users className="w-6 h-6 text-brand-600" />,
    <ShieldCheck className="w-6 h-6 text-emerald-600" />,
    <CheckCircle2 className="w-6 h-6 text-blue-600" />,
    <PackageCheck className="w-6 h-6 text-amber-600" />,
    <HeartHandshake className="w-6 h-6 text-rose-600" />,
    <Clock className="w-6 h-6 text-purple-600" />,
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-brand-600" />
            <span>{t.about.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-950 tracking-tight leading-tight mb-4">
            {t.about.title}
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full mb-6"></div>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-3">
            {t.about.p1}
          </p>
          <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
            {t.about.p2}
          </p>
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {t.about.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-brand-300 hover:shadow-subtle hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-200/60 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                {pillarIcons[idx]}
              </div>
              <h3 className="text-lg font-bold text-navy-950 mb-2">
                {pillar.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Banner Callout */}
        <div className="rounded-2xl bg-gradient-to-r from-navy-900 via-slate-900 to-navy-950 text-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-slate-800">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <Clock className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                {isRtl ? 'خدمة نقل عاجلة 24 ساعة في الإمارات' : '24/7 Immediate Relocation Response'}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                {t.about.quickCallout}
              </p>
            </div>
          </div>

          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-navy-950 font-bold text-sm shadow-md transition-all hover:scale-105"
            dir="ltr"
          >
            <PhoneCall className="w-4 h-4" />
            <span>{COMPANY_INFO.phone}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
