import React from 'react';

interface SectionHeaderProps {
  number: string;
  eyebrowText: string;
  titleWhite: string;
  titleGold: string;
  titleSuffix?: string;
  description?: string;
  action?: React.ReactNode;
  rightElement?: React.ReactNode;
  className?: string;
}

/**
 * Reusable SectionHeader Component
 * Standardizes the 2-part white + gold main heading and cyan eyebrow numbering across all sections.
 */
export function SectionHeader({
  number,
  eyebrowText,
  titleWhite,
  titleGold,
  titleSuffix = '',
  description,
  action,
  rightElement,
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={`flex flex-col md:flex-row md:items-end justify-between gap-6 ${className}`}>
      <div className="space-y-3 max-w-3xl">
        {/* Eyebrow Numbering */}
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-brand-cyan">
          <span>{number}</span>
          <span>|</span>
          <span>{eyebrowText}</span>
        </div>

        {/* Main Editorial Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-cinema-pure-white uppercase leading-[1.05]">
          {titleWhite}{' '}
          <span className="text-gradient-gold">{titleGold}</span>
          {titleSuffix && ` ${titleSuffix}`}
        </h2>

        {/* Description */}
        {description && (
          <p className="text-xs sm:text-sm text-cinema-gray-300 font-light leading-relaxed max-w-2xl pt-0.5">
            {description}
          </p>
        )}

        {/* Optional Action Control */}
        {action && <div className="pt-2">{action}</div>}
      </div>

      {/* Right Header Element (e.g. Counter or Status Badge) */}
      {rightElement && (
        <div className="flex-shrink-0 flex items-center gap-2">
          {rightElement}
        </div>
      )}
    </div>
  );
}
