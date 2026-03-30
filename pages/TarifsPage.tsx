import React from 'react';
import { Page } from '../App';
import { CheckCircle, ArrowRight, Clock, Shield, Zap, Star } from 'lucide-react';

interface TarifsPageProps {
  onNavigate: (page: Page) => void;
}

const TarifsPage: React.FC<TarifsPageProps> = ({ onNavigate }) => {
  const plans = [
    {
      name: "Starter",
      description: "Perfect for individuals and small projects",
      price: "Custom",
      features: [
        "Single page website",
        "Basic functionality",
        "Mobile responsive",
        "Contact form integration",
        "Social media links",
        "1 revision round"
      ],
      popular: false
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses",
      price: "Custom",
      features: [
        "Multi-page website",
        "Custom functionality",
        "CMS integration",
        "Basic SEO optimization",
        "Analytics setup",
        "3 revision rounds",
        "1 month support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      description: "Full-scale solutions for large organizations",
      price: "Custom",
      features: [
        "Complex web application",
        "Custom development",
        "API integration",
        "Advanced SEO",
        "E-commerce functionality",
        "Unlimited revisions",
        "6 months support",
        "Training session"
      ],
      popular: false
    }
  ];

  const inclusions = [
    { icon: <Clock size={20} />, text: "Fast turnaround times" },
    { icon: <Shield size={20} />, text: "Secure, reliable code" },
    { icon: <Zap size={20} />, text: "Performance optimized" },
    { icon: <Star size={20} />, text: "Post-launch support" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="pt-32 pb-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Pricing
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Transparent, flexible pricing tailored to your project needs. 
              Every project is unique - let's discuss your requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {plans.map((plan, i) => (
              <PricingCard key={i} {...plan} onNavigate={onNavigate} />
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6">What's Included</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {inclusions.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                      {item.icon}
                    </div>
                    <span className="text-slate-700 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 lg:p-10 text-white">
              <h3 className="text-xl font-bold mb-4">Free Consultation</h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                I offer a free 30-minute consultation to discuss your project requirements 
                and provide a detailed quote with no obligation.
              </p>
              <button 
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-3 px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors"
              >
                Book a Call <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            <FaqItem 
              question="How long does a typical project take?"
              answer="Project timelines vary based on complexity. A simple website typically takes 2-4 weeks, while complex web applications may take 2-3 months."
            />
            <FaqItem 
              question="Do you offer ongoing maintenance?"
              answer="Yes! I offer maintenance packages to keep your website secure, updated, and running smoothly after launch."
            />
            <FaqItem 
              question="What technologies do you use?"
              answer="I work with modern technologies including React, Next.js, TypeScript, Node.js, and cloud platforms like AWS and Azure."
            />
            <FaqItem 
              question="Can you work with my existing website?"
              answer="Absolutely! I can audit, optimize, and enhance existing websites or migrate them to modern platforms."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const PricingCard: React.FC<{
  name: string;
  description: string;
  price: string;
  features: string[];
  popular: boolean;
  onNavigate: (page: Page) => void;
}> = ({ name, description, price, features, popular, onNavigate }) => (
  <div className={`relative bg-white rounded-2xl p-8 shadow-lg border transition-all hover:shadow-xl ${
    popular ? 'border-blue-500 ring-2 ring-blue-500/20' : 'border-slate-100'
  }`}>
    {popular && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full">
        MOST POPULAR
      </div>
    )}
    <div className="mb-6">
      <h3 className="text-xl font-bold text-slate-900 mb-2">{name}</h3>
      <p className="text-sm text-slate-600">{description}</p>
    </div>
    <div className="mb-8">
      <span className="text-3xl font-bold text-slate-900">{price}</span>
    </div>
    <ul className="space-y-3 mb-8">
      {features.map((feature, i) => (
        <li key={i} className="flex items-center gap-3 text-sm text-slate-700">
          <CheckCircle size={18} className="text-green-500 shrink-0" />
          {feature}
        </li>
      ))}
    </ul>
    <button 
      onClick={() => onNavigate('contact')}
      className={`w-full py-3 rounded-xl font-semibold transition-colors ${
        popular 
          ? 'bg-blue-600 text-white hover:bg-blue-700' 
          : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
      }`}
    >
      Get Started
    </button>
  </div>
);

const FaqItem: React.FC<{question: string; answer: string}> = ({ question, answer }) => (
  <div className="bg-slate-50 rounded-xl p-6">
    <h4 className="font-bold text-slate-900 mb-2">{question}</h4>
    <p className="text-slate-600 text-sm leading-relaxed">{answer}</p>
  </div>
);

export default TarifsPage;
