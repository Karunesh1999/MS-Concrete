import React from 'react';
import type { ConcreteDivision } from '../../types/concrete.ts';

interface ActionCardProps {
  division: ConcreteDivision;
  onInspect: (division: ConcreteDivision) => void;
}

export const ActionCard: React.FC<ActionCardProps> = ({ division, onInspect }) => {
  return (
    <div className="bg-white flex flex-col justify-between rounded-xl overflow-hidden shadow-md border border-surface-variant transition-all hover:shadow-xl group">
      <div className="flex flex-col">
        {/* Card Header Image with overlays */}
        <div
          className="h-64 w-full bg-cover bg-center relative transition-transform duration-500 group-hover:scale-[1.02]"
          style={{ backgroundImage: `url("${division.imageUrl}")` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-stone-charcoal/80 via-transparent to-black/30" />
          
          <div className="absolute top-3.5 left-3.5 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full shadow-sm">
            <span className="font-mono text-[10px] text-stone-charcoal font-bold tracking-wider uppercase leading-none block">
              {division.bayNumber}
            </span>
          </div>
          
          <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between text-white">
            <span className="font-mono text-xs font-semibold tracking-wider uppercase">
              {division.subtitle}
            </span>
            <span className="px-2 py-0.5 rounded bg-surveyor-lime/10 border border-surveyor-lime/30 text-surveyor-lime font-mono text-[10px] uppercase font-bold tracking-wider">
              {division.specTag}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col">
          <h3 className="font-display text-base font-bold text-stone-charcoal uppercase tracking-tight mb-1.5">
            {division.title}
          </h3>
          <p className="font-sans text-xs text-secondary leading-relaxed mb-3 line-clamp-2">
            {division.description}
          </p>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {division.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 bg-surface-container text-on-surface-variant font-mono text-[10px] uppercase tracking-wider rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer action */}
      <div className="px-5 pb-5 pt-3 border-t border-surface-container flex items-center justify-between gap-2">
        <span className="font-mono text-[11px] text-secondary font-medium tracking-wide uppercase">
          {division.category}
        </span>
        <button
          onClick={() => onInspect(division)}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-outline-variant bg-surface-container-low hover:bg-stone-charcoal hover:text-white text-stone-charcoal font-mono text-[11px] font-bold tracking-wider transition-colors shrink-0 uppercase cursor-pointer"
        >
          <span>INSPECT</span>
          <span className="material-symbols-outlined text-[13px]">north_east</span>
        </button>
      </div>
    </div>
  );
};

export default ActionCard;

