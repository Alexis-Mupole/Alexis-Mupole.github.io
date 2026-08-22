import React, { useEffect, useState } from 'react';
import { useTranslation } from '../src/context/LanguageContext';
import { X, FileText, ArrowRight, Clock, ShieldCheck } from 'lucide-react';

const STORAGE_KEY = 'quote-popup-dismissed-at';
const DISMISS_DURATION_MS = 7 * 24 * 60 * 60 * 1000;
const SHOW_DELAY_MS = 6000;

interface QuotePopupProps {
  onGetQuote: () => void;
}

const QuotePopup: React.FC<QuotePopupProps> = ({ onGetQuote }) => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let dismissedUntil: string | null = null;
    try {
      dismissedUntil = window.localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      void e;
    }
    if (dismissedUntil && Date.now() < Number(dismissedUntil)) return;

    const timer = setTimeout(() => setVisible(true), SHOW_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    setVisible(false);
    try {
      window.localStorage.setItem(STORAGE_KEY, String(Date.now() + DISMISS_DURATION_MS));
    } catch (e) {
      void e;
    }
  };

  const handleCta = () => {
    setVisible(false);
    onGetQuote();
  };

  useEffect(() => {
    if (!visible) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') dismiss();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-4 bg-black/60 backdrop-blur-sm quote-popup-backdrop"
      onClick={dismiss}
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-popup-title"
    >
      <div
        className="relative w-full max-w-md bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-700 p-8 text-center quote-popup-card"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={dismiss}
          aria-label="Close"
          className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <X size={18} />
        </button>

        <div className="w-16 h-16 mx-auto mb-5 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/30">
          <FileText className="text-white" size={28} />
        </div>

        <span className="inline-block text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 dark:bg-blue-500/10 px-3 py-1.5 rounded-full mb-4">
          {t.home.quotePopup.badge}
        </span>

        <h3 id="quote-popup-title" className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
          {t.home.quotePopup.title}
        </h3>
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-7">
          {t.home.quotePopup.desc}
        </p>

        <div className="space-y-3">
          <button
            onClick={handleCta}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/25"
          >
            {t.home.quotePopup.cta} <ArrowRight size={18} />
          </button>
          <button
            onClick={dismiss}
            className="w-full px-6 py-3 text-slate-500 dark:text-slate-400 font-medium text-sm rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          >
            {t.home.quotePopup.later}
          </button>
        </div>

        <div className="flex items-center justify-center gap-5 mt-6 pt-5 border-t border-slate-100 dark:border-slate-800">
          <span className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
            <Clock size={14} className="text-green-600" />
            24h
          </span>
          <span className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
            <ShieldCheck size={14} className="text-blue-600" />
            {t.contact.info.availability}
          </span>
        </div>
      </div>
    </div>
  );
};

export default QuotePopup;
