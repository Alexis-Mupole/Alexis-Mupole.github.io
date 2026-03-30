import React from 'react';
import Projects from '../components/Projects';
import { Page } from '../App';
import { useTranslation } from '../src/context/LanguageContext';
import { ArrowRight, Star, Users, Globe } from 'lucide-react';

interface ProjectsPageProps {
  onNavigate: (page: Page) => void;
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate }) => {
  const { t } = useTranslation();

  const stats = [
    { icon: <Star size={24} />, number: "50+", label: t.projectsPage.stats.projects },
    { icon: <Users size={24} />, number: "30+", label: t.projectsPage.stats.clients },
    { icon: <Globe size={24} />, number: "10+", label: t.projectsPage.stats.countries },
  ];

  return (
    <div className="bg-white min-h-screen">
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {t.projects.title}
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              {t.projects.desc}
            </p>
            <div className="flex flex-wrap gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-blue-400">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">{stat.number}</div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Projects />

      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            {t.projectsPage.cta.title}
          </h2>
          <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
            {t.projectsPage.cta.desc}
          </p>
          <button 
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
          >
            {t.projectsPage.cta.button} <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
