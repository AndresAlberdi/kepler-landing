import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import KeplerAbout from './components/KeplerAbout';
import VirtualStemFeature from './components/VirtualStemFeature';
import ImpactAndTech from './components/ImpactAndTech';
import StemLibraries from './components/StemLibraries';
import RagAssistant from './components/RagAssistant';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import VirtualStemDetailsPage from './components/VirtualStemDetailsPage';

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [view, setView] = useState('home'); // 'home' | 'virtual-stem-details'
  const [isRagOpen, setIsRagOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (
        hash.includes('virtual-stem-detalles') || 
        hash.includes('virtual-stem-details') || 
        hash.includes('virtual-stem-pagina')
      ) {
        setView('virtual-stem-details');
      }
    };
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleNavigateToVirtualStem = () => {
    setView('virtual-stem-details');
    window.location.hash = 'virtual-stem-detalles';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setView('home');
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenRag = () => {
    setIsRagOpen(true);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      {view === 'virtual-stem-details' ? (
        <VirtualStemDetailsPage onBackToHome={handleBackToHome} />
      ) : (
        <>
          <Header theme={theme} toggleTheme={toggleTheme} onNavigateToVirtualStem={handleNavigateToVirtualStem} />
          <main style={{ flex: 1 }}>
            <Hero onOpenRag={handleOpenRag} />
            <KeplerAbout onNavigateToVirtualStem={handleNavigateToVirtualStem} />
            <VirtualStemFeature onNavigateToVirtualStem={handleNavigateToVirtualStem} />
            <ImpactAndTech />
            <StemLibraries />
            <ContactForm />
          </main>
          <Footer onNavigateToVirtualStem={handleNavigateToVirtualStem} />
        </>
      )}

      {/* Floating Modern AI Help Assistant (Always Available) */}
      <RagAssistant isOpen={isRagOpen} setIsOpen={setIsRagOpen} />
    </div>
  );
}
