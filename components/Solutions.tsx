import React from 'react';
import { useTranslation } from '../src/context/LanguageContext';
import { Page } from '../App';
import {
  Code, Database, Settings, Wifi, Shield, FileText, ArrowRight, Zap
} from 'lucide-react';
import { motion } from 'framer-motion';

interface SolutionsProps {
  onNavigate: (page: Page) => void;
}

const colorClasses: Record<string, { bg: string; text: string }> = {
  blue: { bg: 'bg-blue-50 dark:bg-blue-500/10', text: 'text-blue-600' },
  amber: { bg: 'bg-amber-50 dark:bg-amber-500/10', text: 'text-amber-600' },
  sky: { bg: 'bg-sky-50 dark:bg-sky-500/10', text: 'text-sky-600' },
  indigo: { bg: 'bg-indigo-50 dark:bg-indigo-500/10', text: 'text-indigo-600' },
  green: { bg: 'bg-green-50 dark:bg-green-500/10', text: 'text-green-600' },
  rose: { bg: 'bg-rose-50 dark:bg-rose-500/10', text: 'text-rose-600' },
};

const serviceMeta = [
  { key: 'web', icon: Code, color: 'blue' },
  { key: 'data', icon: Database, color: 'amber' },
  { key: 'installation', icon: Settings, color: 'sky' },
  { key: 'network', icon: Wifi, color: 'indigo' },
  { key: 'security', icon: Shield, color: 'green' },
  { key: 'office', icon: FileText, color: 'rose' },
] as const;

const Solutions: React.FC<SolutionsProps> = ({ onNavigate }) => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { y: 24, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", damping: 20, stiffness: 100 }
    }
  };

  return (
    <section className="py-24 lg:py-32 bg-slate-50 dark:bg-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider mb-3 block">
            {t.home.whatIOfferTitle}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {t.approach.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-lg">
            {t.services.desc}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {serviceMeta.map(({ key, icon: Icon, color }) => {
            const colors = colorClasses[color];
            const service = t.services.items[key];
            return (
              <motion.div
                key={key}
                variants={itemVariants}
                onClick={() => onNavigate('services')}
                className="group bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg dark:shadow-slate-900/50 border border-slate-100 dark:border-slate-700 hover:shadow-xl dark:hover:shadow-slate-900/70 transition-all hover:-translate-y-1 cursor-pointer"
              >
                <div className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center mb-6 ${colors.text} transition-transform group-hover:scale-110`}>
                  <Icon size={26} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm mb-5">
                  {service.desc}
                </p>
                <ul className="space-y-2">
                  {service.features.slice(0, 3).map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                      <Zap size={12} className={colors.text} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <button
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30 hover:-translate-y-0.5"
          >
            {t.hero.ctaSecondary}
            <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Solutions;
