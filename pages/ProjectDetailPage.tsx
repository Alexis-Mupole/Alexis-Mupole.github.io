import React from 'react';
import { Page } from '../App';
import { useTranslation } from '../src/context/LanguageContext';
import { ArrowLeft, ArrowRight, ExternalLink, CheckCircle, Github, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectDetail {
  id: string;
  title: { en: string; fr: string; sw: string };
  description: { en: string; fr: string; sw: string };
  features: { en: string[]; fr: string[]; sw: string[] };
  image: string;
  tags: string[];
  link: string | null;
  liveLink: string | null;
  featured: boolean;
}

interface ProjectDetailPageProps {
  project: ProjectDetail;
  onNavigate: (page: Page) => void;
}

const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ project, onNavigate }) => {
  const { lang, t } = useTranslation();
  const title = project.title[lang] || project.title.en;
  const description = project.description[lang] || project.description.en;
  const features = project.features[lang] || project.features.en;

  return (
    <div className="bg-white dark:bg-slate-900 min-h-screen">
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <button
              onClick={() => onNavigate('projects')}
              className="inline-flex items-center gap-2 text-slate-300 hover:text-white mb-10 transition-colors font-medium"
            >
              <ArrowLeft size={18} />
              {t.projects.backToProjects}
            </button>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-white/10 text-blue-300 text-xs font-semibold rounded-full border border-white/10"
                >
                  {tag}
                </span>
              ))}
              {project.featured && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-amber-500/10 text-amber-400 text-xs font-semibold rounded-full border border-amber-500/20">
                  <Code2 size={12} />
                  Featured
                </span>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {title}
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mb-10">
              {description}
            </p>

            <div className="flex flex-wrap gap-4">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30 hover:-translate-y-0.5"
                >
                  <ExternalLink size={18} />
                  {t.projects.visitLive}
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors"
                >
                  <Github size={18} />
                  Code
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.img
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            src={project.image}
            alt={title}
            className="w-full rounded-3xl shadow-2xl dark:shadow-slate-900/50 border border-slate-200 dark:border-slate-700"
          />
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider mb-3 block">
              {t.projects.overviewTitle}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              {title}
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-8">
              {description}
            </p>
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
              >
                {t.projects.visitLive}
                <ExternalLink size={16} />
              </a>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-3"
          >
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-8">
              {t.projects.featuresTitle}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-white dark:bg-slate-900 p-5 rounded-xl shadow-lg dark:shadow-slate-900/50 border border-slate-100 dark:border-slate-700"
                >
                  <CheckCircle className="text-green-500 shrink-0 mt-0.5" size={20} />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-200 leading-relaxed">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 dark:bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t.projectsPage.cta.title}
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
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

export default ProjectDetailPage;
