import React from 'react';
import { Page } from '../App';
import { useTranslation } from '../src/context/LanguageContext';
import { 
  Code, Database, Settings, Wifi, Shield, FileSpreadsheet, 
  CheckCircle, ArrowRight, Building, Landmark
} from 'lucide-react';

interface SolutionsAfriquePageProps {
  onNavigate: (page: Page) => void;
}

const SolutionsAfriquePage: React.FC<SolutionsAfriquePageProps> = ({ onNavigate }) => {
  const { t } = useTranslation();

  const icons = [
    <Code size={28} />,
    <Database size={28} />,
    <FileSpreadsheet size={28} />,
    <Wifi size={28} />
  ];

  return (
    <div className="bg-white dark:bg-slate-900 min-h-screen">
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-4">{t.approach.subtitle}</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {t.approach.title}
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              {t.approach.difference.quote}
            </p>
          </div>
        </div>
      </section>

      {t.approach.sections.map((section: any, index: number) => (
        <section key={index} className={`py-20 lg:py-24 ${index % 2 === 0 ? 'bg-white dark:bg-slate-900' : 'bg-slate-50 dark:bg-slate-800'}`}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-4">
                <div className="sticky top-32">
                  <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center text-white mb-6">
                    {icons[index]}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                    {section.title}
                  </h2>
                  <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                    {section.intro}
                  </p>
                </div>
              </div>
              <div className="lg:col-span-8 space-y-6">
                {section.items.map((item: string, i: number) => (
                  <div key={i} className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg border border-slate-100 dark:border-slate-700">
                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center shrink-0 mt-1">
                        <CheckCircle className="text-green-600" size={14} />
                      </div>
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-20 lg:py-24 bg-gradient-to-br from-indigo-950 via-slate-900 to-violet-950 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-amber-200 to-white bg-clip-text text-transparent">
              {t.approach.difference.title}
            </h2>
            <p className="text-slate-400 dark:text-slate-500 text-lg max-w-2xl mx-auto">
              {t.approach.difference.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {t.approach.difference.items.map((item: string, i: number) => (
              <div key={i} className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-amber-500/30 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${i === 0 ? 'bg-blue-500/20 text-blue-400 group-hover:bg-blue-500/30' : 'bg-amber-500/20 text-amber-400 group-hover:bg-amber-500/30'}`}>
                    {i === 0 ? <Code size={22} /> : <Landmark size={22} />}
                  </div>
                  <span className="text-white font-medium leading-snug">{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            {t.services.readyToStart}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
            {t.services.readyToStartDesc}
          </p>
          <button 
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
          >
            {t.services.getInTouch} <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default SolutionsAfriquePage;
