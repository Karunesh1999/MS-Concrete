import React from 'react';
import { COMPANY_INFO } from '../../data/concreteData.ts';
import { MSCCLogo } from '../common/MSCCLogo.tsx';

interface FooterProps {
  onNavigate?: (target: string) => void;
  onOpenEstimate?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenEstimate }) => {
  return (
    <footer className="w-full bg-[#0a0d12] text-concrete-sand mt-10 border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 pt-16 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div
              onClick={() => onNavigate?.('home')}
              className="cursor-pointer inline-flex items-center self-start"
            >
              <MSCCLogo />
            </div>
            
            <p className="font-sans text-sm text-zinc-300 max-w-sm mt-2 leading-relaxed">
              Engineered durability and precision concrete construction for commercial foundations, structural slabs, and high-spec civil environments. Over 25 years of proven field reliability.
            </p>
            
            <div className="flex items-center gap-2 mt-4 font-mono text-xs text-[#ea580c]">
              <span className="w-2 h-2 bg-[#ea580c] rounded-full shadow-[0_0_6px_#ea580c]" />
              <span className="font-bold text-white">SYNCHRONY FINANCIAL VERIFIED CONTRACTOR</span>
            </div>
          </div>

          {/* Structural Divisions */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-white font-bold">
              Structural Divisions
            </span>
            <ul className="space-y-2 font-sans text-xs text-zinc-300 mt-1">
              <li
                onClick={() => onNavigate?.('services-matrix')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Commercial Poured Slabs
              </li>
              <li
                onClick={() => onNavigate?.('services-matrix')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Civil Structural Foundations
              </li>
              <li
                onClick={() => onNavigate?.('services-matrix')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Architectural Honed &amp; Stamped Finishes
              </li>
              <li
                onClick={() => onNavigate?.('services-matrix')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Heavy Industrial Grade Retaining Slabs
              </li>
              <li
                onClick={() => onNavigate?.('financing-section')}
                className="hover:text-[#ea580c] transition-colors cursor-pointer font-semibold text-zinc-200"
              >
                Synchrony Project Financing →
              </li>
            </ul>
          </div>

          {/* Operations & Dispatch */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-white font-bold">
              Operations &amp; Dispatch
            </span>
            <div className="font-sans text-xs text-zinc-300 space-y-2 mt-1">
              <p className="text-white font-medium">Headquarters:</p>
              <p>{COMPANY_INFO.hqAddress}</p>
              
              <p className="mt-3 text-white font-medium">Direct Dispatch:</p>
              <p>
                <a className="hover:text-[#ea580c] transition-colors font-bold text-white" href={`tel:${COMPANY_INFO.phoneRaw}`}>
                  {COMPANY_INFO.phone}
                </a>
              </p>
              <p>
                <a className="hover:text-[#ea580c] transition-colors text-zinc-300" href={`mailto:${COMPANY_INFO.bidsEmail}`}>
                  {COMPANY_INFO.bidsEmail}
                </a>
              </p>
            </div>
          </div>

          {/* Credentials */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-white font-bold">
              Credentials
            </span>
            <div className="bg-black/50 border border-white/10 p-4 space-y-2 font-mono text-xs text-concrete-sand rounded">
              <div className="text-[#ea580c] font-bold uppercase tracking-wider">California C-8</div>
              <div className="text-white font-semibold">{COMPANY_INFO.license}</div>
              <div className="text-zinc-400 pt-1">{COMPANY_INFO.bondedAmount}</div>
            </div>
            
            <div className="mt-3">
              <span className="font-mono text-xs text-zinc-400 uppercase">Field Hours:</span>
              <p className="font-sans text-xs text-white mt-0.5">{COMPANY_INFO.hours}</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 bg-black/40 border-t border-white/10 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-zinc-400 uppercase tracking-wider rounded">
          <div>
            © {new Date().getFullYear()} Morning Star Concrete Construction ({COMPANY_INFO.shortName}). All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <button onClick={onOpenEstimate} className="hover:text-white transition-colors cursor-pointer">
              Quick Bid
            </button>
            <span className="hover:text-white transition-colors cursor-pointer">Safety Compliance (OSHA)</span>
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
