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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Enlarged Dialog Box: max-w-4xl for cinematic architectural presentation */}
      <div className="relative w-full max-w-4xl bg-[#0c1017] text-white shadow-2xl rounded-2xl overflow-hidden border-2 border-white/20 z-10 max-h-[95vh] overflow-y-auto scrollbar-none [&::-webkit-scrollbar]:hidden">
        {/* Close Button on Image */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-5 right-5 z-30 w-10 h-10 flex items-center justify-center rounded-full bg-black/75 hover:bg-black text-white border border-white/30 transition-all cursor-pointer hover:scale-105 shadow-xl"
        >
          <span className="material-symbols-outlined text-xl font-bold">close</span>
        </button>

        {/* Enlarged Ultra 4K Image Section: h-72 sm:h-80 md:h-[350px] */}
        <div
          className="relative h-72 sm:h-80 md:h-[350px] w-full bg-cover bg-center transition-transform duration-700"
          style={{ backgroundImage: `url("${division.imageUrl}")` }}
        >
          {/* Architectural Scrim Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c1017] via-[#0c1017]/35 to-black/40" />

          {/* Top Badges */}
          <div className="absolute top-5 left-5 z-10 flex flex-wrap items-center gap-2">
            <span className="inline-block px-4 py-1.5 bg-black/85 border border-white/30 text-white font-mono text-xs font-black uppercase tracking-wider rounded-full shadow-lg">
              {division.bayNumber}
            </span>
            <span className="inline-block px-3.5 py-1.5 bg-[#ea580c] text-white font-mono text-[11px] font-black uppercase tracking-wider rounded-full shadow-lg">
              {division.specTag}
            </span>
          </div>

          {/* Bottom Overlay Title & Category */}
          <div className="absolute bottom-5 left-6 right-6 z-10">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2.5 h-4 bg-[#ea580c] rounded-sm" />
              <span className="font-mono text-xs sm:text-sm uppercase tracking-wider text-[#ea580c] font-black">
                {division.category} <span className="text-zinc-400">/</span> {division.subtitle}
              </span>
            </div>
            <h3 className="font-display text-2xl sm:text-4xl font-black uppercase tracking-tight text-white drop-shadow-lg">
              {division.title}
            </h3>
          </div>
        </div>

        {/* Modal Body: Spacious & Well-Organized */}
        <div className="p-6 sm:p-8 space-y-6 bg-[#0c1017]">
          {/* 2-Column Responsive Information Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Left Col: Scope & Engineering Specs */}
            <div className="md:col-span-7 space-y-3">
              <h4 className="font-mono text-xs uppercase tracking-wider text-zinc-300 font-black flex items-center gap-2">
                <span className="material-symbols-outlined text-base text-[#ea580c]">architecture</span>
                Engineering Scope &amp; Field Specs
              </h4>
              <p className="font-sans text-xs sm:text-sm text-zinc-200 leading-relaxed font-normal">
                {division.description} Every pour is engineered with laser-precision grading, dual-mat seismic steel rebar placement, and tested aggregate mixes formulated for maximum load bearing and California seismic resistance.
              </p>
            </div>

            {/* Right Col: Available Finishes & Methodologies */}
            <div className="md:col-span-5 space-y-3">
              <h4 className="font-mono text-xs uppercase tracking-wider text-zinc-300 font-black flex items-center gap-2">
                <span className="material-symbols-outlined text-base text-[#ea580c]">checklist</span>
                Available Finishes &amp; Methods
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
          </div>

          {/* Standards & Credentials Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-white/10">
            <div className="bg-white/5 border border-white/15 px-4 py-3 rounded-xl flex items-center justify-between">
              <span className="font-mono text-[11px] uppercase text-zinc-400 font-bold">Standard Turnaround:</span>
              <span className="font-mono text-xs font-black text-white">24hr Bid Review</span>
            </div>
            <div className="bg-white/5 border border-white/15 px-4 py-3 rounded-xl flex items-center justify-between">
              <span className="font-mono text-[11px] uppercase text-zinc-400 font-bold">State Licensing:</span>
              <span className="font-mono text-xs font-black text-[#ea580c]">CSLB C-8 #984210</span>
            </div>
            <div className="bg-white/5 border border-white/15 px-4 py-3 rounded-xl flex items-center justify-between">
              <span className="font-mono text-[11px] uppercase text-zinc-400 font-bold">Field Coverage:</span>
              <span className="font-mono text-xs font-black text-white">Inland Empire &amp; SoCal</span>
            </div>
          </div>

          {/* Footer Action Buttons */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-3.5 border-2 border-white/40 hover:border-white hover:bg-white hover:text-black text-white font-mono text-xs uppercase font-extrabold tracking-wider transition-all cursor-pointer text-center"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onRequestQuoteForDivision(division);
              }}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#ea580c] hover:bg-[#c2410c] text-white font-mono text-xs uppercase font-black tracking-wider transition-all shadow-xl flex items-center justify-center gap-2 cursor-pointer hover:scale-105 border-2 border-transparent"
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
