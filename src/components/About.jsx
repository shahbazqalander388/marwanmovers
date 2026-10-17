import React from 'react';
import { ShieldCheck, PackageCheck, Clock, Award, Users, HeartHandshake, CheckCircle2, PhoneCall, Sparkles, Truck, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_INFO, BRAND_ASSETS } from '../data/company';

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

        {/* Real Visual Showcase: Real Fleet & Professional Operations */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16 sm:mb-20">
          
          {/* Left Column: Image Mosaic */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-12 gap-4">
            {/* Primary Image: Official Operations Poster */}
            <div className="sm:col-span-7 relative group rounded-2xl overflow-hidden shadow-xl border border-slate-200">
              <img
                src="/images/truck-work-1.jpg"
                alt="Marwan Movers professional team and fleet in UAE"
                onError={(e) => { e.currentTarget.src = "https://res.cloudinary.com/dai2g47e4/image/upload/v1792219387/WhatsApp_Image_2026-10-17_at_11.39.35_AM_b9rtc8.jpg"; }}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 min-h-[300px]"
              />
              <div className="absolute top-3 left-3 px-3 py-1 rounded-lg bg-navy-950/85 backdrop-blur-md text-[11px] font-bold text-amber-400 border border-slate-700">
                {isRtl ? 'أسطولنا في دبي والإمارات' : 'UAE Moving Fleet & Team'}
              </div>
            </div>

            {/* Secondary Stack: Inside Packing + Trust Card */}
            <div className="sm:col-span-5 flex flex-col gap-4">
              <div className="relative group rounded-2xl overflow-hidden shadow-lg border border-slate-200 flex-1">
                <img
                  src="/images/truck-work-5.jpg"
                  alt="Precision packing and bubble wrapping by Marwan Movers"
                  onError={(e) => { e.currentTarget.src = "https://res.cloudinary.com/dai2g47e4/image/upload/v1792219381/WhatsApp_Image_2026-10-17_at_11.39.36_AM_to0hwq.jpg"; }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 min-h-[160px]"
                />
                <div className="absolute bottom-2 left-2 right-2 px-2.5 py-1 rounded-md bg-navy-950/80 backdrop-blur-sm text-[10px] font-bold text-white text-center">
                  {isRtl ? 'تغليف دقيق للمقتنيات الحساسة' : 'Fragile & Glassware Packing'}
                </div>
              </div>

              {/* Verified Trust Stats Badge */}
              <div className="p-4 rounded-2xl bg-gradient-to-tr from-navy-950 to-slate-900 text-white border border-slate-800 shadow-md">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wide">
                    {isRtl ? 'ضمان الأمان التام' : '100% Safe Handling'}
                  </span>
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  {isRtl 
                    ? 'نستخدم أجود أنواع الكراتين والرول الفقاعي لضمان وصول كافة أغراضك بدون أي خدوش.' 
                    : 'Equipped with heavy-duty boxes, bubble sheets & straps for zero damage.'}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Why Marwan Movers & Key Checklist */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5 text-amber-600" />
              <span>{isRtl ? 'خبرة موثوقة في النقل' : 'Experienced Relocation Specialist'}</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-navy-950 tracking-tight leading-snug">
              {isRtl 
                ? 'فريق عمل محترف، شاحنات مغلقة مجهزة، وتغطية تشمل كافة الإمارات' 
                : 'Trained Moving Specialists, Modern Fleet & Seamless Coordination'}
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed">
              {isRtl
                ? 'في شركة مروان، ندرك تماماً أن نقل الأثاث والمقتنيات يمثل مرحلة هامة في حياة كل عائلة ومؤسسة. لذلك نكرس كل خبراتنا ومعداتنا الحديثة لضمان راحة بالك التامة من أول خطوة وحتى انتهاء الترتيب في مكانك الجديد.'
                : 'At Marwan Movers & Packers, we understand that relocation is a major milestone for every home and business. We provide dedicated crews, protective wrapping, and punctuality so you can settle in effortlessly.'}
            </p>

            {/* Checklist */}
            <div className="space-y-2.5 pt-2">
              {[
                { en: 'Licensed and verified movers stationed across UAE', ar: 'عمال وفنيون مرخصون ومؤهلون في كافة مدن الإمارات' },
                { en: 'Specialized furniture dismantling, packing & reassembly', ar: 'نجارون متخصصون لفك وتركيب مختلف أنواع الأثاث' },
                { en: 'Clean, enclosed moving trucks equipped with tie-downs', ar: 'شاحنات نقل مغلقة ونظيفة ومجهزة بأحزمة تثبيت' },
                { en: 'Direct WhatsApp support with real-time updates', ar: 'متابعة مباشرة عبر واتساب وتسعير فوري وشفاف' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>{isRtl ? item.ar : item.en}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <a
                href="#gallery"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-white text-xs font-bold transition-all shadow-sm hover:shadow"
              >
                <span>{isRtl ? 'استكشف معرض صور الأسطول' : 'Explore Our Fleet & Work'}</span>
              </a>
            </div>
          </div>

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
