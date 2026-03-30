import React, { useState, useEffect } from 'react';
import { Page } from '../App';
import { useTranslation } from '../src/context/LanguageContext';
import { Language } from '../translations';
import { Menu, X, User, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, t } = useTranslation();

  const getLinkName = (id: Page) => {
    const navMap: Record<string, string> = {
      home: 'home',
      services: 'services',
      solutions: 'expertise',
      projects: 'projects',
      contact: 'contact',
    };
    const key = navMap[id] as keyof typeof t.nav;
    return t.nav[key] || id;
  };

  const links: { id: Page }[] = [
    { id: 'home' },
    { id: 'services' },
    { id: 'solutions' },
    { id: 'projects' },
    { id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (id: Page) => {
    onNavigate(id);
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-white py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <button 
            onClick={() => handleNav('home')}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105">
              <User size={18} className="text-white" />
            </div>
            <div className="flex flex-col items-start leading-none">
              <span className="text-base font-bold text-slate-900">Alexis Mupole</span>
              <span className="text-xs text-slate-500">Digital Consultant</span>
            </div>
          </button>

          <div className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  currentPage === link.id 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {getLinkName(link.id)}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <div className="flex bg-slate-100 rounded-lg p-1">
              {(['fr', 'en', 'sw'] as Language[]).map(l => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                    lang === l ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>

            <button 
              onClick={() => handleNav('contact')}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              <MessageCircle size={16} />
              {t.hero.ctaPrimary}
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-6 py-4 space-y-2">
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  className={`flex w-full p-3 rounded-lg text-sm font-medium transition-all ${
                    currentPage === link.id 
                      ? 'bg-blue-600 text-white' 
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {getLinkName(link.id)}
                </button>
              ))}
              <div className="flex gap-2 pt-2">
                {(['fr', 'en', 'sw'] as Language[]).map(l => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`flex-1 py-2.5 rounded-lg font-medium text-sm border ${
                      lang === l 
                        ? 'bg-blue-600 text-white border-blue-600' 
                        : 'bg-white text-slate-600 border-slate-200'
                    }`}
                  >
                    {l.toUpperCase()}
                  </button>
                ))}
              </div>
              <button 
                onClick={() => handleNav('contact')}
                className="w-full mt-2 p-3 bg-blue-600 text-white rounded-lg font-medium text-sm"
              >
                {t.hero.ctaPrimary}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
