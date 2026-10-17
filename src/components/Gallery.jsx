import React, { useState, useEffect } from 'react';
import { 
  Camera, Eye, X, ChevronLeft, ChevronRight, MessageSquare, 
  ShieldCheck, Truck, Sparkles, CheckCircle2, PhoneCall 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_INFO, BRAND_ASSETS } from '../data/company';

export const Gallery = () => {
  const { t, isRtl, language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const images = BRAND_ASSETS.gallery;

  const filterTabs = [
    { id: 'all', label: t.gallery?.filterAll || (isRtl ? 'جميع الصور' : 'All Photos') },
    { id: 'residential', label: t.gallery?.filterResidential || (isRtl ? 'السكني والنقل السريع' : 'Residential') },
    { id: 'villa', label: t.gallery?.filterVilla || (isRtl ? 'نقل الفلل الفاخرة' : 'Villa Relocations') },
    { id: 'commercial', label: t.gallery?.filterCommercial || (isRtl ? 'الأسطول التجاري' : 'Commercial Fleet') },
    { id: 'packing', label: t.gallery?.filterPacking || (isRtl ? 'التغليف وحماية الزجاجيات' : 'Packing & Care') },
  ];

  const filteredImages = activeFilter === 'all'
    ? images
    : images.filter(img => img.category === activeFilter);

  // Close on Escape & Arrow keys navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'Escape') setSelectedImageIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex]);

  const handlePrev = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const handleNext = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  const handleInquire = (img) => {
    const title = isRtl ? img.titleAr : img.title;
    const msg = isRtl
      ? `مرحباً شركة مروان لنقل وتغليف الأثاث، أود الاستفسار عن خدمة (${title}) كما شاهدتها في معرض صور موقعكم.`
      : `Hello Marwan Movers & Packers, I would like to inquire about your service: "${title}" as seen on your website gallery.`;
    
    window.open(`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const activeModalImage = selectedImageIndex !== null ? images[selectedImageIndex] : null;

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Camera className="w-3.5 h-3.5" />
            <span>{t.gallery?.badge || (isRtl ? 'أسطولنا وفريقنا في الميدان' : 'Our Work & Fleet in Action')}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            {t.gallery?.title || (isRtl ? 'معرض أعمال النقل والأسطول المجهز في الإمارات' : 'Real Relocations & Active Fleet Across UAE')}
          </h2>

          <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full mb-4"></div>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            {t.gallery?.subtitle || (isRtl 
              ? 'شاهد فريقنا المحترف وشاحناتنا المجهزة ومواد التغليف الفاخرة أثناء تنفيذ عمليات النقل في دبي وأبوظبي والشارقة وكافة الإمارات.'
              : 'See our professional crew, heavy-duty trucks, and careful packing in action across Dubai, Abu Dhabi, Sharjah, and beyond.')}
          </p>

          {/* Trust guarantee pill */}
          <div className="mt-4 inline-flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/40 border border-emerald-800/60 px-3 py-1 rounded-full">
            <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
            <span>{t.gallery?.verifiedBadge || (isRtl ? 'صور حقيقية 100% من عملياتنا في الإمارات' : '100% Genuine UAE Operations')}</span>
          </div>
        </div>

        {/* Filter Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 sm:mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                activeFilter === tab.id
                  ? 'bg-amber-500 text-navy-950 shadow-lg shadow-amber-500/20 scale-105'
                  : 'bg-slate-800/80 text-slate-300 border border-slate-700 hover:bg-slate-700 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 5-Item Gallery Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredImages.map((img) => {
            const originalIndex = images.findIndex(i => i.id === img.id);
            const title = isRtl ? img.titleAr : img.title;
            const categoryLabel = isRtl ? img.categoryLabelAr : img.categoryLabel;
            const badge = isRtl ? img.badgeAr : img.badge;
            const desc = isRtl ? img.descriptionAr : img.description;

            return (
              <div
                key={img.id}
                className="group rounded-2xl bg-slate-800/90 border border-slate-700/80 overflow-hidden shadow-xl hover:shadow-2xl hover:border-amber-400/60 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image Container with Hover Overlay */}
                <div 
                  className="relative aspect-[16/10] overflow-hidden cursor-pointer bg-slate-950"
                  onClick={() => setSelectedImageIndex(originalIndex)}
                >
                  <img
                    src={img.src}
                    alt={title}
                    onError={(e) => { e.currentTarget.src = img.remoteSrc; }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span className="px-2.5 py-1 rounded-lg bg-navy-950/85 backdrop-blur-md text-[11px] font-bold text-amber-400 border border-slate-700">
                      {categoryLabel}
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-emerald-500/90 text-[10px] font-bold text-white shadow">
                      {badge}
                    </span>
                  </div>

                  {/* Hover Inspect Icon */}
                  <div className="absolute inset-0 bg-navy-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/90 text-navy-950 text-xs font-bold shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all">
                      <Eye className="w-4 h-4 text-brand-600" />
                      <span>{t.gallery?.viewLarger || (isRtl ? 'تكبير الصورة' : 'Enlarge')}</span>
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                      {title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                      {desc}
                    </p>
                  </div>

                  {/* Actions: View Larger + Direct WhatsApp Inquire */}
                  <div className="pt-4 border-t border-slate-700/60 flex items-center gap-2">
                    <button
                      onClick={() => setSelectedImageIndex(originalIndex)}
                      className="flex-1 py-2 px-3 rounded-xl bg-slate-700 hover:bg-slate-600 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5 text-amber-400" />
                      <span>{isRtl ? 'معاينة' : 'Preview'}</span>
                    </button>

                    <button
                      onClick={() => handleInquire(img)}
                      className="flex-1 py-2 px-3 rounded-xl bg-whatsapp hover:bg-whatsapp-hover text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                    >
                      <MessageSquare className="w-3.5 h-3.5 fill-white text-whatsapp" />
                      <span>{isRtl ? 'استفسار' : 'Inquire'}</span>
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Call to Action */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-navy-950 via-slate-800 to-navy-950 border border-slate-700/80 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center shrink-0">
              <Truck className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-white">
                {isRtl ? 'هل تريد نقل أثاثك بنفس هذه الدقة والاحترافية؟' : 'Ready to Experience Hassle-Free Relocation?'}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                {isRtl ? 'احجز شاحنتك وفريقك الآن مع تسعير فوري وشفاف بدون أي رسوم خفية.' : 'Book our trained moving crew and secured fleet today. Instant 24/7 WhatsApp quote.'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href={isRtl ? COMPANY_INFO.whatsappUrlAr : COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-whatsapp hover:bg-whatsapp-hover text-white font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-105"
            >
              <MessageSquare className="w-4 h-4 fill-white text-whatsapp" />
              <span>{isRtl ? 'تواصل عبر واتساب' : 'WhatsApp Us Now'}</span>
            </a>

            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm border border-slate-700 transition-all"
              dir="ltr"
            >
              <PhoneCall className="w-4 h-4 text-amber-400" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeModalImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-navy-950/90 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedImageIndex(null)}
        >
          <div 
            className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-lg bg-amber-500/20 text-amber-400 text-xs font-bold border border-amber-500/30">
                  {isRtl ? activeModalImage.categoryLabelAr : activeModalImage.categoryLabel}
                </span>
                <span className="text-xs text-slate-400">
                  {selectedImageIndex + 1} / {images.length}
                </span>
              </div>

              <button
                onClick={() => setSelectedImageIndex(null)}
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Close image modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Area with Previous / Next Arrows */}
            <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[280px] sm:min-h-[420px] max-h-[60vh]">
              <img
                src={activeModalImage.src}
                alt={isRtl ? activeModalImage.titleAr : activeModalImage.title}
                onError={(e) => { e.currentTarget.src = activeModalImage.remoteSrc; }}
                className="max-w-full max-h-[60vh] object-contain"
              />

              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-navy-950/80 hover:bg-amber-500 hover:text-navy-950 text-white flex items-center justify-center transition-all shadow-lg"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-navy-950/80 hover:bg-amber-500 hover:text-navy-950 text-white flex items-center justify-center transition-all shadow-lg"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Footer & Details */}
            <div className="p-5 sm:p-6 bg-slate-950/90 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                  {isRtl ? activeModalImage.titleAr : activeModalImage.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
                  {isRtl ? activeModalImage.descriptionAr : activeModalImage.description}
                </p>
              </div>

              <button
                onClick={() => handleInquire(activeModalImage)}
                className="shrink-0 px-6 py-3 rounded-xl bg-whatsapp hover:bg-whatsapp-hover text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-lg hover:scale-105 transition-all"
              >
                <MessageSquare className="w-4 h-4 fill-white text-whatsapp" />
                <span>{isRtl ? 'حجز هذه الخدمة عبر واتساب' : 'Book This via WhatsApp'}</span>
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
