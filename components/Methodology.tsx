
import React from 'react';

const Methodology: React.FC = () => {
  const steps = [
    { title: "Discussion initiale", desc: "Étude gratuite de votre besoin informatique ou bureautique." },
    { title: "Planification", desc: "Proposition d'une solution sur-mesure (Excel, Web, Logiciel)." },
    { title: "Mise en œuvre", desc: "Travail rigoureux et tests de bon fonctionnement." },
    { title: "Passation", desc: "Je vous forme à l'utilisation pour une autonomie totale." }
  ];

  return (
    <section id="methodology" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-4xl sm:text-5xl font-black mb-6 uppercase italic tracking-tighter font-display">Mon Processus</h2>
          <p className="text-slate-600 font-bold text-lg uppercase tracking-widest">Efficace, transparent et pédagogique.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {steps.map((step, idx) => (
            <div key={idx} className="relative text-center group">
              <div className="w-24 h-24 brutal-card bg-white text-black flex items-center justify-center mx-auto mb-10 text-3xl font-black group-hover:bg-[var(--brutal-accent)] transition-all duration-300 group-hover:-translate-y-2 group-hover:rotate-6 font-display">
                0{idx + 1}
              </div>
              <h3 className="text-xl font-black mb-4 uppercase tracking-tight font-display">{step.title}</h3>
              <p className="text-base text-slate-500 font-bold leading-relaxed px-4">{step.desc}</p>
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[calc(50%+4rem)] w-[calc(100%-8rem)] h-1 bg-black"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
