
import React from 'react';
import { PricingPlan } from '../types';
import { Page } from '../App';

interface PricingProps {
  onNavigate: (page: Page) => void;
}

const plans: PricingPlan[] = [
  {
    name: "Service Particulier",
    target: "Individus & Étudiants",
    features: [
      "Diagnostic technique gratuit",
      "Réparation logicielle PC/Tel",
      "Aide aux outils numériques",
      "Support par message (WhatsApp)"
    ],
    note: "Tarif horaire très accessible"
  },
  {
    name: "Support Commerce",
    target: "Boutiques & TPE",
    features: [
      "Maintenance réseau WiFi",
      "Suivi de stock (Excel)",
      "Facturation simple",
      "Visites de contrôle mensuelles"
    ],
    note: "Idéal pour commerçants locaux"
  },
  {
    name: "Projet Sur-Mesure",
    target: "Besoins Spécifiques",
    features: [
      "Analyse de projet détaillée",
      "Développement de site vitrine",
      "Automatisation de gestion",
      "Formation du personnel"
    ],
    note: "Devis selon la complexité"
  }
];

const Pricing: React.FC<PricingProps> = ({ onNavigate }) => {
  return (
    <section id="pricing" className="py-24 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-black mb-6 uppercase italic tracking-tighter font-display">Tarification Transparente</h2>
          <p className="text-slate-600 font-bold text-lg uppercase tracking-widest">Des options flexibles adaptées à la réalité économique locale.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {plans.map((plan, idx) => (
            <div key={idx} className={`brutal-card bg-white p-10 flex flex-col relative ${idx === 1 ? 'md:scale-105 z-10 border-[var(--brutal-accent)]' : ''}`}>
              {idx === 1 && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 brutal-card bg-black text-[var(--brutal-accent)] text-[10px] uppercase font-black tracking-[0.2em]">Conseillé</span>
              )}
              <h3 className="text-2xl font-black mb-2 uppercase tracking-tight font-display">{plan.name}</h3>
              <p className="text-[var(--brutal-accent)] font-black text-xs mb-8 uppercase tracking-widest bg-black inline-block self-start px-3 py-1">{plan.target}</p>
              
              <ul className="space-y-5 mb-10 flex-grow">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start text-base text-slate-700 font-bold">
                    <svg className="w-6 h-6 mr-4 text-black flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <p className="text-xs text-slate-400 mb-8 italic font-bold uppercase tracking-tight">{plan.note}</p>
                <button
                  onClick={() => onNavigate('contact')}
                  className={`block w-full text-center py-4 brutal-card font-black uppercase tracking-widest text-sm transition-all ${
                    idx === 1 
                      ? 'bg-[var(--brutal-accent)] text-black hover:bg-black hover:text-white' 
                      : 'bg-white text-black hover:bg-black hover:text-white'
                  }`}
                >
                  Me contacter
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center text-sm font-black text-slate-400 uppercase tracking-widest">
          * Première consultation de 30 minutes gratuite.
        </div>
      </div>
    </section>
  );
};

export default Pricing;
