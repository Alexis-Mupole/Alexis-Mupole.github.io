import React from 'react';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import { Page } from '../App';
import { useTranslation } from '../src/context/LanguageContext';
import { ArrowRight, Zap, Shield, Globe, Clock } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const { t, lang } = useTranslation();

  return (
    <div className="bg-white dark:bg-slate-900">
      <Hero onNavigate={onNavigate} />
      
      <section className="py-24 lg:py-32 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider mb-3 block">{t.home.whyMe.title}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t.home.whyChooseSubtitle}
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg">
              {t.home.whyChooseDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard 
              icon={<Zap className="text-amber-500" size={24} />}
              title={t.home.features.fastDelivery.title}
              description={t.home.features.fastDelivery.desc}
            />
            <FeatureCard 
              icon={<Shield className="text-blue-600" size={24} />}
              title={t.home.features.secureSolutions.title}
              description={t.home.features.secureSolutions.desc}
            />
            <FeatureCard 
              icon={<Globe className="text-green-600" size={24} />}
              title={t.home.features.globalStandards.title}
              description={t.home.features.globalStandards.desc}
            />
          </div>
        </div>
      </section>

      <Skills onNavigate={onNavigate} />

      <section className="py-24 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-50/50 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider mb-4 block">{t.home.aboutTitle}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            {t.home.aboutSubtitle}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-12 max-w-3xl mx-auto">
            {t.home.aboutDesc}
          </p>
          <div className="flex justify-center gap-12 md:gap-16 mb-12">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600">{t.home.stats.projectsNum}</div>
              <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">{t.home.stats.projects}</div>
            </div>
            <div className="w-px bg-slate-200 dark:bg-slate-700" />
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600">{t.home.stats.experienceNum}</div>
              <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">{t.home.stats.experience}</div>
            </div>
          </div>
          <button 
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-lg dark:shadow-slate-900/50 shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30 hover:-translate-y-0.5"
          >
            {t.services.getInTouch} <ArrowRight size={18} />
          </button>
        </div>
      </section>

      <Projects limit={6} />

      <section className="py-16 bg-slate-50 dark:bg-slate-800 text-center">
        <button 
          onClick={() => onNavigate('projects')}
          className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-semibold rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-900 hover:text-white transition-all"
        >
          {t.home.viewAllProjects} <ArrowRight size={18} />
        </button>
      </section>

      <section className="py-24 lg:py-32 bg-slate-900 dark:bg-black text-white dark:text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t.services.readyToStart}
          </h2>
          <p className="text-slate-400 dark:text-slate-500 text-lg mb-10 max-w-2xl mx-auto">
            {t.services.readyToStartDesc}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
            >
              <Clock size={18} />
              {t.hero.scheduleCall}
            </button>
            <button 
              onClick={() => onNavigate('projects')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors"
            >
              {t.hero.viewWork}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard: React.FC<{icon: React.ReactNode; title: string; description: string}> = ({icon, title, description}) => (
  <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg dark:shadow-slate-900/50 border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-shadow">
    <div className="w-12 h-12 bg-slate-50 dark:bg-slate-800 rounded-xl flex items-center justify-center mb-5">
      {icon}
    </div>
    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{title}</h3>
    <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">{description}</p>
  </div>
);

const StatCard: React.FC<{number: string; label: string}> = ({number, label}) => (
  <div>
    <div className="text-4xl font-bold text-blue-600">{number}</div>
    <div className="text-sm text-slate-600 dark:text-slate-300">{label}</div>
  </div>
);

export default Home;
