import React from 'react';
import { 
  Clock, Globe, Users, ShieldCheck, Truck, CheckCircle2, Building2, MessageSquare, Sparkles 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const WhyChooseUs = () => {
  const { t } = useLanguage();

  const iconMap = [
    <Clock className="w-6 h-6 text-amber-500" />,
    <Globe className="w-6 h-6 text-blue-500" />,
    <Users className="w-6 h-6 text-emerald-500" />,
    <ShieldCheck className="w-6 h-6 text-purple-500" />,
    <Truck className="w-6 h-6 text-rose-500" />,
    <CheckCircle2 className="w-6 h-6 text-teal-500" />,
    <Building2 className="w-6 h-6 text-indigo-500" />,
    <MessageSquare className="w-6 h-6 text-emerald-600" />,
  ];

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>{t.whyUs.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-950 tracking-tight leading-tight mb-4">
            {t.whyUs.title}
          </h2>
          <div className="w-16 h-1 bg-emerald-500 mx-auto rounded-full mb-4"></div>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {t.whyUs.subtitle}
          </p>
        </div>

        {/* 8 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.whyUs.items.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-emerald-400 hover:bg-white hover:shadow-card-hover transition-all duration-300 flex flex-col justify-start group"
            >
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-200/60 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                {iconMap[idx]}
              </div>

              <h3 className="text-base font-bold text-navy-950 mb-2 group-hover:text-emerald-700 transition-colors">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
