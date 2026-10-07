'use client';

import { SectionHeader } from '@/components/ui/SectionHeader';

export function LocationSection() {
  return (
    <section
      id="location"
      className="relative bg-[#090C12] border-t border-[#1E2631] py-16 sm:py-24 px-4 sm:px-6 lg:px-10 overflow-hidden"
      aria-label="Location"
    >
      {/* Subtle Cyan Ambient Depth */}
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[350px] pointer-events-none opacity-10"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 80% 80%, rgba(0, 216, 246, 0.15) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto space-y-10 sm:space-y-14">
        {/* Section Header */}
        <SectionHeader
          number="07"
          eyebrowText="LOCATION"
          titleWhite="FIND"
          titleGold="EVM CINEMAS."
        />

        {/* Two-Column Location Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Column: Address Details & CTA */}
          <div className="bg-[#0C1017] border border-[#1E2631] rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
            <div>
              <span className="text-[0.62rem] font-bold tracking-[0.2em] uppercase text-brand-cyan">
                DESTINATION &middot; TAMIL NADU
              </span>
              <h3 className="text-xl sm:text-2xl font-black tracking-wide text-cinema-pure-white uppercase mt-1">
                EVM CINEMAS
              </h3>
              <p className="text-xs sm:text-sm font-bold tracking-wider uppercase text-brand-gold mt-1">
                Tiruchengode, Tamil Nadu
              </p>
            </div>

            <p className="text-xs sm:text-sm text-cinema-gray-300 font-light leading-relaxed">
              EVM Cinemas is located in Tiruchengode, Tamil Nadu. Complete map coordinates and turn-by-turn navigation links will be integrated here upon official location launch.
            </p>

            <div>
              <button
                type="button"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase bg-[#141A24] border border-[#273244] text-cinema-gray-400 cursor-not-allowed"
                aria-disabled="true"
              >
                <svg className="w-4 h-4 text-brand-gold" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span>GET DIRECTIONS — LINK COMING SOON</span>
              </button>
            </div>
          </div>

          {/* Right Column: Map Placeholder Card */}
          <div className="group relative aspect-[4/3] w-full rounded-2xl border border-[#273244] bg-gradient-to-br from-[#101722] via-[#0B0F17] to-[#06080D] overflow-hidden flex flex-col items-center justify-center p-6 text-center shadow-2xl transition-all duration-300 hover:border-brand-cyan/50">
            {/* Vector Map Grid Texture */}
            <div className="absolute inset-0 pointer-events-none opacity-20 group-hover:opacity-30 transition-opacity">
              <svg className="w-full h-full text-brand-cyan" viewBox="0 0 400 300" fill="none">
                <path d="M0 50 L400 50 M0 100 L400 100 M0 150 L400 150 M0 200 L400 200 M0 250 L400 250" stroke="currentColor" strokeWidth="0.5" />
                <path d="M50 0 L50 300 M100 0 L100 300 M150 0 L150 300 M200 0 L200 300 M250 0 L250 300 M300 0 L300 300 M350 0 L350 300" stroke="currentColor" strokeWidth="0.5" />
                <circle cx="200" cy="150" r="40" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
              </svg>
            </div>

            <div className="relative z-10 w-14 h-14 rounded-full bg-brand-cyan/10 border border-brand-cyan/40 flex items-center justify-center mb-3 shadow-[0_0_20px_rgba(0,216,246,0.25)] group-hover:scale-110 transition-transform">
              <svg className="w-7 h-7 text-brand-cyan" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503-14.988l4.5 1.95a1.125 1.125 0 01.622 1.01v10.53a1.125 1.125 0 01-1.498 1.034l-4.226-1.408a1.125 1.125 0 00-.706 0l-4.526 1.509a1.125 1.125 0 01-.706 0L2.498 19.34a1.125 1.125 0 01-.622-1.01V7.8a1.125 1.125 0 01.503-.941l4.5-2.25a1.125 1.125 0 011.006 0l4.5 2.25a1.125 1.125 0 001.006 0z" />
              </svg>
            </div>

            <span className="relative z-10 text-xs font-semibold tracking-[0.2em] uppercase text-cinema-gray-400 border border-white/10 px-3.5 py-1.5 rounded-full bg-black/50 backdrop-blur-md">
              MAP — TO BE CONNECTED
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
