interface SectionPlaceholderProps {
  id: string;
  label: string;
  order: number;
}

export function SectionPlaceholder({ id, label, order }: SectionPlaceholderProps) {
  const isHero = id === 'hero';

  return (
    <section
      id={id}
      className={`
        relative flex items-center justify-center
        ${isHero ? 'min-h-screen' : 'min-h-[50vh] py-16 sm:py-24'}
        ${order % 2 === 0 ? 'bg-surface-elevated' : 'bg-surface-primary'}
        border-b border-border-subtle
      `}
      aria-label={label}
    >
      <div className="text-center px-4">
        <span className="text-overline block mb-3">
          Section {order}
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-cinema-gray-700">
          {label}
        </h2>
        <p className="mt-3 text-sm text-cinema-gray-600 max-w-md mx-auto">
          This section will be designed in the next step.
        </p>
      </div>
    </section>
  );
}
