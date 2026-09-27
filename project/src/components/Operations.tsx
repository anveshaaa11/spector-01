import { motion } from 'framer-motion';
import { operations } from '@/config/eventConfig';

function ChapterVisual({ accent }: { accent: string }) {
  // THE AWAKENING — Eye of Horus opening
  if (accent === 'awakening') {
    return (
      <svg viewBox="0 0 200 200" className="w-full h-full" aria-hidden="true">
        <g stroke="#A88A5A" strokeWidth="1.5" fill="none" strokeLinecap="round" style={{ opacity: 0.4 }}>
          {/* Eye of Horus */}
          <path d="M 40 100 Q 75 65, 120 100 Q 75 135, 40 100 Z" />
          <circle cx="85" cy="100" r="10" fill="#A88A5A" fillOpacity="0.25" />
          <path d="M 60 72 Q 90 55, 115 62" />
          <path d="M 115 108 Q 122 135, 110 150" />
          <path d="M 105 110 Q 105 135, 95 145" />
          <path d="M 120 100 Q 145 96, 165 85" />
        </g>
        {/* Radiating lines — awakening */}
        <g stroke="#A88A5A" strokeOpacity="0.15" strokeWidth="0.5" fill="none">
          <line x1="100" y1="30" x2="100" y2="45" />
          <line x1="100" y1="155" x2="100" y2="170" />
          <line x1="25" y1="100" x2="35" y2="100" />
          <line x1="165" y1="100" x2="175" y2="100" />
          <line x1="45" y1="50" x2="52" y2="57" />
          <line x1="155" y1="50" x2="148" y2="57" />
          <line x1="45" y1="150" x2="52" y2="143" />
          <line x1="155" y1="150" x2="148" y2="143" />
        </g>
      </svg>
    );
  }
  // THE HUNT — crescent moon with tracking lines
  if (accent === 'hunt') {
    return (
      <svg viewBox="0 0 200 200" className="w-full h-full" aria-hidden="true">
        {/* Crescent moon */}
        <path
          d="M 100 35
             A 65 65 0 1 0 100 165
             A 52 52 0 1 1 100 35
             Z"
          fill="#E8E3D8"
          fillOpacity="0.06"
        />
        <path
          d="M 100 35
             A 65 65 0 1 0 100 165
             A 52 52 0 1 1 100 35
             Z"
          fill="none"
          stroke="#E8E3D8"
          strokeOpacity="0.25"
          strokeWidth="1"
        />
        {/* Tracking grid lines over moon */}
        <g stroke="#A88A5A" strokeOpacity="0.15" strokeWidth="0.5" fill="none">
          <line x1="50" y1="100" x2="150" y2="100" />
          <line x1="100" y1="40" x2="100" y2="160" />
          <line x1="60" y1="65" x2="140" y2="135" strokeDasharray="2 4" />
          <line x1="140" y1="65" x2="60" y2="135" strokeDasharray="2 4" />
        </g>
        {/* Target markers */}
        <circle cx="100" cy="100" r="3" fill="#A88A5A" fillOpacity="0.4" />
        <circle cx="100" cy="100" r="20" fill="none" stroke="#A88A5A" strokeOpacity="0.12" strokeWidth="0.5" />
      </svg>
    );
  }
  // THE DUALITY — crescent split into light and dark
  if (accent === 'duality') {
    return (
      <svg viewBox="0 0 200 200" className="w-full h-full" aria-hidden="true">
        {/* Left half — bone/light */}
        <path
          d="M 100 35
             A 65 65 0 0 0 100 165
             Z"
          fill="#E8E3D8"
          fillOpacity="0.12"
        />
        {/* Right half — dark */}
        <path
          d="M 100 35
             A 65 65 0 0 1 100 165
             Z"
          fill="#050505"
          fillOpacity="0.5"
        />
        {/* Split line */}
        <line x1="100" y1="35" x2="100" y2="165" stroke="#A88A5A" strokeOpacity="0.4" strokeWidth="1" />
        {/* Outer circle */}
        <circle cx="100" cy="100" r="65" fill="none" stroke="#A88A5A" strokeOpacity="0.2" strokeWidth="0.5" />
        {/* Small crescents on each side */}
        <path d="M 70 85 A 12 12 0 1 0 70 105 A 9 9 0 1 1 70 85 Z" fill="#E8E3D8" fillOpacity="0.2" />
        <path d="M 130 85 A 12 12 0 1 1 130 105 A 9 9 0 1 0 130 85 Z" fill="#A88A5A" fillOpacity="0.2" />
      </svg>
    );
  }
  // THE FINAL NIGHT — ankh within crescent
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full" aria-hidden="true">
      {/* Crescent moon behind */}
      <path
        d="M 100 30
           A 70 70 0 1 0 100 170
           A 56 56 0 1 1 100 30
           Z"
        fill="#E8E3D8"
        fillOpacity="0.05"
      />
      <path
        d="M 100 30
           A 70 70 0 1 0 100 170
           A 56 56 0 1 1 100 30
           Z"
        fill="none"
        stroke="#E8E3D8"
        strokeOpacity="0.15"
        strokeWidth="0.8"
      />
      {/* Ankh in center */}
      <g stroke="#A88A5A" strokeWidth="2" fill="none" strokeLinecap="round" style={{ opacity: 0.5 }}>
        <ellipse cx="100" cy="75" rx="16" ry="20" />
        <line x1="100" y1="95" x2="100" y2="155" />
        <line x1="75" y1="115" x2="125" y2="115" />
      </g>
      {/* Radiating lines */}
      <g stroke="#A88A5A" strokeOpacity="0.1" strokeWidth="0.5" fill="none">
        <line x1="100" y1="20" x2="100" y2="28" />
        <line x1="100" y1="172" x2="100" y2="180" />
        <line x1="20" y1="100" x2="28" y2="100" />
        <line x1="172" y1="100" x2="180" y2="100" />
      </g>
    </svg>
  );
}

