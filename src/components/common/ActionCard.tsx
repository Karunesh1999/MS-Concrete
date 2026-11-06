import React from 'react';
import type { ConcreteDivision } from '../../types/concrete.ts';

interface ActionCardProps {
  division: ConcreteDivision;
  onInspect: (division: ConcreteDivision) => void;
}

export const ActionCard: React.FC<ActionCardProps> = ({ division, onInspect }) => {
  return (
    <div className="bg-white flex flex-col justify-between rounded-xl overflow-hidden shadow-lg border-2 border-stone-200 transition-all hover:shadow-2xl hover:border-stone-400 group">
      <div className="flex flex-col">
        {/* Card Header Image with overlays */}
        <div
          className="h-64 w-full bg-cover bg-center relative transition-transform duration-500 group-hover:scale-[1.02]"
          style={{ backgroundImage: `url("${division.imageUrl}")` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30" />
          
          <div className="absolute top-3.5 left-3.5 px-3 py-1 bg-black/80 border border-white/30 rounded-full shadow-md">
            <span className="font-mono text-[10px] text-white font-extrabold tracking-wider uppercase leading-none block">
              {division.bayNumber}
            </span>
          </div>
          
          <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between text-white">
            <span className="font-mono text-xs font-bold tracking-wider uppercase drop-shadow-md">
              {division.subtitle}
            </span>
            <span className="px-2.5 py-1 rounded-full bg-black/80 border border-surveyor-lime text-surveyor-lime font-mono text-[10px] uppercase font-black tracking-wider shadow">
              {division.specTag}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col">
          <h3 className="font-display text-lg font-black text-stone-900 uppercase tracking-tight mb-2">
            {division.title}
          </h3>
          <p className="font-sans text-xs sm:text-sm text-stone-600 leading-relaxed mb-4 line-clamp-2 font-medium">
            {division.description}
          </p>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {division.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 bg-stone-100 text-stone-900 border border-stone-300 font-mono text-[10px] uppercase tracking-wider rounded font-bold"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer action */}
      <div className="px-6 pb-6 pt-4 border-t border-stone-200 flex items-center justify-between gap-3 bg-stone-50/60">
        <span className="font-mono text-xs text-stone-700 font-extrabold tracking-wide uppercase">
          {division.category}
        </span>
        <button
          onClick={() => onInspect(division)}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-stone-900 hover:bg-[#ea580c] text-white font-mono text-xs font-extrabold tracking-wider transition-all shadow-md shrink-0 uppercase cursor-pointer hover:scale-105"
        >
          <span>INSPECT</span>
          <span className="material-symbols-outlined text-[13px] font-bold">north_east</span>
        </button>
      </div>
    </div>
  );
};

export default ActionCard;
