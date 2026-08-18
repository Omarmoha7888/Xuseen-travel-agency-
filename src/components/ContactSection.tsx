import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  ExternalLink 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useToast } from './Toast';

export const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  const { showToast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim()) {
      showToast('Please fill in your name, phone, and inquiry message.', 'error');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setIsSuccess(true);
        showToast(t.toast.contactSuccess || 'Message received. We will contact you shortly.', 'success');
        setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
      } else {
        showToast(data.error || 'Failed to send message.', 'error');
      }
    } catch (err) {
      console.error(err);
      showToast('Network error sending message.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-us" className="py-14 sm:py-20 px-3 sm:px-6 lg:px-8 bg-[#0D0D0D] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold block mb-2">
            {t.contact.tagline}
          </span>
          <h2 className="font-cinzel text-2xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">
            {t.contact.title}
          </h2>
          <p className="text-xs sm:text-base text-gray-400">
            {t.contact.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Left Column: Official Contact Directory Cards */}
          <div className="lg:col-span-5 space-y-3.5 sm:space-y-4">
            
            {/* Phone Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#141414] border border-white/10 space-y-2">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#D4AF37]/15 flex items-center justify-center text-[#D4AF37]">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <h3 className="font-cinzel text-xs sm:text-sm font-bold text-white">
                {t.contact.phoneLabel}
              </h3>
              <div className="space-y-1 text-xs sm:text-sm">
                <a href="tel:+252612483838" className="block text-gray-300 hover:text-[#D4AF37] transition-colors" dir="ltr">
                  +252 61 2483838 (Hotline 1)
                </a>
                <a href="tel:+252612141414" className="block text-gray-300 hover:text-[#D4AF37] transition-colors" dir="ltr">
                  +252 61 2141414 (Hotline 2)
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#141414] border border-white/10 space-y-2">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#D4AF37]/15 flex items-center justify-center text-[#D4AF37]">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <h3 className="font-cinzel text-xs sm:text-sm font-bold text-white">
                {t.contact.emailLabel}
              </h3>
              <a href="mailto:balcadtravel@gmail.com" className="block text-xs sm:text-sm text-gray-300 hover:text-[#D4AF37] transition-colors break-all">
                balcadtravel@gmail.com
              </a>
            </div>

            {/* WhatsApp Direct Chat Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#11241a] to-[#141414] border border-emerald-500/30 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs sm:text-sm">
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Direct</span>
                </div>
                <span className="text-[10px] text-emerald-400/80 uppercase font-semibold">Live Desk</span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                Connect directly with our travel operations desk on WhatsApp for fast response.
              </p>
              <a
                href="https://wa.me/252612483838"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-bold transition-colors touch-manipulation"
              >
                <span>{t.contact.whatsappBtn}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Address & Hours */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#141414] border border-white/10 space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <div className="font-bold text-white mb-0.5">Head Office Location</div>
                  <div className="text-gray-400">{t.contact.address}</div>
                </div>
              </div>
              <div className="flex items-start gap-3 border-t border-white/5 pt-3">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <div className="font-bold text-white mb-0.5">Operating Hours</div>
                  <div className="text-gray-400">{t.contact.workingHours}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#141414] border border-[#D4AF37]/30 shadow-2xl space-y-5 sm:space-y-6">
              <div>
                <h3 className="font-cinzel text-base sm:text-xl font-bold text-white">
                  {t.contact.formTitle}
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  {t.contact.formSubtitle}
                </p>
              </div>

              {isSuccess ? (
                <div className="p-5 sm:p-6 rounded-2xl bg-[#181818] border border-[#D4AF37]/50 text-center space-y-3">
                  <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-[#D4AF37] mx-auto" />
                  <h4 className="font-cinzel text-sm sm:text-base font-bold text-white">Message Sent Successfully</h4>
                  <p className="text-xs text-gray-300 max-w-md mx-auto">
                    {t.contact.sentSuccess}
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white hover:border-[#D4AF37]"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {/* Name */}
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-300">
                        {t.contact.nameLabel} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                        className="w-full min-h-[44px] bg-[#1A1A1A] border border-white/10 focus:border-[#D4AF37] rounded-xl p-3 text-xs sm:text-sm text-white outline-none"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-300">
                        {t.contact.phoneLabel} *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+252 61..."
                        className="w-full min-h-[44px] bg-[#1A1A1A] border border-white/10 focus:border-[#D4AF37] rounded-xl p-3 text-xs sm:text-sm text-white outline-none"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-300">
                        {t.contact.emailLabel}
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        className="w-full min-h-[44px] bg-[#1A1A1A] border border-white/10 focus:border-[#D4AF37] rounded-xl p-3 text-xs sm:text-sm text-white outline-none"
                      />
                    </div>

                    {/* Subject */}
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-300">
                        {t.contact.subjectLabel}
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="e.g. Visa inquiry for Turkey"
                        className="w-full min-h-[44px] bg-[#1A1A1A] border border-white/10 focus:border-[#D4AF37] rounded-xl p-3 text-xs sm:text-sm text-white outline-none"
                      />
                    </div>

                    {/* Message */}
                    <div className="sm:col-span-2 space-y-1">
                      <label className="text-xs font-semibold text-gray-300">
                        {t.contact.messageLabel} *
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder={t.contact.messagePlaceholder}
                        className="w-full bg-[#1A1A1A] border border-white/10 focus:border-[#D4AF37] rounded-xl p-3 text-xs sm:text-sm text-white outline-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full min-h-[44px] py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#B8860B] text-black font-bold text-xs sm:text-sm shadow-lg shadow-[#D4AF37]/30 active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-50 touch-manipulation"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Sending...' : t.contact.sendBtn}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
