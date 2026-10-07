import { getLegacyMilestones } from '@/lib/api/cinema-service';
import { SectionHeader } from '@/components/ui/SectionHeader';

/** Server component — CMS-ready legacy section */
export async function LegacySection() {
  const milestones = await getLegacyMilestones();

  return (
    <section
      id="about"
      className="relative bg-[#080B10] border-t border-[#1E2631] py-16 sm:py-24 px-4 sm:px-6 lg:px-10 overflow-hidden"
      aria-label="Our Legacy"
    >
      {/* Subtle Gold Ambient Radial Depth */}
      <div
        className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none opacity-10"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201, 168, 76, 0.15) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto space-y-10 sm:space-y-14">
        {/* Section Header */}
        <SectionHeader
          number="06"
          eyebrowText="OUR LEGACY"
          titleWhite="A STORY"
          titleGold="WORTH TELLING."
        />

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Theatre Photograph Placeholder Frame */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div
              className="group relative aspect-[4/3] w-full rounded-2xl border border-[#273244] bg-gradient-to-br from-[#121924] via-[#0D121B] to-[#070A0F] overflow-hidden flex flex-col items-center justify-center p-8 text-center shadow-2xl transition-all duration-300 hover:border-brand-gold/50"
              role="img"
              aria-label="Theatre photograph placeholder"
            >
              {/* Background Geometric Film & Architecture Motif */}
              <div className="absolute inset-0 pointer-events-none opacity-15 group-hover:opacity-25 transition-opacity">
                <svg className="w-full h-full text-brand-cyan" viewBox="0 0 400 300" fill="none">
                  <circle cx="200" cy="150" r="110" stroke="currentColor" strokeWidth="1" strokeDasharray="6 6" />
                  <path d="M50 0 L350 300 M350 0 L50 300" stroke="currentColor" strokeWidth="0.5" />
                </svg>
              </div>

              <div className="relative z-10 w-14 h-14 rounded-full bg-brand-gold/10 border border-brand-gold/40 flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(201,168,76,0.2)] group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-brand-gold" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                </svg>
              </div>

              <span className="relative z-10 text-xs font-semibold tracking-[0.2em] uppercase text-cinema-gray-400 max-w-xs border border-white/10 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md">
                THEATRE PHOTOGRAPH — TO BE SUPPLIED
              </span>
            </div>
          </div>

          {/* Right Column: Story Chapters Timeline */}
          <div className="lg:col-span-7 space-y-6">
            {milestones.map((m, idx) => (
              <article
                key={m.title}
                className="group relative bg-[#0C1017]/60 border border-[#1E2631]/80 rounded-xl p-6 sm:p-7 space-y-2.5 transition-all duration-300 hover:bg-[#0C1017] hover:border-brand-gold/40 hover:shadow-[0_0_20px_rgba(201,168,76,0.08)]"
              >
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-gold shadow-[0_0_8px_#C9A84C]" />
                    <span className="text-[0.68rem] font-bold tracking-[0.25em] text-brand-gold uppercase">
                      CHAPTER 0{idx + 1} &middot; {m.year}
                    </span>
                  </div>
                  <span className="text-[0.62rem] font-bold tracking-widest text-brand-cyan uppercase bg-brand-cyan/10 border border-brand-cyan/20 px-2.5 py-0.5 rounded">
                    {m.subtitle}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-black text-cinema-pure-white uppercase tracking-wide group-hover:text-brand-gold transition-colors">
                  {m.title}
                </h3>

                <p className="text-xs sm:text-sm text-cinema-gray-300 font-light leading-relaxed">
                  {m.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
