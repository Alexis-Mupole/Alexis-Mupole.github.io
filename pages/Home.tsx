import React from 'react';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import { Page } from '../App';
import { useTranslation } from '../src/context/LanguageContext';
import { ArrowRight, CheckCircle, Zap, Shield, Globe, Clock, Sparkles } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const { t, lang } = useTranslation();

  return (
    <div className="bg-white">
      <Hero onNavigate={onNavigate} />
      
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider mb-3 block">{t.home.whyMe.title}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {t.home.whyChooseSubtitle}
            </h2>
            <p className="text-slate-600 text-lg">
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

      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider mb-3 block">{t.home.aboutTitle}</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                {t.home.aboutSubtitle}
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                {t.home.aboutDesc}
              </p>
              <div className="flex gap-8 mb-8">
                <StatCard number={t.home.stats.projectsNum} label={t.home.stats.projects} />
                <StatCard number={t.home.stats.experienceNum} label={t.home.stats.experience} />
              </div>
              <button 
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
              >
                {t.services.getInTouch} <ArrowRight size={18} />
              </button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-amber-50 rounded-3xl" />
              <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
                <div className="flex items-center gap-2 mb-6">
                  <Sparkles className="text-blue-600" size={20} />
                  <h4 className="text-lg font-bold text-slate-900">{t.home.whatIOfferTitle}</h4>
                </div>
                <ul className="space-y-4">
                  {t.home.whatIOffer.map((item: string, i: number) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                        <CheckCircle className="text-green-600" size={14} />
                      </div>
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Projects limit={6} />

      <section className="py-16 bg-slate-50 text-center">
        <button 
          onClick={() => onNavigate('projects')}
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl border border-slate-200 hover:bg-slate-900 hover:text-white transition-all"
        >
          {t.home.viewAllProjects} <ArrowRight size={18} />
        </button>
      </section>

      <section className="py-24 lg:py-32 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t.services.readyToStart}
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
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
  <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
    <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-5">
      {icon}
    </div>
    <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
    <p className="text-slate-600 leading-relaxed text-sm">{description}</p>
  </div>
);

const StatCard: React.FC<{number: string; label: string}> = ({number, label}) => (
  <div>
    <div className="text-4xl font-bold text-blue-600">{number}</div>
    <div className="text-sm text-slate-600">{label}</div>
  </div>
);

export default Home;