function Chapter({
  op,
  index,
}: {
  op: typeof operations[number];
  index: number;
}) {
  const isReversed = index % 2 === 1;
  const isLarge = index === 0 || index === 3;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className={`grid md:grid-cols-12 gap-6 md:gap-10 items-center ${
        isReversed ? 'md:flex-row-reverse' : ''
      }`}
    >
      {/* Visual / accent side */}
      <div
        className={`md:col-span-5 ${isReversed ? 'md:order-2' : ''} ${
          isLarge ? 'md:col-span-5' : 'md:col-span-4'
        }`}
      >
        <div className="relative aspect-square max-w-[280px] mx-auto md:mx-0">
          <ChapterVisual accent={op.accent} index={index} />
        </div>
      </div>

      {/* Text side */}
      <div
        className={`md:col-span-7 ${isReversed ? 'md:order-1 md:pr-8' : 'md:pl-8'} ${
          isLarge ? 'md:col-span-7' : 'md:col-span-8'
        }`}
      >
        <div className="flex items-center gap-4 mb-6">
          <span className="font-mono text-xs tracking-[0.3em] text-ancient-gold">
            CHAPTER {op.chapter}
          </span>
          <span className="h-px w-12 bg-ash/30" />
          <span className="font-mono text-xs tracking-[0.2em] text-ash">
            {op.time}
          </span>
        </div>

        <h3
          className="font-serif font-light text-bone leading-[1.1] mb-6"
          style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
        >
          {op.title}
        </h3>

        <p className="font-mono text-xs md:text-sm text-lunar-silver/60 tracking-wide mb-4 max-w-lg leading-relaxed">
          {op.focus}
        </p>

        <p className="font-serif italic text-lg md:text-xl text-bone/50 max-w-md">
          "{op.line}"
        </p>
      </div>
    </motion.div>
  );
}

export default function Operations() {
  return (
    <section id="operations" className="relative bg-obsidian py-28 md:py-40 overflow-hidden">
      <div className="absolute inset-0 grain-overlay opacity-20 pointer-events-none" aria-hidden="true" />

      <div className="section-padding">
        {/* Section header */}
        <div className="mb-20 md:mb-32 max-w-3xl">
          <span className="mono-label block mb-6">SECTION // 04</span>
          <h2
            className="font-serif font-light text-bone leading-[1.1]"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
          >
            Operations
          </h2>
          <p className="font-sans text-sm md:text-base text-lunar-silver/50 mt-6 max-w-md leading-relaxed">
            Four chapters across one night. Each phase escalates the challenge.
          </p>
        </div>

        <div className="flex flex-col gap-28 md:gap-40">
          {operations.map((op, i) => (
            <Chapter key={op.chapter} op={op} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
