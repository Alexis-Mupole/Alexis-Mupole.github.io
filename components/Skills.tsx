import React from 'react';
import { useTranslation } from '../src/context/LanguageContext';
import { Code, Database, Palette, Wrench, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Page } from '../App';

interface SkillsProps {
  onNavigate: (page: Page) => void;
}

const fallbackIcon = (name: string, color: string) => {
  const initial = name.replace('Adobe ', '').charAt(0);
  return (
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg ${color}`}>
      {initial}
    </div>
  );
};

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Code,
    bgColor: 'from-blue-500 to-blue-600',
    lightBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    borderColor: 'border-blue-200',
    items: [
      { name: 'HTML', icon: 'devicon-html5-plain colored' },
      { name: 'CSS', icon: 'devicon-css3-plain colored' },
      { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
      { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
      { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-original colored' },
      { name: 'React', icon: 'devicon-react-original colored' },
    ]
  },
  {
    title: 'Backend Development',
    icon: Database,
    bgColor: 'from-emerald-500 to-emerald-600',
    lightBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    borderColor: 'border-emerald-200',
    items: [
      { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
      { name: 'Express.js', icon: 'devicon-express-original colored' },
      { name: 'Next.js', icon: 'devicon-nextjs-original colored' },
      { name: 'Django', icon: 'devicon-django-plain colored' },
      { name: 'Flask', icon: 'devicon-flask-original colored' },
      { name: 'PHP', icon: 'devicon-php-plain colored' },
      { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
      { name: 'SQLite', icon: 'devicon-sqlite-plain colored' },
      { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
      { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
      { name: 'Supabase', icon: 'devicon-supabase-plain colored' },
      { name: 'Neon', icon: '' },
    ]
  },
  {
    title: 'UI/UX Design',
    icon: Palette,
    bgColor: 'from-purple-500 to-purple-600',
    lightBg: 'bg-purple-50',
    iconColor: 'text-purple-600',
    borderColor: 'border-purple-200',
    items: [
      { name: 'Figma', icon: 'devicon-figma-plain colored' },
      { name: 'Adobe Photoshop', icon: 'devicon-photoshop-plain colored' },
      { name: 'Adobe Illustrator', icon: 'devicon-illustrator-plain colored' },
      { name: 'Adobe Express', icon: '' },
    ]
  },
  {
    title: 'Tools & Technologies',
    icon: Wrench,
    bgColor: 'from-amber-500 to-amber-600',
    lightBg: 'bg-amber-50',
    iconColor: 'text-amber-600',
    borderColor: 'border-amber-200',
    items: [
      { name: 'GitHub', icon: 'devicon-github-original colored' },
      { name: 'Git', icon: 'devicon-git-plain colored' },
      { name: 'GitLab', icon: 'devicon-gitlab-plain colored' },
      { name: 'Vercel', icon: '' },
      { name: 'Netlify', icon: '' },
      { name: 'Docker', icon: 'devicon-docker-plain colored' },
    ]
  }
];

const customIcons: Record<string, {bg: string, path: string}> = {
  'Neon': { bg: 'bg-emerald-500', path: 'M10 6L6 18h4l4-12h-4z' },
  'Adobe Express': { bg: 'bg-purple-500', path: 'M12 2L2 7v10l10 5 10-5V7l-10-5z' },
  'Vercel': { bg: 'bg-slate-900', path: 'M12 3L3 21h18L12 3z' },
  'Netlify': { bg: 'bg-teal-500', path: 'M12 2L2 12l10 10 10-10L12 2z' },
};

const Skills: React.FC<SkillsProps> = ({ onNavigate }) => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", damping: 20, stiffness: 100 }
    }
  };

  return (
    <section className="py-24 lg:py-32 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider mb-3 block">
            {t.home.stack}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            {t.home.stackDesc}
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-10"
        >
          {skillCategories.map((category) => {
            const IconComp = category.icon;
            return (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.bgColor} flex items-center justify-center shadow-lg`}>
                    <IconComp size={22} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{category.title}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{category.items.length} technologies</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-4">
                  {category.items.map((tech) => (
                    <div
                      key={tech.name}
                      className={`group flex flex-col items-center gap-2 p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:${category.borderColor} hover:bg-white dark:hover:bg-slate-800 transition-all cursor-default`}
                    >
                      {tech.icon ? (
                        <i className={`${tech.icon} text-3xl md:text-4xl transition-transform group-hover:scale-110`} />
                      ) : (
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg ${customIcons[tech.name]?.bg || 'bg-slate-500'}`}>
                          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                            <path d={customIcons[tech.name]?.path || 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z'} />
                          </svg>
                        </div>
                      )}
                      <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 text-center leading-tight">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-slate-600 dark:text-slate-300 mb-6 text-lg">
            Vous avez un projet en tête ? Discutons de la façon dont je peux vous aider.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30 hover:-translate-y-0.5"
          >
            Contact Me
            <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
