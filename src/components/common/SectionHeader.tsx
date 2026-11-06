import React from 'react';

interface SectionHeaderProps {
  category: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  category,
  title,
  subtitle,
  centered = false,
  light = false,
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center max-w-2xl mx-auto' : ''}`}>
      <div className={`flex items-center gap-2 mb-2 ${centered ? 'justify-center' : ''}`}>
        <span className="w-1.5 h-5 bg-[#ea580c] rounded-sm" />
        <span className="font-mono text-xs uppercase tracking-wider text-secondary font-semibold">
          {category}
        </span>
      </div>
      <h2
        className={`font-display text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight font-bold ${
          light ? 'text-white' : 'text-stone-charcoal'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 font-sans text-sm sm:text-base leading-relaxed ${light ? 'text-concrete-aggregate' : 'text-secondary'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;

