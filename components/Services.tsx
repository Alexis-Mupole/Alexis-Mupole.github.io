
import React from 'react';
import { ServiceItem } from '../types';

const companyServices: ServiceItem[] = [
  {
    title: "Infrastructure IT Basique",
    description: "Socle technologique solide pour vos opérations quotidiennes.",
    items: ["Réseaux locaux", "WiFi professionnel", "Sauvegardes automatisées", "Impression partagée"]
  },
  {
    title: "Cybersécurité Essentielle",
    description: "Protection contre les menaces modernes sans complexité inutile.",
    items: ["Protection antivirus", "Sécurisation emails", "Pare-feux basiques", "Formation du personnel"]
  },
  {
    title: "Solutions Bureautiques",
    description: "Maximisez la productivité de vos équipes.",
    items: ["Microsoft 365 / Office", "Templates sur mesure", "Automatisation Excel", "Facturation simplifiée"]
  },
  {
    title: "Gestion de Données",
    description: "Transformez vos données en outils de décision.",
    items: ["Bases de données clients", "Kobo Toolbox / Google Forms", "Suivi d'activités", "Rapports automatisés"]
  }
];

const individualServices: ServiceItem[] = [
  {
    title: "Support Technique",
    description: "Réparation et optimisation de vos équipements personnels.",
    items: ["Réparation PC/Smartphones", "Logiciels essentiels", "Récupération données", "Nettoyage système"]
  },
  {
    title: "Accompagnement Digital",
    description: "Devenez autonome dans l'univers numérique.",
    items: ["Premiers pas internet", "Services bancaires en ligne", "Outils de productivité (CV)", "Protection familiale"]
  }
];

const ServiceCard: React.FC<{ service: ServiceItem; index: number }> = ({ service, index }) => (
  <div className="brutal-card bg-white p-10 hover:bg-[var(--brutal-accent)] group transition-all duration-300 hover:-translate-y-2">
    <div className="flex justify-between items-start mb-8">
      <div className="w-16 h-16 brutal-border bg-black flex items-center justify-center text-[var(--brutal-accent)] group-hover:bg-white group-hover:text-black transition-colors">
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
      <span className="text-4xl font-black text-black/5 group-hover:text-black/10 transition-colors">
        {(index + 1).toString().padStart(2, '0')}
      </span>
    </div>
    <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter font-display">{service.title}</h3>
    <p className="text-lg text-slate-600 mb-8 font-bold leading-tight group-hover:text-black transition-colors">{service.description}</p>
    <ul className="space-y-4">
      {service.items.map((item, idx) => (
        <li key={idx} className="flex items-center text-xs font-black text-slate-500 uppercase tracking-widest group-hover:text-black transition-colors">
          <span className="w-2 h-2 bg-black mr-4 rounded-full"></span>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-6xl font-black mb-6 uppercase italic tracking-tighter font-display">Mes Compétences & Services</h2>
          <p className="text-slate-600 max-w-2xl mx-auto font-bold text-xl leading-snug">
            Des solutions conçues pour répondre aux défis réels des entreprises et des citoyens en Afrique.
          </p>
        </div>

        <div className="mb-20">
          <div className="flex items-center mb-12">
            <span className="h-0.5 bg-black flex-grow"></span>
            <h3 className="px-6 text-2xl font-black text-black uppercase italic tracking-widest font-display">Pour les Entreprises & ONG</h3>
            <span className="h-0.5 bg-black flex-grow"></span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {companyServices.map((s, idx) => (
              <ServiceCard key={idx} service={s} index={idx} />
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center mb-12">
            <span className="h-0.5 bg-black flex-grow"></span>
            <h3 className="px-6 text-2xl font-black text-black uppercase italic tracking-widest font-display">Pour les Particuliers</h3>
            <span className="h-0.5 bg-black flex-grow"></span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {individualServices.map((s, idx) => (
              <ServiceCard key={idx} service={s} index={idx + companyServices.length} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
