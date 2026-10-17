import React from 'react';
import { Building, Castle, Home, Briefcase, Building2, Armchair, Check, ArrowRight, ArrowLeft, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_INFO } from '../data/company';

export const MovingTypes = ({ onSelectType }) => {
  const { t, isRtl } = useLanguage();

  const typeIcons = [
    <Building className="w-5 h-5 text-amber-500" />,
    <Castle className="w-5 h-5 text-blue-500" />,
    <Home className="w-5 h-5 text-emerald-500" />,
    <Briefcase className="w-5 h-5 text-purple-500" />,
    <Building2 className="w-5 h-5 text-rose-500" />,
    <Armchair className="w-5 h-5 text-indigo-500" />,
  ];

  const typeImages = [
    { src: '/images/truck-work-5.jpg', remote: 'https://res.cloudinary.com/dai2g47e4/image/upload/v1792219381/WhatsApp_Image_2026-10-17_at_11.39.36_AM_to0hwq.jpg' }, // Apartment
    { src: '/images/truck-work-2.jpg', remote: 'https://res.cloudinary.com/dai2g47e4/image/upload/v1792219383/WhatsApp_Image_2026-10-17_at_11.39.35_AM_1_onvoaz.jpg' }, // Villa
    { src: '/images/truck-work-1.jpg', remote: 'https://res.cloudinary.com/dai2g47e4/image/upload/v1792219387/WhatsApp_Image_2026-10-17_at_11.39.35_AM_b9rtc8.jpg' }, // Home Relocation
    { src: '/images/truck-work-4.jpg', remote: 'https://res.cloudinary.com/dai2g47e4/image/upload/v1792219381/WhatsApp_Image_2026-10-17_at_11.39.34_AM_vlhzto.jpg' }, // Office
    { src: '/images/truck-work-4.jpg', remote: 'https://res.cloudinary.com/dai2g47e4/image/upload/v1792219381/WhatsApp_Image_2026-10-17_at_11.39.34_AM_vlhzto.jpg' }, // Commercial
    { src: '/images/truck-work-3.jpg', remote: 'https://res.cloudinary.com/dai2g47e4/image/upload/v1792219382/WhatsApp_Image_2026-10-17_at_11.39.34_AM_2_wisj23.jpg' }, // Furniture
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

        {/* 6 Cards Grid with Real Visual Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.movingTypes.items.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200/90 bg-slate-50/50 hover:bg-white overflow-hidden shadow-sm hover:shadow-card-hover hover:border-amber-400 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Photo Banner */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
                <img
                  src={typeImages[idx].src}
                  alt={item.title}
                  onError={(e) => { e.currentTarget.src = typeImages[idx].remote; }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent"></div>
                
                {/* Floating Icon Box */}
                <div className="absolute bottom-3 left-3 w-10 h-10 rounded-xl bg-white/95 backdrop-blur-md shadow-md border border-slate-200/80 flex items-center justify-center">
                  {typeIcons[idx]}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-navy-950 mb-3 group-hover:text-amber-600 transition-colors">
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
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
