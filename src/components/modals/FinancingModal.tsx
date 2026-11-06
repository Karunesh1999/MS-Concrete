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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-white text-stone-charcoal shadow-2xl rounded-xl overflow-hidden border border-stone-200 z-10 p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-full transition-colors"
        >
          <span className="material-symbols-outlined text-lg">close</span>
        </button>

        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 bg-surveyor-lime rounded-full" />
          <span className="font-mono text-xs uppercase tracking-wider text-secondary font-bold">
            Synchrony Financial Verified Partner
          </span>
        </div>

        <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-stone-charcoal mb-4">
          Flexible Concrete Project Financing
        </h3>

        <p className="font-sans text-sm text-stone-700 leading-relaxed mb-6">
          Through our partnership with <strong>Synchrony Bank</strong>, Morning Star Concrete Construction offers low-friction, transparent financing plans for eligible residential and light commercial projects.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="bg-surface-container-high p-4 rounded-lg text-center">
            <span className="material-symbols-outlined text-primary text-2xl mb-1">speed</span>
            <div className="font-display text-sm font-bold uppercase text-stone-charcoal">Fast Decisions</div>
            <div className="font-sans text-xs text-secondary mt-1">Instant digital pre-qualification</div>
          </div>
          <div className="bg-surface-container-high p-4 rounded-lg text-center">
            <span className="material-symbols-outlined text-primary text-2xl mb-1">payments</span>
            <div className="font-display text-sm font-bold uppercase text-stone-charcoal">Predictable Terms</div>
            <div className="font-sans text-xs text-secondary mt-1">Convenient monthly payment options</div>
          </div>
          <div className="bg-surface-container-high p-4 rounded-lg text-center">
            <span className="material-symbols-outlined text-primary text-2xl mb-1">verified_user</span>
            <div className="font-display text-sm font-bold uppercase text-stone-charcoal">No Hidden Fees</div>
            <div className="font-sans text-xs text-secondary mt-1">Clear APR and repayment structure</div>
          </div>
        </div>

        <div className="bg-stone-charcoal text-white p-5 rounded-lg mb-6">
          <h4 className="font-mono text-xs uppercase text-surveyor-lime font-bold tracking-wider mb-2">
            Eligible Project Types
          </h4>
          <ul className="grid grid-cols-2 gap-2 font-sans text-xs text-concrete-sand">
            <li>• Decorative Patios &amp; Courtyards</li>
            <li>• New Broom Finish Driveways</li>
            <li>• Pool Deck Resurfacing &amp; Pours</li>
            <li>• Retaining Walls &amp; Approach Slabs</li>
          </ul>
        </div>

        <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="font-mono text-xs text-primary font-bold hover:underline flex items-center gap-1"
          >
            <span className="material-symbols-outlined text-sm">call</span>
            <span>Call Financing Desk: {COMPANY_INFO.phone}</span>
          </a>
          <button
            onClick={() => {
              onClose();
              onOpenEstimate();
            }}
            className="w-full sm:w-auto px-6 py-3 bg-primary text-white hover:bg-stone-charcoal font-mono text-xs uppercase font-bold tracking-wider transition-colors shadow-md flex items-center justify-center gap-2"
          >
            <span>Request Financing Estimate</span>
            <span className="material-symbols-outlined text-sm">north_east</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinancingModal;

