import React from 'react';
import type { ConcreteDivision } from '../../types/concrete.ts';

interface DivisionInspectModalProps {
  division: ConcreteDivision | null;
  onClose: () => void;
  onRequestQuoteForDivision: (division: ConcreteDivision) => void;
}

export const DivisionInspectModal: React.FC<DivisionInspectModalProps> = ({
  division,
  onClose,
  onRequestQuoteForDivision,
}) => {
  if (!division) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-3xl bg-white text-stone-charcoal shadow-2xl rounded-xl overflow-hidden border border-stone-200 z-10 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 flex items-center justify-center bg-black/60 hover:bg-black text-white rounded-full transition-colors"
        >
          <span className="material-symbols-outlined text-lg">close</span>
        </button>

        <div className="relative h-72 sm:h-80 w-full bg-cover bg-center" style={{ backgroundImage: `url("${division.imageUrl}")` }}>
          <div className="absolute inset-0 bg-gradient-to-t from-stone-charcoal via-stone-charcoal/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="inline-block px-3 py-1 bg-black/80 border border-white/30 text-white font-mono text-[11px] font-extrabold uppercase rounded-full mb-2">
              {division.bayNumber}
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight drop-shadow-md">
              {division.title}
            </h3>
            <p className="font-mono text-xs text-[#ea580c] mt-1 font-black">
              Classification: {division.category} • California C-8 Certified
            </p>
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-stone-900 font-black mb-2">
              Engineering Scope &amp; Specifications
            </h4>
            <p className="font-sans text-sm sm:text-base text-stone-700 leading-relaxed font-medium">
              {division.description} Every installation is reinforced with laser-precision grading, seismic steel rebar placement, and tested aggregate mixes formulated for maximum load bearing and California seismic resistance.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-stone-900 font-black mb-2.5">
              Available Finishes &amp; Methodologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {division.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 bg-stone-100 text-stone-900 font-mono text-xs font-bold rounded-md border border-stone-300"
                >
                  ✓ {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="font-mono text-xs text-stone-700 font-semibold">
              <span className="text-[#ea580c] font-black">Standard turnaround:</span> 24hr bid review
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="px-5 py-2.5 border-2 border-stone-300 hover:bg-stone-100 text-stone-800 font-mono text-xs uppercase font-extrabold tracking-wider transition-colors cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  onRequestQuoteForDivision(division);
                }}
                className="px-6 py-2.5 bg-[#ea580c] hover:bg-[#c2410c] text-white font-mono text-xs uppercase font-black tracking-wider transition-all shadow-lg flex items-center gap-1.5 cursor-pointer hover:scale-105"
              >
                <span>Request Bid for {division.title}</span>
                <span className="material-symbols-outlined text-sm font-bold">north_east</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DivisionInspectModal;

