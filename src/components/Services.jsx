import React, { useState } from 'react';
import { 
  Home, Building2, Castle, Building, Armchair, PackageCheck, 
  Truck, MapPin, Compass, Briefcase, Key, Wrench, ArrowRight, ArrowLeft, MessageSquare, Sparkles
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_INFO } from '../data/company';

export const Services = ({ onSelectService }) => {
  const { t, isRtl } = useLanguage();
  const [filter, setFilter] = useState('all');

  const iconMap = {
    Home: <Home className="w-6 h-6 text-brand-600" />,
    Building2: <Building2 className="w-6 h-6 text-blue-600" />,
    Castle: <Castle className="w-6 h-6 text-amber-600" />,
    Building: <Building className="w-6 h-6 text-emerald-600" />,
    Armchair: <Armchair className="w-6 h-6 text-indigo-600" />,
    PackageCheck: <PackageCheck className="w-6 h-6 text-violet-600" />,
    Truck: <Truck className="w-6 h-6 text-amber-600" />,
    MapPin: <MapPin className="w-6 h-6 text-rose-600" />,
    Compass: <Compass className="w-6 h-6 text-cyan-600" />,
    Briefcase: <Briefcase className="w-6 h-6 text-teal-600" />,
    Key: <Key className="w-6 h-6 text-amber-500" />,
    Wrench: <Wrench className="w-6 h-6 text-blue-500" />
  };

  const filteredItems = filter === 'all' 
    ? t.services.items 
    : t.services.items.filter(item => item.category === filter);

  const filterTabs = [
    { id: 'all', labelEn: 'All Services (12)', labelAr: 'جميع الخدمات (12)' },
    { id: 'residential', labelEn: 'Residential', labelAr: 'الخدمات السكنية' },
    { id: 'commercial', labelEn: 'Commercial & Office', labelAr: 'التجارية والمكاتب' },
    { id: 'specialized', labelEn: 'Packing & Assembly', labelAr: 'التغليف والفك والتركيب' },
  ];

  const handleInquire = (serviceName) => {
    if (onSelectService) {
      onSelectService(serviceName);
    } else {
      const msg = isRtl
        ? `مرحباً شركة مروان لنقل الأثاث، أود الاستفسار عن خدمة (${serviceName}).`
        : `Hello Marwan Movers & Packers, I would like to inquire about your service: ${serviceName}.`;
      window.open(`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(msg)}`, '_blank');
    }
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-slate-50 border-y border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-brand-600" />
            <span>{t.services.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-950 tracking-tight leading-tight mb-4">
            {t.services.title}
          </h2>
          <div className="w-16 h-1 bg-brand-600 mx-auto rounded-full mb-4"></div>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        {/* Filter Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                filter === tab.id
                  ? 'bg-navy-900 text-white shadow-md'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {isRtl ? tab.labelAr : tab.labelEn}
            </button>
          ))}
        </div>

        {/* 12 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-card-hover hover:border-brand-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Card Icon & Category Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-50 transition-all">
                    {iconMap[service.icon] || <Truck className="w-6 h-6 text-brand-600" />}
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-100 text-slate-600">
                    {service.category}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-navy-950 mb-3 group-hover:text-brand-600 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {service.desc}
                </p>
              </div>

              {/* Card Footer CTA */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => handleInquire(service.title)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-700 hover:text-brand-900 group/btn"
                >
                  <span>{t.services.ctaBtn}</span>
                  {isRtl ? (
                    <ArrowLeft className="w-4 h-4 group-hover/btn:-translate-x-1 transition-transform" />
                  ) : (
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  )}
                </button>

                <a
                  href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(
                    isRtl
                      ? `مرحباً، أود حجز خدمة: ${service.title}`
                      : `Hello, I would like to book: ${service.title}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-emerald-50 hover:bg-emerald-100 flex items-center justify-center text-emerald-600 transition-colors"
                  title="WhatsApp Inquiry"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
