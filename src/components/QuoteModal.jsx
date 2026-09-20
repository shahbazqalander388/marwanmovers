import React, { useState, useEffect } from 'react';
import { X, Send, MessageSquare, CheckCircle2, Truck, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_INFO } from '../data/company';

export const QuoteModal = ({ isOpen, onClose, preselectedService = '' }) => {
  const { t, isRtl } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    from: '',
    to: '',
    movingType: preselectedService || '',
    message: ''
  });

  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({ ...prev, movingType: preselectedService }));
    }
  }, [preselectedService]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleModalSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert(isRtl ? 'يرجى إدخال الاسم ورقم الهاتف' : 'Please enter your name and phone number');
      return;
    }
    setIsSuccess(true);
  };

  const handleSendWhatsApp = () => {
    const name = formData.name || (isRtl ? 'عميل' : 'Customer');
    const phone = formData.phone || '';
    const from = formData.from || (isRtl ? 'في الإمارات' : 'UAE');
    const to = formData.to || (isRtl ? 'في الإمارات' : 'UAE');
    const type = formData.movingType || (isRtl ? 'نقل أثاث' : 'Moving Service');
    const notes = formData.message ? `\n- Details: ${formData.message}` : '';

    const text = isRtl
      ? `*طلب عرض أسعار سريع - شركة مروان*\n- الاسم: ${name}\n- الهاتف: ${phone}\n- من: ${from}\n- إلى: ${to}\n- نوع الخدمة: ${type}${notes}`
      : `*Quick Moving Quote Request - Marwan Movers*\n- Name: ${name}\n- Phone: ${phone}\n- From: ${from}\n- To: ${to}\n- Service: ${type}${notes}`;

    window.open(`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(text)}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-sm animate-fadeIn">
      
      {/* Modal Card */}
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Header */}
        <div className="bg-navy-950 text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                {t.nav.getQuote}
              </h3>
              <p className="text-xs text-slate-400">
                {isRtl ? 'تسعير فوري ومباشر 24/7' : 'Instant 24/7 Relocation Estimate'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {isSuccess ? (
            <div className="text-center py-6 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-navy-950 mb-2">
                {isRtl ? 'تم استلام طلبك بنجاح!' : 'Thank You!'}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 max-w-xs mx-auto">
                {t.contact.successMsg}
              </p>
              <button
                onClick={handleSendWhatsApp}
                className="w-full py-3 rounded-xl bg-whatsapp hover:bg-whatsapp-hover text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 mb-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{t.contact.whatsappBtn}</span>
              </button>
              <button
                onClick={onClose}
                className="w-full py-2.5 rounded-xl border border-slate-200 text-slate-700 text-xs font-semibold hover:bg-slate-50"
              >
                {isRtl ? 'إغلاق' : 'Close'}
              </button>
            </div>
          ) : (
            <form onSubmit={handleModalSubmit} className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {t.contact.nameLabel} *
                  </label>
                  <input
                    type="text"
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t.contact.namePlaceholder}
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 text-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {t.contact.phoneLabel} *
                  </label>
                  <input
                    type="tel"
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t.contact.phonePlaceholder}
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 text-slate-800"
                    dir="ltr"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {t.contact.fromLabel}
                  </label>
                  <input
                    type="text"
                    name="from"
                    value={formData.from}
                    onChange={handleChange}
                    placeholder={t.contact.fromPlaceholder}
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 text-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {t.contact.toLabel}
                  </label>
                  <input
                    type="text"
                    name="to"
                    value={formData.to}
                    onChange={handleChange}
                    placeholder={t.contact.toPlaceholder}
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 text-slate-800"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {t.contact.typeLabel}
                </label>
                <select
                  name="movingType"
                  value={formData.movingType}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 text-slate-800"
                >
                  <option value="">{t.contact.typePlaceholder}</option>
                  {t.contact.types.map((type, idx) => (
                    <option key={idx} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {t.contact.messageLabel}
                </label>
                <textarea
                  rows={2}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t.contact.messagePlaceholder}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 text-slate-800 resize-none"
                ></textarea>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                <button
                  type="submit"
                  className="flex-1 py-3 px-4 rounded-xl bg-navy-900 hover:bg-navy-800 text-white text-xs sm:text-sm font-bold transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{t.contact.submitBtn}</span>
                </button>

                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  className="flex-1 py-3 px-4 rounded-xl bg-whatsapp hover:bg-whatsapp-hover text-white text-xs sm:text-sm font-bold transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-white text-whatsapp" />
                  <span>{t.contact.whatsappBtn}</span>
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
