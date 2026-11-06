import React from 'react';
import { MSCCLogo } from '../common/MSCCLogo.tsx';
import { COMPANY_INFO } from '../../data/concreteData.ts';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenEstimate: () => void;
  onToggleMobileMenu: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenEstimate,
  onToggleMobileMenu,
}) => {
  const navLinks = [
    { label: 'Home', target: 'home' },
    { label: 'About', target: 'about' },
    { label: 'Services', target: 'services-matrix' },
    { label: 'Portfolio', target: 'portfolio-gallery' },
    { label: 'Careers', target: 'careers-section' },
    { label: 'Financing', target: 'financing-section' },
    { label: 'Contact', target: 'estimate-form' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0b0f14]/85 backdrop-blur-sm border-b border-white/15 transition-all">
      {/* Micro Top Strip: crisp contrast & clear text */}
      <div className="border-b border-white/10 bg-black/60 text-zinc-300">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 h-8 flex items-center justify-between font-mono text-[11px] tracking-widest uppercase">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-surveyor-lime rounded-full shadow-sm" />
              <span className="text-white font-semibold">Lic. #984210</span>
            </span>
            <span className="text-white/30">/</span>
            <span className="hidden sm:inline-block text-zinc-200 font-medium">Menifee, CA &amp; Inland Empire</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              className="text-white hover:text-surveyor-lime transition-colors flex items-center gap-1.5 font-bold"
              href={`tel:${COMPANY_INFO.phoneRaw}`}
            >
              <span className="text-surveyor-lime font-mono">TEL:</span> {COMPANY_INFO.phone}
            </a>
            <span className="hidden md:inline-block text-white/30">/</span>
            <span className="hidden md:inline-block text-zinc-200 font-medium">Commercial &amp; Civil Division</span>
          </div>
        </div>
      </div>

      {/* Main Architectural Navbar */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 h-16 lg:h-20 flex items-center justify-between gap-6">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('home');
          }}
          className="flex items-center focus:outline-none"
        >
          <MSCCLogo />
        </a>

        {/* Navigation Links: 100% readable text opacity */}
        <nav className="hidden xl:flex items-center justify-center font-mono text-[12px] tracking-[0.2em] uppercase font-bold text-white gap-9">
          {navLinks.map((link) => {
            const isActive = activeSection === link.target;
            return (
              <button
                key={link.target}
                onClick={() => onNavigate(link.target)}
                className={`py-1.5 transition-all cursor-pointer relative ${
                  isActive
                    ? 'text-surveyor-lime border-b-2 border-surveyor-lime font-extrabold'
                    : 'text-zinc-100 hover:text-white hover:border-b-2 hover:border-white/50'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right Actions: High contrast CTA button + mobile menu */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenEstimate}
            className="inline-flex items-center justify-center gap-2 px-5 lg:px-7 py-3 bg-primary hover:bg-primary-container text-white font-mono text-xs uppercase font-extrabold tracking-[0.18em] transition-all shadow-lg cursor-pointer border border-white/20 hover:scale-[1.02]"
          >
            <span>Request Estimate</span>
            <span className="material-symbols-outlined text-sm font-bold leading-none">north_east</span>
          </button>

          <button
            aria-label="Open navigation menu"
            onClick={onToggleMobileMenu}
            className="w-11 h-11 flex xl:hidden items-center justify-center border border-white/30 bg-black/40 hover:bg-black/60 text-white transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[22px]">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
