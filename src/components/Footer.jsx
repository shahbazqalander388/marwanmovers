import React from 'react';
import { Truck, Phone, Mail, Clock, MapPin, MessageSquare, Globe, ArrowUp, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_INFO } from '../data/company';

export const Footer = () => {
  const { language, toggleLanguage, isRtl, t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.movingTypes, href: '#types' },
    { label: t.nav.areas, href: '#areas' },
    { label: t.nav.whyUs, href: '#why-us' },
    { label: t.nav.faq, href: '#faq' },
    { label: t.nav.contact, href: '#contact' },
  ];

  const serviceLinks = [
    'Home Moving',
    'Villa Moving',
    'Office Moving',
    'Apartment Moving',
    'Furniture Dismantling & Assembly',
    'Packing & Unpacking'
  ];

  const serviceLinksAr = [
    'نقل المنازل',
    'نقل الفلل',
    'نقل المكاتب والشركات',
    'نقل الشقق',
    'فك وتركيب الأثاث',
    'التغليف وفك التغليف'
  ];

  const emiratesList = [
    'Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Ras Al Khaimah', 'Fujairah', 'Umm Al Quwain', 'Al Ain'
  ];

  const emiratesListAr = [
    'دبي', 'أبوظبي', 'الشارقة', 'عجمان', 'رأس الخيمة', 'الفجيرة', 'أم القيوين', 'العين'
  ];

  return (
    <footer className="bg-navy-950 text-slate-300 pt-16 pb-12 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-brand-600 to-blue-500 flex items-center justify-center text-white shadow-md">
                <Truck className="w-6 h-6 text-amber-400" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight text-white font-sans">
                  MARWAN
                </span>
                <span className="text-xs font-semibold tracking-wider text-brand-400 uppercase">
                  Movers & Packers UAE
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              {t.footer.desc}
            </p>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={toggleLanguage}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-900 text-xs font-semibold text-slate-300 hover:text-white hover:border-slate-500 transition-colors"
              >
                <Globe className="w-3.5 h-3.5 text-brand-400" />
                <span>{language === 'en' ? 'تصفح بالعربية' : 'Browse in English'}</span>
              </button>

              <span className="text-xs text-emerald-400 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
                {isRtl ? 'متاح 24/7' : '24/7 Ready'}
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Key Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {t.footer.servicesTitle}
            </h4>
            <ul className="space-y-2 text-xs">
              {(isRtl ? serviceLinksAr : serviceLinks).map((s, idx) => (
                <li key={idx}>
                  <a
                    href="#services"
                    className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-500"></span>
                    <span>{s}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Info & UAE Areas */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {t.footer.contactTitle}
            </h4>

            <div className="space-y-3 text-xs">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="flex items-center gap-2.5 text-slate-300 hover:text-amber-400 transition-colors"
                dir="ltr"
              >
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="font-semibold">{COMPANY_INFO.phone}</span>
              </a>

              <a
                href={isRtl ? COMPANY_INFO.whatsappUrlAr : COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-slate-300 hover:text-whatsapp transition-colors"
                dir="ltr"
              >
                <MessageSquare className="w-4 h-4 text-whatsapp shrink-0" />
                <span>WhatsApp: {COMPANY_INFO.phone}</span>
              </a>

              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-2.5 text-slate-300 hover:text-amber-400 transition-colors"
                dir="ltr"
              >
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="break-all">{COMPANY_INFO.email}</span>
              </a>

              <div className="flex items-center gap-2.5 text-slate-400">
                <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{isRtl ? COMPANY_INFO.workingHoursLabelAr : COMPANY_INFO.workingHoursLabel}</span>
              </div>

              <div className="flex items-start gap-2.5 text-slate-400">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{isRtl ? COMPANY_INFO.serviceAreaAr : COMPANY_INFO.serviceArea}</span>
              </div>
            </div>

            {/* Quick Emirates Badges */}
            <div className="pt-2">
              <span className="text-[11px] text-slate-500 block mb-1.5 font-semibold">
                {t.footer.areasTitle}:
              </span>
              <div className="flex flex-wrap gap-1">
                {(isRtl ? emiratesListAr : emiratesList).map((em, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400"
                  >
                    {em}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Bar: Copyright & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {t.footer.copyright}</p>
          
          <div className="flex items-center gap-6">
            <span className="text-slate-400">{t.footer.disclaimer}</span>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 hover:text-white flex items-center justify-center text-slate-400 transition-colors"
              title="Back to Top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
