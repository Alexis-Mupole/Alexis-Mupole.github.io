declare module '*.json' {
  const value: {
    projects: Array<{
      id: string;
      title: { en: string; fr: string; sw: string };
      description: { en: string; fr: string; sw: string };
      image: string;
      tags: string[];
      link: string;
      liveLink: string | null;
      featured: boolean;
    }>;
  };
  export default value;
}

declare module '../../data/services.json' {
  const value: {
    services: Array<{
      id: string;
      icon: string;
      title: { en: string; fr: string; sw: string };
      description: { en: string; fr: string; sw: string };
      features: { en: string[]; fr: string[]; sw: string[] };
      color: string;
    }>;
    process: {
      en: Array<{ title: string; description: string }>;
      fr: Array<{ title: string; description: string }>;
      sw: Array<{ title: string; description: string }>;
    };
    whyChoose: {
      en: string[];
      fr: string[];
      sw: string[];
    };
  };
  export default value;
}
