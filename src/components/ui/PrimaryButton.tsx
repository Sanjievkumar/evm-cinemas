import Link from 'next/link';
import { cn } from '@/lib/utils';

interface PrimaryButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'solid' | 'outline';
  size?: 'default' | 'lg';
  className?: string;
  isExternal?: boolean;
  onClick?: () => void;
}

/**
 * Reusable CTA button component.
 * Currently renders as a link; the `href` can be swapped to a
 * BookMyShow URL when the integration is ready.
 */
export function PrimaryButton({
  href,
  children,
  variant = 'solid',
  size = 'default',
  className,
  isExternal = false,
  onClick,
}: PrimaryButtonProps) {
  const baseClasses = cn(
    'inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-colors',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-cinema-black',

    // Size
    size === 'lg'
      ? 'px-8 py-3.5 text-base'
      : 'px-5 py-2.5 text-sm',

    // Variant
    variant === 'solid'
      ? 'bg-brand-gold text-cinema-black hover:bg-brand-gold-light active:bg-brand-gold-dark'
      : 'border border-cinema-gray-300/40 text-cinema-pure-white hover:bg-cinema-pure-white/10 active:bg-cinema-pure-white/5',

    className
  );

  const externalProps = isExternal
    ? { target: '_blank' as const, rel: 'noopener noreferrer' }
    : {};

  return (
    <Link
      href={href}
      className={baseClasses}
      style={{ transitionDuration: 'var(--duration-fast)' }}
      onClick={onClick}
      {...externalProps}
    >
      {children}
    </Link>
  );
}
