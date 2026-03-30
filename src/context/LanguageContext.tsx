import { createContext, useContext, useState, ReactNode } from 'react';
import { Language, translations } from '../../translations';
import projectsData from '../../data/projects.json';
import servicesData from '../../data/services.json';

interface LanguageContextType {
  lang: Language;
  setLang: (l: Language) => void;
  t: typeof translations.fr;
  getProjectTitle: (id: string) => string;
  getProjectDescription: (id: string) => string;
  getProjects: () => typeof projectsData.projects;
  getFeaturedProjects: () => typeof projectsData.projects;
  getServices: () => typeof servicesData.services;
  getServiceTitle: (id: string) => string;
  getServiceDescription: (id: string) => string;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>('en');
  const t = translations[lang];

  const getProjectTitle = (id: string): string => {
    const project = projectsData.projects.find(p => p.id === id);
    if (!project) return id;
    return project.title[lang] || project.title.en;
  };

  const getProjectDescription = (id: string): string => {
    const project = projectsData.projects.find(p => p.id === id);
    if (!project) return '';
    return project.description[lang] || project.description.en;
  };

  const getProjects = () => projectsData.projects;

  const getFeaturedProjects = () => projectsData.projects.filter(p => p.featured);

  const getServices = () => servicesData.services;

  const getServiceTitle = (id: string): string => {
    const service = servicesData.services.find(s => s.id === id);
    if (!service) return id;
    return service.title[lang] || service.title.en;
  };

  const getServiceDescription = (id: string): string => {
    const service = servicesData.services.find(s => s.id === id);
    if (!service) return '';
    return service.description[lang] || service.description.en;
  };

  return (
    <LanguageContext.Provider value={{ 
      lang, 
      setLang, 
      t, 
      getProjectTitle,
      getProjectDescription,
      getProjects,
      getFeaturedProjects,
      getServices,
      getServiceTitle,
      getServiceDescription
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useTranslation must be used within LanguageProvider');
  return context;
};
