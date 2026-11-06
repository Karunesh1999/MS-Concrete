import React from 'react';

interface MSCCLogoProps {
  className?: string;
  showSubtitle?: boolean;
}

export const MSCCLogo: React.FC<MSCCLogoProps> = ({ className = '', showSubtitle = true }) => {
  return (
    <div className={`flex items-center gap-3 group shrink-0 ${className}`}>
      <div className="flex items-center border-b-2 border-white/30 pb-0.5 group-hover:border-[#ea580c] transition-colors">
        <span className="font-mono text-xs md:text-sm tracking-[0.25em] text-white uppercase font-bold">
          Morning
        </span>
        <div className="mx-2.5 w-6 h-6 bg-[#ea580c] flex items-center justify-center relative shadow-md group-hover:scale-110 transition-transform">
          <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-white" />
        </div>
        <span className="font-mono text-xs md:text-sm tracking-[0.25em] text-white font-extrabold uppercase">
          Star
        </span>
      </div>
      {showSubtitle && (
        <span className="hidden sm:inline-block font-mono text-[9px] tracking-[0.2em] text-zinc-300 uppercase pl-2 border-l border-white/20 font-semibold">
          Concrete Construction
        </span>
      )}
    </div>
  );
};

export default MSCCLogo;
