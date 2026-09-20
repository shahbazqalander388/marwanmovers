import React from 'react';
import { MapPin, Navigation, ExternalLink, Sparkles, Clock, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_INFO } from '../data/company';

export const MapSection = () => {
  const { t, isRtl } = useLanguage();

  return (
    <section id="location" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-brand-600" />
            <span>{t.map.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-950 tracking-tight leading-tight mb-4">
            {t.map.title}
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full mb-4"></div>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {t.map.subtitle}
          </p>
        </div>

        {/* Map Container */}
        <div className="rounded-3xl border border-slate-200 shadow-xl overflow-hidden bg-slate-100 relative">
          
          {/* Top Location Bar */}
          <div className="p-4 sm:p-6 bg-navy-950 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-center sm:text-start">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">
                  {isRtl ? COMPANY_INFO.nameAr : COMPANY_INFO.name}
                </h3>
                <p className="text-xs text-slate-400">
                  {t.map.serviceRadius}
                </p>
              </div>
            </div>

            <a
              href={COMPANY_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-navy-950 text-xs sm:text-sm font-extrabold shadow-md transition-all flex items-center gap-2 hover:scale-105"
            >
              <Navigation className="w-4 h-4" />
              <span>{t.map.getDirections}</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>
          </div>

          {/* Google Maps iFrame */}
          <div className="relative w-full h-[400px] sm:h-[480px]">
            <iframe
              title="Marwan Movers & Packers Location"
              src={`https://maps.google.com/maps?q=${COMPANY_INFO.coordinates.lat},${COMPANY_INFO.coordinates.lng}&z=16&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale-[15%] contrast-[105%]"
            ></iframe>
          </div>

          {/* Bottom Highlights Bar */}
          <div className="p-4 bg-slate-50 border-t border-slate-200/80 flex flex-wrap items-center justify-around gap-4 text-xs font-semibold text-slate-600">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-emerald-600" />
              <span>{isRtl ? 'خدمة ونقل 24/7 على مدار الساعة' : '24/7 Moving & Customer Dispatch'}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-brand-600" />
              <span>{isRtl ? 'شاحنات مغلقة ومجهزة لنقل الأثاث' : 'Enclosed Moving Truck Fleet'}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Navigation className="w-4 h-4 text-amber-600" />
              <span>{isRtl ? 'تغطية فورية لكافة إمارات الدولة' : 'Immediate Dispatch to All UAE Emirates'}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
