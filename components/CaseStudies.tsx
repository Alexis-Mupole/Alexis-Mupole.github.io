
import React from 'react';
import { CaseStudy } from '../types';

const cases: CaseStudy[] = [
  {
    client: "Commerce Local",
    title: "Vente & Stock Digital",
    description: "Modernisation d'un point de vente pour un suivi précis sur Excel.",
    features: ["Catalogue Excel", "Suivi de stock mobile", "Modèle de facture", "Localisation Maps"]
  },
  {
    client: "Étudiant & Particulier",
    title: "Support & Optimisation PC",
    description: "Nettoyage complet et sécurisation de postes de travail.",
    features: ["Nettoyage système", "Antivirus pro", "Récupération Data", "Formation Cloud"]
  },
  {
    client: "Petit Bureau",
    title: "Installation Réseau WiFi",
    description: "Configuration d'un réseau stable pour 5 postes partagés.",
    features: ["WiFi double bande", "Partage d'imprimante", "Filtrage web", "Sauvegarde NAS"]
  }
];

const CaseStudies: React.FC = () => {
  return (
    <section id="cases" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
          <div className="mb-8 md:mb-0">
            <h2 className="text-4xl sm:text-5xl font-black mb-6 uppercase italic tracking-tighter font-display">Exemples d'Interventions</h2>
            <p className="text-slate-600 max-w-lg font-bold text-lg leading-snug">Aperçu de ce que je réalise régulièrement pour mes clients locaux.</p>
          </div>
          <div className="flex gap-3">
             <div className="px-6 py-3 brutal-card text-xs font-black text-black uppercase tracking-widest bg-[var(--brutal-accent)]">RDC</div>
             <div className="px-6 py-3 brutal-card text-xs font-black text-black uppercase tracking-widest bg-white">Ouganda</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {cases.map((cs, idx) => (
            <div key={idx} className="group brutal-card bg-white hover:bg-black transition-colors">
              <div className="p-10">
                <span className="text-[var(--brutal-accent)] text-[10px] font-black uppercase tracking-[0.3em] mb-4 block group-hover:text-white transition-colors">{cs.client}</span>
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight group-hover:text-white transition-colors font-display">{cs.title}</h3>
                <p className="text-slate-500 text-base mb-8 leading-relaxed font-bold group-hover:text-slate-400 transition-colors">{cs.description}</p>
                <div className="flex flex-wrap gap-3">
                  {cs.features.map((f, fIdx) => (
                    <span key={fIdx} className="bg-[#f8f8f8] px-3 py-1.5 brutal-card text-[10px] font-black text-slate-500 uppercase tracking-widest group-hover:bg-slate-800 group-hover:text-slate-300 transition-colors">{f}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
