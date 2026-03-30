
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl sm:text-6xl font-black mb-8 italic text-[var(--brutal-accent)] uppercase tracking-tighter font-display">Prêt pour votre transformation digitale ?</h2>
            <p className="text-slate-400 text-xl mb-12 font-bold leading-relaxed">
              Chaque projet commence par une conversation. Parlons de vos besoins réels et trouvons ensemble
              les solutions les plus adaptées.
            </p>
            
            <div className="space-y-10">
              <div className="flex items-center group">
                <div className="w-20 h-20 brutal-card bg-slate-900 flex items-center justify-center mr-8 group-hover:bg-[var(--brutal-accent)] transition-all duration-300 group-hover:-rotate-6">
                  <svg className="w-10 h-10 text-[var(--brutal-accent)] group-hover:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-1">Email direct</h4>
                  <a href="mailto:alexismupole@gmail.com" className="text-3xl font-black hover:text-[var(--brutal-accent)] transition-colors font-display">alexismupole@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="w-20 h-20 brutal-card bg-slate-900 flex items-center justify-center mr-8 group-hover:bg-[var(--brutal-accent)] transition-all duration-300 group-hover:rotate-6">
                  <svg className="w-10 h-10 text-[var(--brutal-accent)] group-hover:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-1">WhatsApp / Tel</h4>
                  <a href="tel:+243997306308" className="text-3xl font-black hover:text-[var(--brutal-accent)] transition-colors font-display">+243 997 306 308</a>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="w-16 h-16 brutal-card bg-slate-900 flex items-center justify-center mr-8 group-hover:bg-blue-500 transition-colors">
                  <svg className="w-8 h-8 text-blue-500 group-hover:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-1">Zones d'intervention</h4>
                  <p className="text-2xl font-black font-display">RDC, Ouganda & Remote</p>
                </div>
              </div>
            </div>
          </div>

          <div className="brutal-card bg-white p-12 text-black">
            <h3 className="text-3xl font-black mb-10 uppercase italic tracking-tighter font-display">Envoyez-moi un message</h3>
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Votre Nom</label>
                  <input type="text" className="w-full bg-[#f8f8f8] border-2 border-black px-6 py-4 focus:outline-none focus:bg-[var(--brutal-accent)] transition-colors font-bold" placeholder="Ex: Jean Mukendi" />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Votre Email</label>
                  <input type="email" className="w-full bg-[#f8f8f8] border-2 border-black px-6 py-4 focus:outline-none focus:bg-[var(--brutal-accent)] transition-colors font-bold" placeholder="Ex: jean@mukendi.com" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Sujet de votre demande</label>
                <select className="w-full bg-[#f8f8f8] border-2 border-black px-6 py-4 focus:outline-none focus:bg-[var(--brutal-accent)] transition-colors font-bold appearance-none">
                  <option>Diagnostic Infrastructure IT</option>
                  <option>Développement Web / App</option>
                  <option>Support / Réparation</option>
                  <option>Formation</option>
                  <option>Autre</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Message</label>
                <textarea rows={4} className="w-full bg-[#f8f8f8] border-2 border-black px-6 py-4 focus:outline-none focus:bg-[var(--brutal-accent)] transition-colors font-bold" placeholder="Décrivez votre projet ou votre besoin..."></textarea>
              </div>
              <button type="submit" className="w-full bg-black text-white font-black py-5 brutal-card hover:bg-[var(--brutal-accent)] hover:text-black transition-all uppercase tracking-widest text-sm">
                Lancer la discussion
              </button>
              <p className="text-center text-[10px] font-black text-slate-400 uppercase tracking-widest">Réponse garantie sous 24h.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
