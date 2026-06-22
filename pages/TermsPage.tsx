import React from 'react';
import { Page } from '../App';
import { useTranslation } from '../src/context/LanguageContext';
import { ArrowLeft, FileText, Mail } from 'lucide-react';

interface TermsPageProps {
  onNavigate: (page: Page) => void;
}

const TermsPage: React.FC<TermsPageProps> = ({ onNavigate }) => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-32 pb-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <button
            onClick={() => onNavigate('home')}
            className="inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors mb-8 text-sm font-medium"
          >
            <ArrowLeft size={16} />
            {t.nav.home}
          </button>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
              <FileText className="text-amber-600" size={24} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Terms of Service</h1>
          </div>
          <p className="text-slate-500 text-sm">Last updated: June 2025</p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              These Terms of Service ("Terms") govern your use of the services provided by Alexis Mupole Uwizeye ("I", "me", or "my"). By accessing my website or engaging my services, you agree to be bound by these Terms.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">1. Services</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              I provide digital engineering, web development, IT consulting, training, and related technical services as described on my website. Each engagement is governed by a separate agreement outlining specific deliverables, timelines, and fees.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">2. Intellectual Property</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              <strong>My Work:</strong> All code, designs, documentation, and deliverables I create remain my intellectual property until full payment is received. Upon full payment, clients receive full ownership of the delivered work product.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              <strong>Your Content:</strong> You retain all rights to any content, materials, or data you provide. You grant me a limited license to use such content solely for the purpose of delivering the agreed services.
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              <strong>Website Content:</strong> All content on this website, including text, images, logos, and code, is my property unless otherwise noted and may not be reproduced without permission.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">3. Client Responsibilities</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              As a client, you agree to:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
              <li>Provide accurate and complete information necessary for project execution.</li>
              <li>Respond to communications and provide feedback within reasonable timeframes.</li>
              <li>Make timely payments as agreed in the project contract.</li>
              <li>Not use my services for any unlawful or unauthorized purpose.</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">4. Payments & Fees</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Fees are agreed upon before work begins and are outlined in the project proposal or contract. Payment terms are specified in each agreement. Late payments may result in service suspension until all outstanding amounts are settled.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">5. Confidentiality</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              I treat all client information as confidential and will not disclose it to third parties without your consent, except as required by law. This obligation survives the termination of our agreement.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">6. Limitation of Liability</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              My services are provided "as is" without warranty of any kind. I am not liable for any indirect, incidental, or consequential damages arising from the use of my services or website. My total liability is limited to the amount paid for the specific service giving rise to the claim.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">7. Third-Party Tools & Services</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              My work may involve third-party platforms, hosting services, or tools (e.g., Netlify, Vercel, GitHub). I am not responsible for the uptime, security, or terms of these third-party services. Clients are encouraged to review their terms independently.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">8. Termination</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Either party may terminate a project agreement with written notice. In the event of termination, the client shall pay for all work completed up to the termination date. Upon termination, you must cease using any of my materials not yet paid for in full.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">9. Changes to Terms</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              I reserve the right to update these Terms at any time. Changes will be posted on this page with an updated date. Continued use of my services after changes constitutes acceptance of the new Terms.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">10. Governing Law</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              These Terms are governed by the laws of the Democratic Republic of the Congo. Any disputes shall be resolved through good-faith negotiations or, if necessary, in the competent courts of Kinshasa, DR Congo.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">11. Contact</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              For questions about these Terms, please contact me:
            </p>
            <div className="bg-slate-50 rounded-xl p-6 mb-6">
              <div className="flex items-center gap-3 mb-3">
                <Mail className="text-amber-600" size={18} />
                <a href="mailto:alexismupole@gmail.com" className="text-amber-600 hover:underline font-medium">alexismupole@gmail.com</a>
              </div>
              <p className="text-slate-600 text-sm">
                Alexis Mupole Uwizeye<br />
                Kinshasa, DR Congo
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-200">
            <button
              onClick={() => onNavigate('home')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
            >
              <ArrowLeft size={16} />
              {t.nav.home}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;
