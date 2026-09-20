import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Phone, MessageSquare, Truck, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_INFO } from '../data/company';

export const Navbar = ({ onOpenQuote }) => {
  const { language, toggleLanguage, isRtl, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.movingTypes, href: '#types' },
    { label: t.nav.areas, href: '#areas' },
    { label: t.nav.whyUs, href: '#why-us' },
    { label: t.nav.faq, href: '#faq' },
    { label: t.nav.contact, href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const topOffset = 110;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`w-full transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-slate-100' : 'bg-white border-b border-slate-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-navy-900 via-blue-900 to-brand-600 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-200">
              <Truck className="w-6 h-6 text-amber-400" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-navy-950 font-sans">
                MARWAN
              </span>
              <span className="text-xs sm:text-sm font-semibold tracking-wider text-brand-600 uppercase flex items-center gap-1">
                Movers & Packers
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                <span className="text-[10px] text-slate-500 lowercase">UAE</span>
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-medium text-slate-700 hover:text-brand-600 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-600 hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 hover:border-brand-300 text-slate-700 hover:text-brand-600 text-xs font-semibold transition-all bg-slate-50/80 hover:bg-slate-100"
              title="Change Language"
              aria-label="Change Language"
            >
              <Globe className="w-4 h-4 text-brand-600" />
              <span>{language === 'en' ? 'العربية' : 'English'}</span>
            </button>

            {/* Quote Button */}
            <button
              onClick={onOpenQuote}
              className="px-4 py-2 text-xs font-bold rounded-lg text-white bg-navy-900 hover:bg-navy-800 transition-all shadow-sm hover:shadow"
            >
              {t.nav.getQuote}
            </button>

            {/* Prominent WhatsApp button */}
            <a
              href={isRtl ? COMPANY_INFO.whatsappUrlAr : COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-whatsapp hover:bg-whatsapp-hover text-white text-xs font-bold transition-all shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageSquare className="w-4 h-4 fill-white text-whatsapp" />
              <span>{t.nav.whatsapp}</span>
            </a>
          </div>

          {/* Mobile Right Controls: Lang + Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Mobile Lang Button */}
            <button
              onClick={toggleLanguage}
              className="px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs font-bold text-slate-800 bg-slate-50 flex items-center gap-1"
            >
              <Globe className="w-3.5 h-3.5 text-brand-600" />
              <span>{language === 'en' ? 'عربي' : 'EN'}</span>
            </button>

            {/* Hamburger Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-navy-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 animate-fadeIn">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold text-slate-800 hover:bg-slate-50 hover:text-brand-600 transition-colors"
              >
                <span>{link.label}</span>
                <ChevronRight className={`w-4 h-4 text-slate-400 ${isRtl ? 'rotate-180' : ''}`} />
              </a>
            ))}
          </nav>

          <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileOpen(false);
                onOpenQuote();
              }}
              className="w-full py-3 rounded-xl text-sm font-bold text-center text-white bg-navy-900 hover:bg-navy-800 transition-colors shadow-sm"
            >
              {t.nav.getQuote}
            </button>

            <a
              href={isRtl ? COMPANY_INFO.whatsappUrlAr : COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold text-white bg-whatsapp hover:bg-whatsapp-hover transition-colors shadow-sm"
            >
              <MessageSquare className="w-4 h-4 fill-white text-whatsapp" />
              <span>{t.nav.whatsapp}</span>
            </a>

            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 transition-colors"
              dir="ltr"
            >
              <Phone className="w-4 h-4 text-brand-600" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
