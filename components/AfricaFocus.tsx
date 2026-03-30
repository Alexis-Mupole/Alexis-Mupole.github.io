
import React from 'react';

const AfricaFocus: React.FC = () => {
  return (
    <section id="africa" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="inline-block px-6 py-2 brutal-card bg-[var(--brutal-accent)] text-black text-xs font-black uppercase tracking-widest mb-8">
              Solutions Spécifiques Afrique
            </span>
            <h2 className="text-4xl lg:text-6xl font-black mb-8 uppercase italic tracking-tighter font-display">Adapté aux Contraintes Locales</h2>
            <p className="text-slate-400 text-xl mb-12 font-bold leading-relaxed">
              En Afrique, le numérique doit être robuste et flexible. Mes solutions intègrent les spécificités
              du terrain pour garantir un fonctionnement optimal même en conditions dégradées.
            </p>
            
            <ul className="space-y-10">
              <li className="flex items-start">
                <div className="brutal-card bg-slate-900 p-4 mr-6 shrink-0">
                  <svg className="w-8 h-8 text-[var(--brutal-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-black text-white uppercase tracking-tight font-display mb-2">Connectivité Limitée</h4>
                  <p className="text-base text-slate-500 font-bold">Sites web ultra-légers et applications fonctionnant hors-ligne avec synchronisation intelligente.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="brutal-card bg-slate-900 p-4 mr-6 shrink-0">
                  <svg className="w-8 h-8 text-[var(--brutal-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-black text-white uppercase tracking-tight font-display mb-2">Paiements Mobiles</h4>
                  <p className="text-base text-slate-500 font-bold">Intégration directe de M-Pesa et Orange Money pour vos facturations et ventes en ligne.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="brutal-card bg-slate-900 p-4 mr-6 shrink-0">
                  <svg className="w-8 h-8 text-[var(--brutal-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-black text-white uppercase tracking-tight font-display mb-2">Énergie & Matériel</h4>
                  <p className="text-base text-slate-500 font-bold">Sauvegardes automatiques en cas de coupure et optimisation logicielle pour les PC plus anciens.</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="relative">
            <div className="brutal-card bg-white p-10 relative overflow-hidden text-black">
               <div className="grid grid-cols-2 gap-6 relative z-10">
                  <div className="brutal-card bg-[#f8f8f8] p-6 text-center">
                    <span className="block text-4xl font-black mb-2 font-display">99%</span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Compatibilité Mobile</span>
                  </div>
                  <div className="brutal-card bg-[var(--brutal-accent)] p-6 text-center">
                    <span className="block text-4xl font-black mb-2 font-display">OFFLINE</span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-black">Mode Offline</span>
                  </div>
                  <div className="brutal-card bg-black p-6 text-center text-white">
                    <span className="block text-4xl font-black mb-2 font-display">OPEN</span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Coût Réduit</span>
                  </div>
                  <div className="brutal-card bg-[#f8f8f8] p-6 text-center">
                    <span className="block text-4xl font-black mb-2 font-display">LOCAL</span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Support 24/7</span>
                  </div>
               </div>
            </div>
            <div className="mt-10 brutal-card bg-slate-900 p-8 italic text-[var(--brutal-accent)] text-center font-black text-lg uppercase tracking-tight">
              "En Afrique, on ne cherche pas le gadget, on cherche l'outil qui fonctionne."
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AfricaFocus;
