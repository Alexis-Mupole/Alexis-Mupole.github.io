import React from 'react';
import { Page } from '../App';
import { useTranslation } from '../src/context/LanguageContext';
import { ArrowLeft, Shield, Mail } from 'lucide-react';

interface PrivacyPageProps {
  onNavigate: (page: Page) => void;
}

const PrivacyPage: React.FC<PrivacyPageProps> = ({ onNavigate }) => {
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
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Shield className="text-blue-600" size={24} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Privacy Policy</h1>
          </div>
          <p className="text-slate-500 text-sm">Last updated: June 2025</p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              This Privacy Policy explains how Alexis Mupole Uwizeye ("I", "me", or "my") collects, uses, and protects your personal information when you visit my website or use my services.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">1. Information I Collect</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              I may collect the following types of information:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
              <li><strong>Personal Information:</strong> Your name, email address, phone number, and any other details you provide through my contact form or direct communication.</li>
              <li><strong>Project Information:</strong> Details about your project requirements, technical specifications, and business needs shared during consultations.</li>
              <li><strong>Usage Data:</strong> Information about how you interact with my website, including pages visited, time spent, and referral sources (collected via analytics).</li>
              <li><strong>Technical Data:</strong> IP address, browser type, device information, and operating system for website optimization and security.</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">2. How I Use Your Information</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Your information is used solely for the following purposes:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
              <li>To respond to your inquiries and provide the services you request.</li>
              <li>To communicate about project updates, proposals, and technical consultations.</li>
              <li>To improve my website, services, and user experience.</li>
              <li>To comply with legal obligations and protect my rights.</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">3. Data Protection & Security</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              I implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. This includes secure hosting, encrypted communications (SSL/TLS), and restricted data access.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">4. Data Sharing & Third Parties</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              I do not sell, trade, or rent your personal information to third parties. I may share data only with:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
              <li><strong>Service Providers:</strong> Trusted third parties (e.g., Netlify for hosting, WhatsApp for communication) who assist in operating my website and services, under strict confidentiality agreements.</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect against legal liability.</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">5. Cookies</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              My website may use essential cookies for functionality and analytics cookies to understand usage patterns. You can control cookie preferences through your browser settings. No personally identifiable information is stored in cookies without your explicit consent.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">6. Your Rights</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
              <li>Access the personal data I hold about you.</li>
              <li>Request correction or deletion of your data.</li>
              <li>Withdraw consent for data processing at any time.</li>
              <li>Request a copy of your data in a portable format.</li>
              <li>Lodge a complaint with a data protection authority.</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">7. Contact</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              If you have any questions about this Privacy Policy or wish to exercise your rights, please contact me:
            </p>
            <div className="bg-slate-50 rounded-xl p-6 mb-6">
              <div className="flex items-center gap-3 mb-3">
                <Mail className="text-blue-600" size={18} />
                <a href="mailto:alexismupole@gmail.com" className="text-blue-600 hover:underline font-medium">alexismupole@gmail.com</a>
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

export default PrivacyPage;
