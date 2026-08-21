import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from '../src/context/LanguageContext';
import { MessageCircle, X, Send, ArrowRight } from 'lucide-react';

type WelcomeKey = 'msg1' | 'msg2' | 'msg3';

interface ChatMessage {
  id: number;
  welcomeKey?: WelcomeKey;
  text?: string;
  time: string;
  outgoing: boolean;
}

const WHATSAPP_NUMBER = '243997306308';

const formatTime = () =>
  new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

const WhatsAppChat: React.FC = () => {
  const { t } = useTranslation();
  const [bubbleVisible, setBubbleVisible] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const [draft, setDraft] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [openingNote, setOpeningNote] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);
  const bubbleVisibleRef = useRef(false);
  const playedSuccessfullyRef = useRef(false);
  const sequenceStartedRef = useRef(false);

  const playChime = () => {
    try {
      const AudioCtx = window.AudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      if (ctx.state === 'suspended') {
        ctx.resume().catch(() => {});
        if (ctx.state === 'suspended') return;
      }
      playedSuccessfullyRef.current = true;
      const now = ctx.currentTime;
      const notes = [
        { freq: 830.61, start: 0 },
        { freq: 987.77, start: 0.14 }
      ];
      notes.forEach(({ freq, start }) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.0001, now + start);
        gain.gain.exponentialRampToValueAtTime(0.16, now + start + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + start + 0.5);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + start);
        osc.stop(now + start + 0.55);
      });
    } catch {
      // audio unavailable; stay silent
    }
  };

  useEffect(() => {
    if (sequenceStartedRef.current) return;
    sequenceStartedRef.current = true;
    const timers: ReturnType<typeof setTimeout>[] = [];
    [600, 1800, 3000].forEach((delay) => {
      timers.push(setTimeout(playChime, delay));
    });
    timers.push(
      setTimeout(() => {
        setBubbleVisible(true);
        bubbleVisibleRef.current = true;
      }, 3400)
    );
    timers.push(
      setTimeout(() => {
        setBubbleVisible(false);
        bubbleVisibleRef.current = false;
      }, 23000)
    );
    const unlock = () => {
      if (!playedSuccessfullyRef.current && bubbleVisibleRef.current) playChime();
    };
    window.addEventListener('pointerdown', unlock, { once: true });
    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener('pointerdown', unlock);
    };
  }, []);

  useEffect(() => {
    const el = bodyRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, chatOpen]);

  const openChat = () => {
    setChatOpen(true);
    setBubbleVisible(false);
    bubbleVisibleRef.current = false;
    setHasOpened(true);
    if (messages.length === 0) {
      setMessages([
        { id: 1, welcomeKey: 'msg1', time: formatTime(), outgoing: false },
        { id: 2, welcomeKey: 'msg2', time: formatTime(), outgoing: false },
        { id: 3, welcomeKey: 'msg3', time: formatTime(), outgoing: false }
      ]);
    }
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const text = draft.trim();
    if (!text) return;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer'
    );
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), text, time: formatTime(), outgoing: true }
    ]);
    setDraft('');
    setOpeningNote(true);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {chatOpen && (
        <div className="w-[340px] max-w-[calc(100vw-2.5rem)] h-[440px] max-h-[70vh] bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700 flex flex-col">
          <div className="bg-[#075E54] px-4 py-3 flex items-center gap-3 shrink-0">
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white">
              <MessageCircle size={18} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-white leading-tight">Alexis Mupole</p>
              <p className="text-xs text-green-100 flex items-center gap-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 bg-green-300 rounded-full animate-pulse" />
                {t.whatsapp.online}
              </p>
            </div>
            <button
              onClick={() => setChatOpen(false)}
              aria-label="Close chat"
              className="text-white/80 hover:text-white transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          <div
            ref={bodyRef}
            className="flex-1 overflow-y-auto bg-[#ECE5DD] dark:bg-slate-900 px-3 py-4 space-y-2"
          >
            {messages.map((m) => (
              <div key={m.id} className={`flex ${m.outgoing ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`${
                    m.outgoing
                      ? 'bg-[#DCF8C6] dark:bg-green-700/70'
                      : 'bg-white dark:bg-slate-700'
                  } rounded-xl px-3 py-2 max-w-[85%] shadow-sm`}
                >
                  <p className="text-sm text-slate-800 dark:text-white leading-snug break-words">
                    {m.welcomeKey ? t.whatsapp[m.welcomeKey] : m.text}
                  </p>
                  <p className="text-[10px] text-slate-400 dark:text-slate-200/70 text-right mt-0.5">
                    {m.time}
                  </p>
                </div>
              </div>
            ))}
            {openingNote && (
              <div className="flex justify-center pt-1">
                <span className="text-[11px] bg-white/80 dark:bg-slate-800 text-slate-500 dark:text-slate-300 rounded-full px-3 py-1">
                  {t.whatsapp.openingNote}
                </span>
              </div>
            )}
          </div>

          <form
            onSubmit={handleSend}
            className="bg-slate-100 dark:bg-slate-800 px-3 py-2.5 flex items-center gap-2 border-t border-slate-200 dark:border-slate-700 shrink-0"
          >
            <input
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder={t.whatsapp.inputPlaceholder}
              className="flex-1 min-w-0 bg-white dark:bg-slate-900 rounded-full px-4 py-2 text-sm text-slate-800 dark:text-white placeholder:text-slate-400 outline-none border border-slate-200 dark:border-slate-700 focus:border-green-400 transition-colors"
            />
            <button
              type="submit"
              aria-label="Send message"
              disabled={!draft.trim()}
              className="w-10 h-10 shrink-0 bg-[#25D366] hover:bg-[#20bd5a] disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-full flex items-center justify-center transition-all"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}

      {!chatOpen && bubbleVisible && (
        <div className="relative w-72 max-w-[calc(100vw-2.5rem)] bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-700 p-4">
          <button
            onClick={() => setBubbleVisible(false)}
            aria-label="Close"
            className="absolute -top-2 -right-2 w-6 h-6 bg-slate-900 dark:bg-slate-600 text-white rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors"
          >
            <X size={12} />
          </button>
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white shrink-0">
              <MessageCircle size={18} />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-bold text-slate-900 dark:text-white mb-1">{t.whatsapp.title}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-3">{t.whatsapp.message}</p>
              <button
                onClick={openChat}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors uppercase tracking-wide"
              >
                {t.whatsapp.cta}
                <ArrowRight size={12} />
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => (chatOpen ? setChatOpen(false) : openChat())}
        aria-label="WhatsApp chat"
        className="relative w-12 h-12 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-lg hover:scale-110 transition-all flex items-center justify-center"
      >
        {chatOpen ? <X size={22} /> : <MessageCircle size={22} />}
        {!chatOpen && !hasOpened && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white dark:border-slate-900">
            1
          </span>
        )}
      </button>
    </div>
  );
};

export default WhatsAppChat;
