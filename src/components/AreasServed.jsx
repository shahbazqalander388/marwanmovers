import React, { useState } from 'react';
import { MapPin, Navigation, ArrowRight, ArrowLeft, MessageSquare, Sparkles, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_INFO } from '../data/company';

export const AreasServed = () => {
  const { t, isRtl } = useLanguage();
  const [selectedEmirate, setSelectedEmirate] = useState(0);

  const handleInquireEmirate = (name) => {
    const msg = isRtl
      ? `مرحباً شركة مروان، أود الاستفسار عن خدمات النقل في إمارة (${name}).`
      : `Hello Marwan Movers & Packers, I would like to inquire about moving services in ${name}.`;
    window.open(`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="areas" className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.areas.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            {t.areas.title}
          </h2>
          <div className="w-16 h-1 bg-emerald-500 mx-auto rounded-full mb-4"></div>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
            {t.areas.subtitle}
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-medium">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{t.areas.coverageNotice}</span>
          </div>
        </div>

        {/* Emirates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {t.areas.emirates.map((emirate, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setSelectedEmirate(idx)}
              className={`rounded-2xl p-6 border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                selectedEmirate === idx
                  ? 'bg-gradient-to-b from-slate-800 to-navy-950 border-amber-400 shadow-lg shadow-amber-500/10 scale-[1.02]'
                  : 'bg-slate-800/60 border-slate-700/80 hover:border-slate-600'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-700/80 flex items-center justify-center text-amber-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    {isRtl ? 'الإمارات' : 'UAE'}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {emirate.name}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed mb-5">
                  {emirate.areas}
                </p>
              </div>

              <button
                onClick={() => handleInquireEmirate(emirate.name)}
                className="w-full py-2.5 px-3 rounded-xl bg-slate-700/60 hover:bg-whatsapp hover:text-white text-slate-200 text-xs font-bold transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>{isRtl ? `طلب نقل في ${emirate.name}` : `Book in ${emirate.name}`}</span>
              </button>
            </div>
          ))}
        </div>

        {/* All Other Areas Footnote Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 border border-blue-800/40 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-start">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
              <Navigation className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">
                {isRtl ? 'هل تسكن في منطقة أخرى غير مذكورة؟' : 'Moving between different cities or distant areas?'}
              </h4>
              <p className="text-xs text-slate-400">
                {isRtl 
                  ? 'خدماتنا تشمل كل ضواحي ومناطق دولة الإمارات دون استثناء على مدار 24 ساعة.'
                  : 'We cover 100% of all UAE suburban developments, freezones, and industrial zones 24/7.'}
              </p>
            </div>
          </div>

          <a
            href={isRtl ? COMPANY_INFO.whatsappUrlAr : COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-whatsapp hover:bg-whatsapp-hover text-white text-xs font-bold transition-all flex items-center gap-2 shadow-sm"
          >
            <MessageSquare className="w-4 h-4 fill-white text-whatsapp" />
            <span>{isRtl ? 'استفسر عن منطقتك' : 'Inquire About Your Area'}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
