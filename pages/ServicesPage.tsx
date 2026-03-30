import React from 'react';
import { useTranslation } from '../src/context/LanguageContext';
import { 
  Code, Database, Shield, Settings, Wifi, FileText,
  ArrowRight, CheckCircle, Zap 
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: 'home' | 'services' | 'solutions' | 'projects' | 'pricing' | 'contact') => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const { t, lang } = useTranslation();

  const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
    blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200" },
    sky: { bg: "bg-sky-50", text: "text-sky-600", border: "border-sky-200" },
    indigo: { bg: "bg-indigo-50", text: "text-indigo-600", border: "border-indigo-200" },
    green: { bg: "bg-green-50", text: "text-green-600", border: "border-green-200" },
    amber: { bg: "bg-amber-50", text: "text-amber-600", border: "border-amber-200" },
    rose: { bg: "bg-rose-50", text: "text-rose-600", border: "border-rose-200" },
  };

  const servicesKeys = ['web', 'data', 'installation', 'network', 'security', 'office'] as const;

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="pt-32 pb-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              {t.services.title}
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              {t.services.desc}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesKeys.map((key, index) => (
              <ServiceCard 
                key={key}
                icon={<ServiceIcon index={index} />}
                title={t.services.items[key].title}
                description={t.services.items[key].desc}
                features={t.services.items[key].features}
                colors={colorClasses[['blue', 'amber', 'sky', 'indigo', 'green', 'rose'][index]]}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-blue-600 text-sm font-semibold uppercase tracking-wider mb-3">
                {t.services.process.title}
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                {t.services.process.subtitle}
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                {t.services.process.desc}
              </p>
              <div className="space-y-4">
                {['step1', 'step2', 'step3', 'step4'].map((step, i) => (
                  <ProcessStep key={step} number={`0${i + 1}`} title={t.method[step as keyof typeof t.method].t} description={t.method[step as keyof typeof t.method].d} />
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-amber-100 rounded-3xl" />
              <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
                <h4 className="text-xl font-bold text-slate-900 mb-6">
                  {t.services.whyChooseTitle}
                </h4>
                <ul className="space-y-4">
                  {Object.values(t.services.qualifications).map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="text-green-500 shrink-0" size={20} />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t.services.readyToStart}
          </h2>
          <p className="text-slate-400 text-lg mb-8">
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

const ServiceIcon: React.FC<{ index: number }> = ({ index }) => {
  const icons = [Code, Database, Settings, Wifi, Shield, FileText];
  const Icon = icons[index];
  return <Icon size={32} />;
};

const ServiceCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  colors: { bg: string; text: string; border: string };
}> = ({ icon, title, description, features, colors }) => (
  <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
    <div className={`w-16 h-16 ${colors.bg} rounded-xl flex items-center justify-center mb-6 ${colors.text}`}>
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed mb-6">{description}</p>
    <ul className="space-y-2">
      {features.map((feature, i) => (
        <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
          <Zap size={14} className={colors.text} />
          {feature}
        </li>
      ))}
    </ul>
  </div>
);

const ProcessStep: React.FC<{number: string; title: string; description: string}> = ({ number, title, description }) => (
  <div className="flex gap-4">
    <div className="shrink-0 w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold">
      {number}
    </div>
    <div>
      <h4 className="font-bold text-slate-900">{title}</h4>
      <p className="text-sm text-slate-600">{description}</p>
    </div>
  </div>
);

export default ServicesPage;
