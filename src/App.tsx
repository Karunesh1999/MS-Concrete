import { useState, useEffect } from 'react';
import { Navbar, Footer, MobileDrawer } from './components/layout/index.ts';
import { HomeScreen } from './pages/Home/index.ts';
import { ServicesScreen } from './pages/Services/index.ts';
import { AboutScreen } from './pages/About/index.ts';
import { PortfolioScreen } from './pages/Portfolio/index.ts';
import { CareersScreen } from './pages/Careers/index.ts';
import { FinancingScreen } from './pages/Financing/index.ts';
import { ContactScreen } from './pages/Contact/index.ts';
import {
  EstimateModal,
  DivisionInspectModal,
  FinancingModal,
} from './components/modals/index.ts';
import type { ConcreteDivision } from './types/concrete.ts';

export type AppPage = 'home' | 'services' | 'about' | 'portfolio' | 'careers' | 'financing' | 'contact';

export default function App() {
  const [activePage, setActivePage] = useState<AppPage>('home');
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEstimateModalOpen, setIsEstimateModalOpen] = useState(false);
  const [estimateModalType, setEstimateModalType] = useState('residential-driveway');
  const [inspectedDivision, setInspectedDivision] = useState<ConcreteDivision | null>(null);
  const [isFinancingModalOpen, setIsFinancingModalOpen] = useState(false);

  // Seamless navigation handler supporting both section scroll & dedicated pages
  const handleNavigate = (target: string) => {
    const pageMap: Record<string, AppPage> = {
      'home': 'home',
      'services': 'services',
      'services-matrix': 'home',
      'about': 'about',
      'portfolio': 'portfolio',
      'portfolio-gallery': 'home',
      'careers': 'careers',
      'careers-section': 'home',
      'financing': 'financing',
      'financing-section': 'home',
      'contact': 'contact',
      'estimate-form': 'home',
    };

    const targetPage = pageMap[target] || 'home';

    if (targetPage !== activePage) {
      setActivePage(targetPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // If target is a section on homepage
    if (targetPage === 'home') {
      setActiveSection(target);
      setTimeout(() => {
        const element = document.getElementById(target);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    }
  };

  const handleOpenEstimate = (projectType?: string) => {
    if (projectType) {
      setEstimateModalType(projectType);
    }
    setIsEstimateModalOpen(true);
  };

  const handleInspectDivision = (division: ConcreteDivision) => {
    setInspectedDivision(division);
  };

  const handleQuoteFromInspect = (division: ConcreteDivision) => {
    const typeMapping: Record<string, string> = {
      structural: 'foundation-structural',
      decorative: 'decorative-stamped',
      civil: 'civil-curb',
    };
    handleOpenEstimate(typeMapping[division.id] || 'residential-driveway');
  };

  // Scroll spy when on home page
  useEffect(() => {
    if (activePage !== 'home') return;

    const sections = ['home', 'services-matrix', 'portfolio-gallery', 'careers-section', 'financing-section', 'estimate-form'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activePage]);

  return (
    <div className="min-h-screen bg-surface font-sans text-on-surface flex flex-col antialiased selection:bg-primary selection:text-white">
      {/* Navigation */}
      <Navbar
        activeSection={activePage === 'home' ? activeSection : activePage}
        onNavigate={handleNavigate}
        onOpenEstimate={() => handleOpenEstimate()}
        onToggleMobileMenu={() => setIsMobileMenuOpen(prev => !prev)}
      />

      {/* Main Page Rendering */}
      <main className="w-full flex-grow pt-0">
        {activePage === 'home' && (
          <HomeScreen
            onOpenEstimate={handleOpenEstimate}
            onInspectDivision={handleInspectDivision}
            onOpenFinancing={() => setIsFinancingModalOpen(true)}
          />
        )}

        {activePage === 'services' && (
          <div className="pt-24">
            <ServicesScreen onOpenEstimate={handleOpenEstimate} />
          </div>
        )}

        {activePage === 'about' && (
          <div className="pt-24">
            <AboutScreen onOpenEstimate={() => handleOpenEstimate()} />
          </div>
        )}

        {activePage === 'portfolio' && (
          <div className="pt-24">
            <PortfolioScreen onOpenEstimate={handleOpenEstimate} />
          </div>
        )}

        {activePage === 'careers' && (
          <div className="pt-24">
            <CareersScreen />
          </div>
        )}

        {activePage === 'financing' && (
          <div className="pt-24">
            <FinancingScreen onOpenEstimate={() => handleOpenEstimate()} />
          </div>
        )}

        {activePage === 'contact' && (
          <div className="pt-24">
            <ContactScreen />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenEstimate={() => handleOpenEstimate()}
      />

      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onNavigate={handleNavigate}
        onOpenEstimate={() => handleOpenEstimate()}
      />

      {/* Modals */}
      <EstimateModal
        isOpen={isEstimateModalOpen}
        onClose={() => setIsEstimateModalOpen(false)}
        initialProjectType={estimateModalType}
      />

      <DivisionInspectModal
        division={inspectedDivision}
        onClose={() => setInspectedDivision(null)}
        onRequestQuoteForDivision={handleQuoteFromInspect}
      />

      <FinancingModal
        isOpen={isFinancingModalOpen}
        onClose={() => setIsFinancingModalOpen(false)}
        onOpenEstimate={() => handleOpenEstimate()}
      />
    </div>
  );
}
