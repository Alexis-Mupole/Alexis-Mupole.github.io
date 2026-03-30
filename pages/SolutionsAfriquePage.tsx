import React from 'react';
import { Page } from '../App';
import { useTranslation } from '../src/context/LanguageContext';
import { 
  Code, Database, Settings, Wifi, Shield, FileSpreadsheet, 
  CheckCircle, ArrowRight, Sparkles, Building, Landmark
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
    <div className="bg-white min-h-screen">
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
        <section key={index} className={`py-20 lg:py-24 ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-4">
                <div className="sticky top-32">
                  <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center text-white mb-6">
                    {icons[index]}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                    {section.title}
                  </h2>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    {section.intro}
                  </p>
                </div>
              </div>
              <div className="lg:col-span-8 space-y-6">
                {section.items.map((item: string, i: number) => (
                  <div key={i} className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center shrink-0 mt-1">
                        <CheckCircle className="text-green-600" size={14} />
                      </div>
                      <p className="text-slate-700 leading-relaxed">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-20 lg:py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center text-amber-400 mb-6">
                <Sparkles size={28} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t.approach.difference.title}
              </h2>
              <p className="text-blue-200 text-lg mb-8">
                {t.approach.difference.intro}
              </p>
              <div className="space-y-4">
                {t.approach.difference.items.map((item: string, i: number) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center">
                      {i === 0 ? <Code size={20} className="text-amber-400" /> : <Landmark size={20} className="text-amber-400" />}
                    </div>
                    <span className="text-white font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-amber-500 rounded-3xl blur-2xl opacity-30" />
              <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <div className="flex items-center gap-4 mb-6">
                  <Building size={24} className="text-amber-400" />
                  <span className="text-sm font-medium text-blue-200 uppercase tracking-wider">Background</span>
                </div>
                <blockquote className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-6">
                  "{t.approach.difference.quote}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold">
                    AM
                  </div>
                  <div>
                    <p className="font-bold text-white">Alexis Mupole</p>
                    <p className="text-sm text-blue-200">Digital Engineering Consultant</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            {t.services.readyToStart}
          </h2>
          <p className="text-slate-600 text-lg mb-10 max-w-2xl mx-auto">
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
