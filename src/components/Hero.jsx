import React, { useState } from 'react';
import { ShieldCheck, Clock, MapPin, Users, MessageSquare, ArrowRight, ArrowLeft, Truck, CheckCircle, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_INFO } from '../data/company';

export const Hero = ({ onOpenQuote }) => {
  const { t, isRtl } = useLanguage();
  const [quickFrom, setQuickFrom] = useState('');
  const [quickTo, setQuickTo] = useState('');

  const handleQuickEstimate = (e) => {
    e.preventDefault();
    const fromText = quickFrom.trim() || (isRtl ? 'أي مكان في الإمارات' : 'Anywhere in UAE');
    const toText = quickTo.trim() || (isRtl ? 'الوجهة المطلوبة' : 'Destination in UAE');
    
    const message = isRtl
      ? `مرحباً شركة مروان لنقل الأثاث، أود الحصول على تسعير فوري للنقل من (${fromText}) إلى (${toText}).`
      : `Hello Marwan Movers & Packers, I would like to get a moving quote for relocation from (${fromText}) to (${toText}).`;

    const url = `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const badgeIcons = [
    <Clock className="w-5 h-5 text-amber-400" />,
    <MapPin className="w-5 h-5 text-emerald-400" />,
    <Users className="w-5 h-5 text-blue-400" />,
    <ShieldCheck className="w-5 h-5 text-amber-400" />,
  ];

  return (
    <section id="home" className="relative bg-gradient-to-b from-navy-950 via-slate-900 to-navy-900 text-white overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24">
      {/* Background Subtle Grid & Lighting Effects */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]"></div>
      </div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Core CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-start">
            
            {/* Tagline Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/90 border border-slate-700/80 text-amber-400 text-xs font-semibold tracking-wide uppercase mb-6 shadow-inner">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{t.hero.tagline}</span>
            </div>

            {/* Main H1 */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
              {t.hero.title}
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-8 max-w-2xl">
              {t.hero.subtitle}
            </p>

            {/* CTA Buttons (Removed Get Free Quote button as requested) */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href={isRtl ? COMPANY_INFO.whatsappUrlAr : COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-whatsapp hover:bg-whatsapp-hover text-white text-base font-extrabold shadow-lg shadow-whatsapp/25 hover:shadow-whatsapp/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <MessageSquare className="w-5 h-5 fill-white text-whatsapp" />
                <span>{t.hero.ctaWhatsApp}</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-base font-bold border border-slate-700 hover:border-amber-400 hover:text-amber-400 shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                dir="ltr"
              >
                <span>📞 {COMPANY_INFO.phone}</span>
              </a>
            </div>

            {/* Trust Highlights Checklist */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full pt-6 border-t border-slate-800/80">
              {t.hero.trustBadges.map((badge, idx) => (
                <div key={idx} className="flex flex-col gap-1 p-2.5 rounded-lg bg-slate-800/40 border border-slate-800">
                  <div className="flex items-center gap-1.5">
                    {badgeIcons[idx]}
                    <span className="text-xs font-bold text-slate-200">{badge.label}</span>
                  </div>
                  <span className="text-[11px] text-slate-400">{badge.desc}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Interactive Quick Quote Card + Visual Trust Graphic */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Decorative halo */}
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/30 to-blue-500/30 rounded-2xl blur-lg opacity-70"></div>
              
              <div className="relative rounded-2xl bg-slate-900/95 border border-slate-700/80 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
                
                {/* Card Header */}
                <div className="flex items-center justify-between pb-5 mb-5 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                      <Truck className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-white">
                        {t.hero.quickEstimate.title}
                      </h2>
                      <p className="text-xs text-slate-400">
                        {isRtl ? 'احصل على عرض سعر سريع عبر واتساب خلال دقائق' : 'Fast WhatsApp dispatch & instant rates'}
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    24/7 Live
                  </span>
                </div>

                {/* Quick Interactive Form */}
                <form onSubmit={handleQuickEstimate} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      {isRtl ? 'مكان الاستلام (من)' : 'Pickup Location (From)'}
                    </label>
                    <div className="relative">
                      <MapPin className={`w-4 h-4 text-slate-400 absolute top-3.5 ${isRtl ? 'right-3' : 'left-3'}`} />
                      <input
                        type="text"
                        value={quickFrom}
                        onChange={(e) => setQuickFrom(e.target.value)}
                        placeholder={t.hero.quickEstimate.fromPlaceholder}
                        className={`w-full py-2.5 text-sm bg-slate-800/80 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all ${
                          isRtl ? 'pr-9 pl-3' : 'pl-9 pr-3'
                        }`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      {isRtl ? 'مكان التسليم (إلى)' : 'Drop-off Destination (To)'}
                    </label>
                    <div className="relative">
                      <MapPin className={`w-4 h-4 text-amber-400 absolute top-3.5 ${isRtl ? 'right-3' : 'left-3'}`} />
                      <input
                        type="text"
                        value={quickTo}
                        onChange={(e) => setQuickTo(e.target.value)}
                        placeholder={t.hero.quickEstimate.toPlaceholder}
                        className={`w-full py-2.5 text-sm bg-slate-800/80 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all ${
                          isRtl ? 'pr-9 pl-3' : 'pl-9 pr-3'
                        }`}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-whatsapp hover:bg-whatsapp-hover text-white text-sm font-bold shadow-md shadow-whatsapp/20 transition-all hover:scale-[1.01] active:scale-[0.99] mt-2"
                  >
                    <MessageSquare className="w-4 h-4 fill-white text-whatsapp" />
                    <span>{t.hero.quickEstimate.btnText}</span>
                  </button>
                </form>

                {/* Micro guarantees */}
                <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    {isRtl ? 'تغليف آمن ومحمي' : 'Safe Packing Material'}
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    {isRtl ? 'نجارون متخصصون' : 'Assembly Experts'}
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    {isRtl ? 'بدون رسوم خفية' : 'Zero Hidden Fees'}
                  </span>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Real Fleet & Operations Live Strip */}
        <div className="mt-12 pt-8 border-t border-slate-800/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs sm:text-sm font-bold text-white tracking-wide uppercase">
                {isRtl ? 'أسطولنا وفريق العمل في الميدان (عمليات حقيقية)' : 'Our Fleet & Dedicated Moving Crew in Action'}
              </span>
            </div>
            <a
              href="#gallery"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors"
            >
              <span>{isRtl ? 'عرض ألبوم الصور الكامل' : 'Explore Full Fleet Gallery'}</span>
              {isRtl ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {[
              {
                title: isRtl ? 'نقل الفلل الفاخرة' : 'Luxury Villa Relocation',
                src: '/images/truck-work-2.jpg',
                remote: 'https://res.cloudinary.com/dai2g47e4/image/upload/v1792219383/WhatsApp_Image_2026-10-17_at_11.39.35_AM_1_onvoaz.jpg',
                tag: isRtl ? 'فلل الإمارات' : 'UAE Villas'
              },
              {
                title: isRtl ? 'الأسطول التجاري' : 'Commercial Fleet',
                src: '/images/truck-work-4.jpg',
                remote: 'https://res.cloudinary.com/dai2g47e4/image/upload/v1792219381/WhatsApp_Image_2026-10-17_at_11.39.34_AM_vlhzto.jpg',
                tag: isRtl ? 'شاحنات مغلقة' : 'Closed Trucks'
              },
              {
                title: isRtl ? 'تغليف دقيق وفقاعي' : 'Fragile Packing Care',
                src: '/images/truck-work-5.jpg',
                remote: 'https://res.cloudinary.com/dai2g47e4/image/upload/v1792219381/WhatsApp_Image_2026-10-17_at_11.39.36_AM_to0hwq.jpg',
                tag: isRtl ? 'حماية فائقة' : 'Premium Wrap'
              },
              {
                title: isRtl ? 'نقل سريع مجهز' : 'Prompt Transport Fleet',
                src: '/images/truck-work-3.jpg',
                remote: 'https://res.cloudinary.com/dai2g47e4/image/upload/v1792219382/WhatsApp_Image_2026-10-17_at_11.39.34_AM_2_wisj23.jpg',
                tag: isRtl ? 'نقل سريع 24/7' : '24/7 Transport'
              }
            ].map((item, idx) => (
              <a
                key={idx}
                href="#gallery"
                className="group relative rounded-xl overflow-hidden aspect-[16/11] border border-slate-800 hover:border-amber-400/80 shadow-md transition-all duration-300 block"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  onError={(e) => { e.currentTarget.src = item.remote; }}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent flex flex-col justify-between p-2.5">
                  <span className="self-start px-2 py-0.5 rounded text-[10px] font-bold bg-navy-950/80 text-amber-400 border border-slate-700 backdrop-blur-sm">
                    {item.tag}
                  </span>
                  <span className="text-[11px] sm:text-xs font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-1">
                    {item.title}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
