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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog: Image on top, solid dark architectural theme, no scrollbar */}
      <div className="relative w-full max-w-2xl bg-[#0c1017] text-white shadow-2xl rounded-2xl overflow-hidden border-2 border-white/20 z-10 max-h-[94vh] overflow-y-auto scrollbar-none [&::-webkit-scrollbar]:hidden">
        {/* Close Button on Image */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 z-30 w-9 h-9 flex items-center justify-center rounded-full bg-black/75 hover:bg-black text-white border border-white/30 transition-all cursor-pointer hover:scale-105 shadow-lg"
        >
          <span className="material-symbols-outlined text-lg font-bold">close</span>
        </button>

        {/* Top Image Banner (Widescreen 4K Architectural Photography) */}
        <div
          className="relative h-48 sm:h-56 w-full bg-cover bg-center"
          style={{ backgroundImage: `url("${division.imageUrl}")` }}
        >
          {/* Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c1017] via-[#0c1017]/40 to-black/30" />

          {/* Top Bay Badge */}
          <div className="absolute top-4 left-4 z-10">
            <span className="inline-block px-3.5 py-1 bg-black/85 border border-white/30 text-white font-mono text-[11px] font-black uppercase tracking-wider rounded-full shadow-lg">
              {division.bayNumber}
            </span>
          </div>

          {/* Bottom Title on Image */}
          <div className="absolute bottom-4 left-5 right-5 z-10">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-3.5 bg-[#ea580c] rounded-sm" />
              <span className="font-mono text-xs uppercase tracking-wider text-[#ea580c] font-black">
                {division.category} • {division.subtitle}
              </span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-white drop-shadow-md">
              {division.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-7 space-y-4 bg-[#0c1017]">
          {/* Engineering Scope */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-zinc-400 font-black mb-1.5">
              Engineering Scope &amp; Specifications
            </h4>
            <p className="font-sans text-xs sm:text-sm text-zinc-200 leading-relaxed font-normal">
              {division.description} Every installation is reinforced with laser-precision grading, dual-mat seismic steel rebar placement, and tested aggregate mixes formulated for maximum California load-bearing standards.
            </p>
          </div>

          {/* Available Finishes & Methodologies */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-zinc-400 font-black mb-2">
              Available Finishes &amp; Methodologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {division.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 bg-white/10 text-white font-mono text-xs font-bold rounded-lg border border-white/20 flex items-center gap-1.5 shadow-sm"
                >
                  <span className="text-[#ea580c] font-black">✓</span>
                  <span>{tag}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Quick Stats Strip */}
          <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/10">
            <div className="bg-white/5 border border-white/15 px-3.5 py-2.5 rounded-lg flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase text-zinc-400 font-bold">Standard Turnaround:</span>
              <span className="font-mono text-xs font-black text-white">24hr Bid Review</span>
            </div>
            <div className="bg-white/5 border border-white/15 px-3.5 py-2.5 rounded-lg flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase text-zinc-400 font-bold">State Licensing:</span>
              <span className="font-mono text-xs font-black text-[#ea580c]">C-8 Lic. #984210</span>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2.5 border-2 border-white/40 hover:border-white hover:bg-white hover:text-black text-white font-mono text-xs uppercase font-extrabold tracking-wider transition-colors cursor-pointer text-center"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onRequestQuoteForDivision(division);
              }}
              className="w-full sm:w-auto px-6 py-3 bg-[#ea580c] hover:bg-[#c2410c] text-white font-mono text-xs uppercase font-black tracking-wider transition-all shadow-xl flex items-center justify-center gap-2 cursor-pointer hover:scale-105 border-2 border-transparent"
            >
              <span>Request Bid for {division.title}</span>
              <span className="material-symbols-outlined text-sm font-bold">north_east</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DivisionInspectModal;
