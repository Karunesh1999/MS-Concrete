import React from 'react';
import { MSCCLogo } from '../common/MSCCLogo.tsx';
import { COMPANY_INFO } from '../../data/concreteData.ts';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
  onOpenEstimate: () => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onOpenEstimate,
}) => {
  if (!isOpen) return null;

  const links = [
    { label: 'Home', target: 'home' },
    { label: 'About MSCC', target: 'about' },
    { label: 'Services Matrix', target: 'services-matrix' },
    { label: 'Project Portfolio', target: 'portfolio-gallery' },
    { label: 'Financing Options', target: 'financing-section' },
    { label: 'Employment & Careers', target: 'careers-section' },
    { label: 'Contact & Estimating', target: 'estimate-form' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex xl:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="relative ml-auto w-full max-w-xs sm:max-w-sm bg-stone-charcoal h-full p-6 text-white shadow-2xl flex flex-col justify-between z-10 border-l border-white/10">
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <MSCCLogo showSubtitle={false} />
            <button
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center border border-white/20 text-white hover:bg-white/10 transition-colors"
            >
              <span className="material-symbols-outlined text-lg">close</span>
            </button>
          </div>

          <nav className="mt-8 flex flex-col gap-5">
            {links.map((link) => (
              <button
                key={link.target}
                onClick={() => {
                  onNavigate(link.target);
                  onClose();
                }}
                className="text-left font-mono text-xs uppercase tracking-[0.2em] font-bold text-white hover:text-surveyor-lime transition-colors py-2 border-b border-white/10"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="space-y-4 pt-6 border-t border-white/10">
          <button
            onClick={() => {
              onClose();
              onOpenEstimate();
            }}
            className="w-full py-3.5 bg-primary-container text-white font-mono text-xs uppercase font-bold tracking-wider hover:bg-white hover:text-stone-charcoal transition-colors flex items-center justify-center gap-2 shadow-lg"
          >
            <span>Request Free Estimate</span>
            <span className="material-symbols-outlined text-sm">north_east</span>
          </button>

          <div className="font-mono text-[10px] text-concrete-aggregate space-y-1">
            <p>Direct: {COMPANY_INFO.phone}</p>
            <p>Menifee, CA • C-8 Lic. #984210</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileDrawer;

