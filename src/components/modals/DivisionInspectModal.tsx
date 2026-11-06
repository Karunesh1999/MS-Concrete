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

      {/* Modal Dialog: Solid Dark Architectural System Matching EstimateModal */}
      <div className="relative w-full max-w-4xl bg-[#0c1017] text-white shadow-2xl rounded-2xl overflow-hidden border-2 border-white/20 z-10 max-h-[92vh] overflow-y-auto md:overflow-hidden scrollbar-none [&::-webkit-scrollbar]:hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 z-30 w-9 h-9 flex items-center justify-center rounded-full bg-black/70 hover:bg-white/20 text-white border border-white/20 transition-all cursor-pointer hover:scale-105"
        >
          <span className="material-symbols-outlined text-lg font-bold">close</span>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* Left Column: Ultra 4K Division Photo with Architectural Overlays */}
          <div className="md:col-span-5 relative min-h-[220px] sm:min-h-[260px] md:min-h-full">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
              style={{ backgroundImage: `url("${division.imageUrl}")` }}
            />
            {/* Scrim Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c1017] via-black/40 to-black/25 md:bg-gradient-to-r md:from-transparent md:to-[#0c1017]/80" />

            {/* Badges on Image */}
            <div className="relative z-10 p-5 sm:p-6 flex flex-col justify-between h-full">
              <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 bg-black/85 border border-white/30 rounded-full shadow-lg">
                <span className="font-mono text-[11px] text-white font-black tracking-wider uppercase">
                  {division.bayNumber}
                </span>
              </div>

              <div className="space-y-2 mt-auto pt-16 md:pt-0">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/90 border border-[#ea580c] text-[#ea580c] font-mono text-[10px] uppercase font-black tracking-wider shadow">
                  <span>{division.specTag}</span>
                  <span className="text-zinc-400">•</span>
                  <span className="text-white">Lic. #984210</span>
                </div>
                <div className="font-mono text-[11px] text-zinc-300 font-bold drop-shadow-md">
                  Menifee, CA &amp; Inland Empire Region
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Specification Details & Action CTAs */}
          <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-5 bg-[#0c1017]">
            <div>
              {/* Header */}
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-4 bg-[#ea580c] rounded-sm" />
                <span className="font-mono text-xs uppercase tracking-wider text-[#ea580c] font-black">
                  Engineered Division Specification
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-1.5">
                {division.title}
              </h3>

              <div className="font-mono text-xs text-zinc-300 uppercase tracking-wider font-bold">
                {division.category} <span className="text-[#ea580c]">/</span> {division.subtitle}
              </div>

              {/* Engineering Scope */}
              <div className="mt-4 pt-4 border-t border-white/10">
                <h4 className="font-mono text-xs uppercase tracking-wider text-zinc-400 font-black mb-2">
                  Engineering Scope &amp; Specifications
                </h4>
                <p className="font-sans text-xs sm:text-sm text-zinc-200 leading-relaxed font-normal">
                  {division.description} Every pour is engineered with laser-precision subgrade compaction, dual-mat seismic rebar placement, and tested aggregate mixes meeting California Title 24 &amp; C-8 standards.
                </p>
              </div>

              {/* Methodologies / Chips */}
              <div className="mt-4">
                <h4 className="font-mono text-xs uppercase tracking-wider text-zinc-400 font-black mb-2.5">
                  Available Finishes &amp; Methods
                </h4>
                <div className="flex flex-wrap gap-2">
                  {division.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 bg-white/10 border border-white/20 text-white font-mono text-xs font-bold rounded-lg flex items-center gap-1.5 shadow-sm"
                    >
                      <span className="text-[#ea580c] font-black">✓</span>
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Quick Specs Grid */}
              <div className="grid grid-cols-2 gap-3 mt-4 pt-3 border-t border-white/10">
                <div className="bg-white/5 border border-white/15 p-3 rounded-lg">
                  <div className="font-mono text-[10px] uppercase text-zinc-400 font-bold">Bid Turnaround</div>
                  <div className="font-display text-sm font-black text-white mt-0.5">Within 24 Hours</div>
                </div>
                <div className="bg-white/5 border border-white/15 p-3 rounded-lg">
                  <div className="font-mono text-[10px] uppercase text-zinc-400 font-bold">Bonding &amp; Safety</div>
                  <div className="font-display text-sm font-black text-[#ea580c] mt-0.5">$5M Bonded • OSHA</div>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-3 border-2 border-white/40 hover:border-white hover:bg-white hover:text-black text-white font-mono text-xs uppercase font-extrabold tracking-wider transition-all cursor-pointer text-center"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onRequestQuoteForDivision(division);
                }}
                className="w-full sm:w-auto px-7 py-3 bg-[#ea580c] hover:bg-[#c2410c] text-white font-mono text-xs uppercase font-black tracking-wider transition-all shadow-xl flex items-center justify-center gap-2 cursor-pointer hover:scale-105 border-2 border-transparent"
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
