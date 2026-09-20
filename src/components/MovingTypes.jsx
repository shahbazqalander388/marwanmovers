import React from 'react';
import { Building, Castle, Home, Briefcase, Building2, Armchair, Check, ArrowRight, ArrowLeft, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_INFO } from '../data/company';

export const MovingTypes = ({ onSelectType }) => {
  const { t, isRtl } = useLanguage();

  const typeIcons = [
    <Building className="w-8 h-8 text-amber-500" />,
    <Castle className="w-8 h-8 text-blue-500" />,
    <Home className="w-8 h-8 text-emerald-500" />,
    <Briefcase className="w-8 h-8 text-purple-500" />,
    <Building2 className="w-8 h-8 text-rose-500" />,
    <Armchair className="w-8 h-8 text-indigo-500" />,
  ];

  const handleSelect = (title) => {
    if (onSelectType) {
      onSelectType(title);
    } else {
      const msg = isRtl
        ? `مرحباً شركة مروان، أود الاستفسار عن تفاصيل (${title}).`
        : `Hello Marwan Movers, I would like to inquire about ${title}.`;
      window.open(`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(msg)}`, '_blank');
    }
  };

  return (
    <section id="types" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>{t.movingTypes.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-950 tracking-tight leading-tight mb-4">
            {t.movingTypes.title}
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full mb-4"></div>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {t.movingTypes.subtitle}
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.movingTypes.items.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200/90 bg-slate-50/50 hover:bg-white p-7 shadow-sm hover:shadow-card-hover hover:border-amber-400 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-slate-200/60 flex items-center justify-center mb-6">
                  {typeIcons[idx]}
                </div>

                <h3 className="text-xl font-bold text-navy-950 mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {item.desc}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-6">
                  {item.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => handleSelect(item.title)}
                className="w-full mt-2 py-3 px-4 rounded-xl text-xs font-bold text-slate-800 bg-white border border-slate-200 hover:bg-navy-900 hover:text-white hover:border-navy-900 transition-all flex items-center justify-center gap-2 group shadow-sm"
              >
                <span>{isRtl ? 'احجز هذا النوع الآن' : 'Book This Moving Type'}</span>
                {isRtl ? (
                  <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                ) : (
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                )}
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
