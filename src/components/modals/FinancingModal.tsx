import React from 'react';
import { COMPANY_INFO } from '../../data/concreteData.ts';

interface FinancingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenEstimate: () => void;
}

export const FinancingModal: React.FC<FinancingModalProps> = ({
  isOpen,
  onClose,
  onOpenEstimate,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/85 backdrop-blur-md" onClick={onClose} />

      {/* Modal Dialog: Solid Dark Architectural System */}
      <div className="relative w-full max-w-2xl bg-[#0c1017] text-white shadow-2xl rounded-2xl p-6 sm:p-8 border-2 border-white/20 z-10 max-h-[92vh] overflow-y-auto scrollbar-none [&::-webkit-scrollbar]:hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer hover:scale-105 border border-white/20"
        >
          <span className="material-symbols-outlined text-lg font-bold">close</span>
        </button>

        {/* Priority Partner Strip */}
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-4 bg-[#ea580c] rounded-sm" />
          <span className="font-mono text-xs uppercase tracking-wider text-[#ea580c] font-black">
            Synchrony Financial Verified Partner
          </span>
        </div>

        <h3 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-3">
          Flexible Concrete Project Financing
        </h3>

        <p className="font-sans text-xs sm:text-sm text-zinc-200 leading-relaxed mb-6 font-normal">
          Through our partnership with <strong className="text-white font-extrabold underline decoration-[#ea580c]">Synchrony Bank</strong>, Morning Star Concrete Construction offers low-friction, transparent financing plans for eligible residential and commercial projects.
        </p>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-6">
          <div className="bg-white/5 border border-white/15 p-4 rounded-xl text-center">
            <span className="material-symbols-outlined text-[#ea580c] text-2xl mb-1 font-bold">speed</span>
            <div className="font-display text-xs sm:text-sm font-black uppercase text-white">Fast Decisions</div>
            <div className="font-sans text-[11px] text-zinc-300 font-medium mt-1">Instant digital pre-qualification</div>
          </div>
          <div className="bg-white/5 border border-white/15 p-4 rounded-xl text-center">
            <span className="material-symbols-outlined text-[#ea580c] text-2xl mb-1 font-bold">payments</span>
            <div className="font-display text-xs sm:text-sm font-black uppercase text-white">Predictable Terms</div>
            <div className="font-sans text-[11px] text-zinc-300 font-medium mt-1">Convenient monthly payments</div>
          </div>
          <div className="bg-white/5 border border-white/15 p-4 rounded-xl text-center">
            <span className="material-symbols-outlined text-[#ea580c] text-2xl mb-1 font-bold">verified_user</span>
            <div className="font-display text-xs sm:text-sm font-black uppercase text-white">No Hidden Fees</div>
            <div className="font-sans text-[11px] text-zinc-300 font-medium mt-1">Clear APR &amp; terms</div>
          </div>
        </div>

        {/* Eligible Projects */}
        <div className="bg-black/60 border border-white/20 text-white p-5 rounded-xl mb-6">
          <h4 className="font-mono text-xs uppercase text-[#ea580c] font-black tracking-wider mb-2.5">
            Eligible Project Types
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-xs text-zinc-200 font-bold">
            <li className="flex items-center gap-2">
              <span className="text-[#ea580c]">✓</span> Decorative Patios &amp; Courtyards
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#ea580c]">✓</span> New Broom Finish Driveways
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#ea580c]">✓</span> Pool Deck Resurfacing &amp; Pours
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#ea580c]">✓</span> Retaining Walls &amp; Approach Slabs
            </li>
          </ul>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="font-mono text-xs text-zinc-200 font-bold hover:text-[#ea580c] transition-colors flex items-center gap-1.5"
          >
            <span className="material-symbols-outlined text-sm text-[#ea580c]">call</span>
            <span>Direct Desk: {COMPANY_INFO.phone}</span>
          </a>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-5 py-3 border-2 border-white/40 hover:border-white hover:bg-white hover:text-black text-white font-mono text-xs uppercase font-extrabold tracking-wider transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenEstimate();
              }}
              className="w-full sm:w-auto px-6 py-3 bg-[#ea580c] hover:bg-[#c2410c] text-white font-mono text-xs uppercase font-black tracking-wider transition-all shadow-xl flex items-center justify-center gap-2 cursor-pointer hover:scale-105"
            >
              <span>Request Estimate</span>
              <span className="material-symbols-outlined text-sm font-bold">north_east</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancingModal;
