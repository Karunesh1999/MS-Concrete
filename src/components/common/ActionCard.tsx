import React from 'react';
import type { ConcreteDivision } from '../../types/concrete.ts';

interface ActionCardProps {
  division: ConcreteDivision;
  onInspect: (division: ConcreteDivision) => void;
}

export const ActionCard: React.FC<ActionCardProps> = ({ division, onInspect }) => {
  return (
    <div className="bg-white flex flex-col justify-between rounded-2xl overflow-hidden shadow-xl border-2 border-stone-200 transition-all duration-300 hover:shadow-2xl hover:border-stone-400 hover:-translate-y-1 group">
      <div className="flex flex-col">
        {/* Card Header Image with overlays */}
        <div
          className="h-72 w-full bg-cover bg-center relative transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url("${division.imageUrl}")` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/30" />
          
          <div className="absolute top-4 left-4 px-3.5 py-1.5 bg-black/85 border border-white/30 rounded-full shadow-lg">
            <span className="font-mono text-[11px] text-white font-black tracking-wider uppercase leading-none block">
              {division.bayNumber}
            </span>
          </div>
          
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
            <span className="font-mono text-xs font-black tracking-wider uppercase drop-shadow-md text-zinc-100">
              {division.subtitle}
            </span>
            <span className="px-3 py-1 rounded-full bg-black/85 border border-surveyor-lime text-surveyor-lime font-mono text-[10px] uppercase font-black tracking-wider shadow">
              {division.specTag}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-7 flex flex-col">
          <h3 className="font-display text-xl font-black text-stone-900 uppercase tracking-tight mb-2.5">
            {division.title}
          </h3>
          <p className="font-sans text-xs sm:text-sm text-stone-600 leading-relaxed mb-4 line-clamp-2 font-medium">
            {division.description}
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {division.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 bg-stone-100 text-stone-900 border border-stone-300 font-mono text-[11px] uppercase tracking-wider rounded-lg font-bold"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer action */}
      <div className="px-6 sm:px-7 pb-6 pt-4 border-t border-stone-200 flex items-center justify-between gap-3 bg-stone-50/70">
        <span className="font-mono text-xs text-stone-800 font-black tracking-wider uppercase">
          {division.category}
        </span>
        <button
          onClick={() => onInspect(division)}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0b0f16] hover:bg-[#ea580c] text-white font-mono text-xs font-black tracking-wider transition-all shadow-md shrink-0 uppercase cursor-pointer hover:scale-105"
        >
          <span>INSPECT</span>
          <span className="material-symbols-outlined text-[14px] font-bold">north_east</span>
        </button>
      </div>
    </div>
  );
};

export default ActionCard;
