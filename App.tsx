
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import SolutionsAfriquePage from './pages/SolutionsAfriquePage';
import TarifsPage from './pages/TarifsPage';
import ContactPage from './pages/ContactPage';
import ProjectsPage from './pages/ProjectsPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import { LanguageProvider, useTranslation } from './src/context/LanguageContext';
import { ThemeProvider } from './src/context/ThemeContext';
import WhatsAppChat from './components/WhatsAppChat';

class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-white p-4 text-center">
          <div>
            <h1 className="text-2xl font-black mb-4 uppercase tracking-tighter">Something went wrong</h1>
            <p className="text-slate-500 mb-6 font-medium">Please try refreshing the page.</p>
            <button 
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-black text-white font-bold uppercase tracking-widest text-[10px] rounded-full"
            >
              Refresh
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export type Page = 'home' | 'services' | 'solutions' | 'projects' | 'pricing' | 'contact' | 'privacy' | 'terms';

interface Route {
  page: Page;
  projectId: string | null;
}

const parseHash = (): Route => {
  const hash = window.location.hash.replace('#', '');
  if (hash.startsWith('project/')) {
    return { page: 'projects', projectId: hash.slice('project/'.length) };
  }
  const valid: Page[] = ['home', 'services', 'solutions', 'projects', 'pricing', 'contact', 'privacy', 'terms'];
  return valid.includes(hash as Page) ? { page: hash as Page, projectId: null } : { page: 'home', projectId: null };
};

const AppContent: React.FC = () => {
  const [route, setRoute] = useState<Route>(parseHash);
  const { getProjects } = useTranslation();

  const navigate = (page: Page) => {
    setRoute({ page, projectId: null });
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const onHashChange = () => {
      setRoute(parseHash());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const renderPage = () => {
    if (route.projectId) {
      const project = getProjects().find((p) => p.id === route.projectId);
      if (project) {
        return <ProjectDetailPage project={project} onNavigate={navigate} />;
      }
    }
    switch (route.page) {
      case 'home':
        return <Home onNavigate={navigate} />;
      case 'services':
        return <ServicesPage onNavigate={navigate} />;
      case 'solutions':
        return <SolutionsAfriquePage onNavigate={navigate} />;
      case 'projects':
        return <ProjectsPage onNavigate={navigate} />;
      case 'pricing':
        return <TarifsPage onNavigate={navigate} />;
      case 'contact':
        return <ContactPage />;
      case 'privacy':
        return <PrivacyPage onNavigate={navigate} />;
      case 'terms':
        return <TermsPage onNavigate={navigate} />;
      default:
        return <Home onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-900 overflow-x-hidden">
      <Navbar currentPage={route.page} onNavigate={navigate} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer onNavigate={navigate} />
      <WhatsAppChat />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <ThemeProvider>
          <AppContent />
        </ThemeProvider>
      </LanguageProvider>
    </ErrorBoundary>
  );
};

export default App;
