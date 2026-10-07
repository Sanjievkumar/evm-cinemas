import Link from 'next/link';
import { cinemaInfo, contactDetails, navigationItems } from '@/lib/data/mock-data';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#060709] border-t border-[#1E2631]" role="contentinfo">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 py-12 sm:py-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" aria-label="EVM Cinemas — Home" className="inline-flex items-center gap-3">
              <span className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-brand-cyan/80 bg-brand-cyan/10 text-xs font-black text-cinema-pure-white">
                EVM
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-xl font-bold tracking-tight text-cinema-pure-white">EVM</span>
                <span className="text-[0.6rem] font-semibold tracking-[0.25em] uppercase text-cinema-gray-300">Cinemas</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-cinema-gray-400 max-w-xs">{cinemaInfo.description}</p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <h3 className="text-overline mb-4">Explore</h3>
            <ul className="space-y-2">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-cinema-gray-400 hover:text-cinema-pure-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Location */}
          <div>
            <h3 className="text-overline mb-4">Location</h3>
            <address className="not-italic space-y-2 text-sm text-cinema-gray-400">
              <p>{cinemaInfo.name}</p>
              <p>{contactDetails.addressLine ?? 'Tiruchengode, Tamil Nadu'}</p>
              {contactDetails.phone && <p>{contactDetails.phone}</p>}
              {contactDetails.email && <p>{contactDetails.email}</p>}
            </address>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-overline mb-4">Follow Us</h3>
            <ul className="space-y-2 text-sm">
              {contactDetails.socials.map((s) => (
                <li key={s.label}>
                  {s.href ? (
                    <a href={s.href} target="_blank" rel="noopener noreferrer" className="text-cinema-gray-400 hover:text-brand-gold transition-colors">
                      {s.label}
                    </a>
                  ) : (
                    <span className="text-cinema-gray-600">{s.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#1E2631] py-6">
          <p className="text-xs text-cinema-gray-500">
            &copy; {year} {cinemaInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
