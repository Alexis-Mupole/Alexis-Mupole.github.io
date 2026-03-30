import React from 'react';
import { Page } from '../App';
import { useTranslation } from '../src/context/LanguageContext';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, ArrowUp, Send } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-blue-400 to-amber-500" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                A
              </div>
              <div>
                <span className="text-xl font-bold">Alexis Mupole</span>
                <p className="text-xs text-slate-400">{t.hero.tagline?.split('(')[0] || 'Digital Consultant'}</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {t.footer.about}
            </p>
            <div className="flex gap-3">
              <SocialLink href="https://linkedin.com/in/alexismupole" icon={<Linkedin size={18} />} label="LinkedIn" />
              <SocialLink href="https://twitter.com" icon={<Twitter size={18} />} label="Twitter" />
              <SocialLink href="https://github.com/Alexis-Mupole" icon={<Github size={18} />} label="GitHub" />
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-6">{t.footer.quickLinks}</h4>
            <ul className="space-y-3">
              <li><FooterLink onClick={() => onNavigate('home')}>{t.nav.home}</FooterLink></li>
              <li><FooterLink onClick={() => onNavigate('services')}>{t.nav.services}</FooterLink></li>
              <li><FooterLink onClick={() => onNavigate('projects')}>{t.nav.projects}</FooterLink></li>
              <li><FooterLink onClick={() => onNavigate('solutions')}>{t.nav.expertise}</FooterLink></li>
              <li><FooterLink onClick={() => onNavigate('contact')}>{t.nav.contact}</FooterLink></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-6">{t.footer.services}</h4>
            <ul className="space-y-3">
              <li><FooterLink onClick={() => onNavigate('services')}>{t.footer.webDev}</FooterLink></li>
              <li><FooterLink onClick={() => onNavigate('services')}>{t.footer.cloud}</FooterLink></li>
              <li><FooterLink onClick={() => onNavigate('services')}>{t.footer.ai}</FooterLink></li>
              <li><FooterLink onClick={() => onNavigate('services')}>{t.footer.consulting}</FooterLink></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-6">{t.footer.getInTouch}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="text-blue-400 mt-0.5 shrink-0" size={18} />
                <a href="mailto:alexismupole@gmail.com" className="text-slate-400 hover:text-white transition-colors text-sm">
                  alexismupole@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="text-blue-400 mt-0.5 shrink-0" size={18} />
                <a href="tel:+243997306308" className="text-slate-400 hover:text-white transition-colors text-sm">
                  +243 997 306 308
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-blue-400 mt-0.5 shrink-0" size={18} />
                <span className="text-slate-400 text-sm">
                  Kinshasa, DR Congo
                </span>
              </li>
            </ul>
            <button 
              onClick={() => onNavigate('contact')}
              className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Send size={16} />
              {t.contact.getInTouch}
            </button>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} Alexis Mupole. {t.footer.copyright}
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">{t.footer.privacy}</a>
            <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">{t.footer.terms}</a>
          </div>
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-white hover:bg-blue-600 transition-colors"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

const FooterLink: React.FC<{ children: React.ReactNode; onClick: () => void }> = ({ children, onClick }) => (
  <button 
    onClick={onClick}
    className="text-slate-400 hover:text-white transition-colors text-sm text-left"
  >
    {children}
  </button>
);

const SocialLink: React.FC<{ href: string; icon: React.ReactNode; label: string }> = ({ href, icon, label }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all"
  >
    {icon}
  </a>
);

export default Footer;
