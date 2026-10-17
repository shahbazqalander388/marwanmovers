import React, { useState } from 'react';
import { 
  Phone, Mail, Clock, MapPin, MessageSquare, Send, CheckCircle2, 
  Sparkles, Calendar, User, Truck, ShieldAlert, ArrowRight, ArrowLeft 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_INFO, BRAND_ASSETS } from '../data/company';

export const ContactSection = ({ initialService = '' }) => {
  const { t, isRtl } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    from: '',
    to: '',
    movingType: initialService || '',
    date: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Direct interactive submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert(isRtl ? 'يرجى إدخال الاسم ورقم الهاتف على الأقل.' : 'Please enter at least your name and phone number.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  // Instant WhatsApp dispatcher
  const handleSendWhatsApp = (e) => {
    e.preventDefault();
    const name = formData.name || (isRtl ? 'عميل محترم' : 'Valued Customer');
    const phone = formData.phone || (isRtl ? 'غير محدد' : 'Not specified');
    const from = formData.from || (isRtl ? 'في الإمارات' : 'Within UAE');
    const to = formData.to || (isRtl ? 'في الإمارات' : 'Within UAE');
    const type = formData.movingType || (isRtl ? 'نقل عام' : 'General Relocation');
    const date = formData.date || (isRtl ? 'في أقرب وقت' : 'ASAP');
    const notes = formData.message ? `\n- Details: ${formData.message}` : '';

    const text = isRtl
      ? `*طلب عرض أسعار نقل أثاث - شركة مروان*\n- الاسم: ${name}\n- الهاتف: ${phone}\n- النقل من: ${from}\n- النقل إلى: ${to}\n- نوع النقل: ${type}\n- التاريخ المطلوب: ${date}${notes}\n\nيرجى تزويدي بأفضل تسعير متاح.`
      : `*Moving Quote Request - Marwan Movers*\n- Name: ${name}\n- Phone: ${phone}\n- Moving From: ${from}\n- Moving To: ${to}\n- Moving Type: ${type}\n- Preferred Date: ${date}${notes}\n\nPlease provide me with your best rate.`;

    window.open(`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-brand-600" />
            <span>{t.contact.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-950 tracking-tight leading-tight mb-4">
            {t.contact.title}
          </h2>
          <div className="w-16 h-1 bg-brand-600 mx-auto rounded-full mb-4"></div>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Official Company Information Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-navy-950 text-white rounded-3xl p-8 border border-slate-800 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-48 h-48 bg-brand-500/10 rounded-full blur-2xl pointer-events-none"></div>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-lg p-1 border border-slate-700/80 shrink-0 overflow-hidden flex items-center justify-center">
                  <img 
                    src={BRAND_ASSETS.logo.src} 
                    alt={BRAND_ASSETS.logo.alt} 
                    onError={(e) => { e.currentTarget.src = BRAND_ASSETS.logo.remoteSrc; }}
                    className="w-full h-full object-contain rounded-xl"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white leading-tight">
                    {isRtl ? COMPANY_INFO.nameAr : COMPANY_INFO.name}
                  </h3>
                  <span className="text-xs text-amber-400 font-semibold block mt-0.5">
                    {BRAND_ASSETS.logo.tagline}
                  </span>
                  <span className="text-[11px] text-slate-400 block">
                    {isRtl ? 'خدمات نقل وتغليف معتمدة في الإمارات' : 'Professional Relocation Services Across UAE'}
                  </span>
                </div>
              </div>

              <div className="space-y-5 pt-4 border-t border-slate-800/80">
                {/* WhatsApp & Call */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-whatsapp shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 block">{t.contact.phone}</span>
                    <a
                      href={`tel:${COMPANY_INFO.phoneRaw}`}
                      className="text-base font-bold text-white hover:text-amber-400 transition-colors block"
                      dir="ltr"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                    <span className="text-[11px] text-emerald-400">{isRtl ? 'مكالمات ورسائل واتساب متاحة' : 'Calls & WhatsApp Active'}</span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-amber-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 block">{t.contact.email}</span>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-sm sm:text-base font-bold text-white hover:text-amber-400 transition-colors break-all"
                      dir="ltr"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-blue-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 block">{t.contact.hours}</span>
                    <span className="text-base font-bold text-white block">
                      {COMPANY_INFO.workingHours} ({isRtl ? 'طوال الأسبوع' : 'Everyday'})
                    </span>
                    <span className="text-[11px] text-slate-400">{t.contact.hoursVal}</span>
                  </div>
                </div>

                {/* Service Area */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-emerald-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 block">{t.contact.coverage}</span>
                    <span className="text-base font-bold text-white block">
                      {isRtl ? COMPANY_INFO.serviceAreaAr : COMPANY_INFO.serviceArea}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      {isRtl ? 'دبي، أبوظبي، الشارقة، عجمان، رأس الخيمة، الفجيرة، أم القيوين، العين' : 'Dubai, Abu Dhabi, Sharjah, Ajman, RAK, Fujairah, UAQ, Al Ain'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct Quick WhatsApp Action */}
              <div className="mt-8 pt-6 border-t border-slate-800">
                <a
                  href={isRtl ? COMPANY_INFO.whatsappUrlAr : COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-whatsapp hover:bg-whatsapp-hover text-white text-sm font-bold shadow-md transition-all hover:scale-[1.02]"
                >
                  <MessageSquare className="w-4 h-4 fill-white text-whatsapp" />
                  <span>{isRtl ? 'تحدث مع المشرف عبر واتساب' : 'Chat Directly on WhatsApp'}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Moving Quote Request Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm relative">
              
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-navy-950 mb-1">
                  {t.contact.formTitle}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  {t.contact.formDesc}
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-emerald-950 mb-2">
                    {isRtl ? 'تم استلام طلبك بنجاح!' : 'Quote Request Received!'}
                  </h4>
                  <p className="text-sm text-emerald-800 max-w-md mx-auto mb-6 leading-relaxed">
                    {t.contact.successMsg}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-2.5 rounded-xl border border-emerald-300 text-xs font-bold text-emerald-900 hover:bg-emerald-100 transition-colors"
                    >
                      {isRtl ? 'إرسال طلب آخر' : 'Submit Another Request'}
                    </button>
                    <button
                      onClick={handleSendWhatsApp}
                      className="px-5 py-2.5 rounded-xl bg-whatsapp hover:bg-whatsapp-hover text-xs font-bold text-white transition-colors flex items-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>{t.contact.whatsappBtn}</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {t.contact.nameLabel} <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={t.contact.namePlaceholder}
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all text-slate-800"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {t.contact.phoneLabel} <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder={t.contact.phonePlaceholder}
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all text-slate-800"
                        dir="ltr"
                      />
                    </div>
                  </div>

                  {/* From & To */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all text-slate-800"
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
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all text-slate-800"
                      />
                    </div>
                  </div>

                  {/* Moving Type & Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {t.contact.typeLabel}
                      </label>
                      <select
                        name="movingType"
                        value={formData.movingType}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all text-slate-800"
                      >
                        <option value="">{t.contact.typePlaceholder}</option>
                        {t.contact.types.map((type, idx) => (
                          <option key={idx} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {t.contact.dateLabel}
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all text-slate-800"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t.contact.messageLabel}
                    </label>
                    <textarea
                      rows={3}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t.contact.messagePlaceholder}
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all text-slate-800 resize-none"
                    ></textarea>
                  </div>

                  {/* Action Buttons: Submit Form or WhatsApp Immediate */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex-1 py-3.5 px-5 rounded-xl bg-navy-900 hover:bg-navy-800 text-white text-sm font-extrabold transition-all shadow-md flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>{loading ? '...' : t.contact.submitBtn}</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleSendWhatsApp}
                      className="flex-1 py-3.5 px-5 rounded-xl bg-whatsapp hover:bg-whatsapp-hover text-white text-sm font-extrabold transition-all shadow-md shadow-whatsapp/20 flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4 fill-white text-whatsapp" />
                      <span>{t.contact.whatsappBtn}</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-500 text-center pt-2">
                    {t.contact.whatsappNotice}
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
