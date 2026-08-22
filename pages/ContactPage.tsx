import React, { useState } from 'react';
import { useTranslation } from '../src/context/LanguageContext';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle } from 'lucide-react';

const ContactPage: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", "228cc209-992c-418c-a368-db7620320394");

    setSending(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitted(true);
        form.reset();
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert(result.message || "Error");
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  const contactInfo = [
    { icon: <Mail size={24} />, label: t.contact.info.email, value: "alexismupole@gmail.com", href: "mailto:alexismupole@gmail.com" },
    { icon: <Phone size={24} />, label: t.contact.info.phone, value: "+243 997 306 308", href: "tel:+243997306308" },
    { icon: <MapPin size={24} />, label: t.contact.info.location, value: "Kinshasa, DR Congo" },
    { icon: <Clock size={24} />, label: t.contact.info.availability, value: "Mon-Fri: 9AM-6PM CAT" },
  ];

  return (
    <div className="bg-white min-h-screen">
      <section className="pt-32 pb-16 bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              {t.contact.title}
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              {t.contact.desc}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-blue-600 text-sm font-semibold uppercase tracking-wider mb-3">
                  {t.contact.getInTouch}
                </h2>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {t.contact.formTitle}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {t.contact.formDesc}
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-1">{info.label}</p>
                      {info.href ? (
                        <a 
                          href={info.href} 
                          className="text-slate-900 font-semibold hover:text-blue-600 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-slate-900 font-semibold">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <MessageCircle className="text-blue-600" size={24} />
                  <h4 className="font-bold text-slate-900">
                    {t.contact.whatsappTitle}
                  </h4>
                </div>
                <p className="text-sm text-slate-600 mb-4">
                  {t.contact.whatsappDesc}
                </p>
                <a 
                  href="https://wa.me/243997306308"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
                >
                  {t.contact.whatsappButton}
                </a>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 lg:p-10">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="text-green-600" size={40} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                      {t.contact.sentTitle}
                    </h3>
                    <p className="text-slate-600 mb-6">
                      {t.contact.sentDesc}
                    </p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      {t.contact.sendAnother}
                    </button>
                  </div>
                ) : (
                  <form 
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">
                          {t.contact.form.name}
                        </label>
                        <input 
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder={t.contact.form.name}
                          className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">
                          {t.contact.form.email}
                        </label>
                        <input 
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="your@email.com"
                          className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">
                        {t.contact.form.msg}
                      </label>
                      <textarea 
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder={t.contact.placeholder}
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all resize-none"
                      />
                    </div>

                    <button 
                      type="submit"
                      disabled={sending}
                      className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      <Send size={18} />
                      {sending ? "Sending..." : t.contact.form.send}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
