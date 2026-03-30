import React from 'react';
import { useTranslation } from '../src/context/LanguageContext';
import { ArrowUpRight, Github, ExternalLink, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface Project {
  id: string;
  title: { en: string; fr: string; sw: string };
  description: { en: string; fr: string; sw: string };
  image: string;
  tags: string[];
  link: string;
  liveLink: string | null;
  featured: boolean;
}

interface ProjectsProps {
  limit?: number;
}

const Projects: React.FC<ProjectsProps> = ({ limit }) => {
  const { lang, getProjects, t } = useTranslation();
  const allProjects = getProjects();
  const projects = limit ? allProjects.slice(0, limit) : allProjects;

  return (
    <section className="py-20 lg:py-28 bg-slate-50" id="projects">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider mb-3 block">
            {t.projects.portfolio}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            {t.projects.recentProjects}
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl">
            {t.projects.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project: Project, index: number) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const { lang } = useTranslation();
  const title = project.title[lang] || project.title.en;
  const description = project.description[lang] || project.description.en;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0">
          {project.link && (
            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 bg-white text-slate-900 rounded-lg text-sm font-medium hover:bg-slate-100 transition-colors"
            >
              <Github size={16} />
              Code
            </a>
          )}
          {project.liveLink && (
            <a 
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              <ExternalLink size={16} />
              Live
            </a>
          )}
        </div>
      </div>

      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.slice(0, 3).map((tag: string) => (
            <span 
              key={tag}
              className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        
        <p className="text-slate-600 text-sm leading-relaxed line-clamp-2">
          {description}
        </p>

        <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs text-slate-400 font-medium">
            {project.featured && (
              <span className="inline-flex items-center gap-1 text-amber-600">
                <Code2 size={12} />
                Featured
              </span>
            )}
          </span>
          <a 
            href={project.link || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
          >
            View Project
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
