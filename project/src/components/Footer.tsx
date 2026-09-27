import { nav, event } from '@/config/eventConfig';

export default function Footer() {
  return (
    <footer className="relative bg-obsidian border-t border-ash/10 py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 grain-overlay opacity-20 pointer-events-none" aria-hidden="true" />

      <div className="section-padding">
        <div className="grid md:grid-cols-12 gap-12 md:gap-8">
          {/* Left: identity */}
          <div className="md:col-span-5">
            <h3 className="font-serif font-light text-bone text-3xl md:text-4xl mb-3">
              {event.title}
            </h3>
            <p className="font-mono text-xs tracking-[0.3em] text-ancient-gold uppercase mb-2">
              {event.subtitle}
            </p>
            <p className="font-mono text-xs tracking-[0.2em] text-ash uppercase">
              {event.id}
            </p>
          </div>

          {/* Right: links */}
          <div className="md:col-span-7 md:pl-8">
            <div className="flex flex-wrap gap-x-6 gap-y-3 mb-10">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="font-mono text-xs tracking-[0.2em] text-lunar-silver/60 uppercase hover:text-bone transition-colors duration-300"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="flex flex-wrap gap-x-5 gap-y-2 mb-10">
              {[event.date, event.location, 'FREE ENTRY'].map((item) => (
                <span key={item} className="font-mono text-[10px] tracking-[0.2em] text-ash/60 uppercase">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-ash/20 via-ash/10 to-transparent mt-12 mb-8" />

        {/* Small print */}
        <p className="font-sans text-xs text-ash/50 leading-relaxed max-w-2xl">
          SPECTOR // 01 is an independent event by the GeeksforGeeks Student Chapter,
          Bennett University. Not affiliated with Marvel Entertainment.
        </p>
      </div>
    </footer>
  );
}
