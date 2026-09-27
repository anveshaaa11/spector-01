import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { timeline } from '@/config/eventConfig';
import { Ankh } from '@/components/MoonKnightVisuals';

const CRESCENT_MOON = 'https://images.pexels.com/photos/30554143/pexels-photo-30554143.jpeg?auto=compress&cs=tinysrgb&w=300';

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 60%', 'end 40%'],
  });
  const progressScale = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section id="timeline" className="relative bg-deep-shadow py-28 md:py-40 overflow-hidden">
      <div className="absolute inset-0 grain-overlay opacity-15 pointer-events-none" aria-hidden="true" />

      {/* Faint crescent moon photo — top right */}
      <div className="absolute right-[3%] top-[6%] pointer-events-none z-[1]">
        <div className="relative" style={{ width: 'min(200px, 25vw)', height: 'min(200px, 25vw)' }}>
          <img
            src={CRESCENT_MOON}
            alt=""
            className="w-full h-full object-cover rounded-full"
            style={{
              filter: 'brightness(0.25) contrast(1.5) grayscale(0.8) sepia(0.3)',
              opacity: 0.25,
              maskImage: 'radial-gradient(circle, black 40%, transparent 75%)',
              WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 75%)',
            }}
            loading="lazy"
          />
        </div>
      </div>

      {/* Ankh — faint, bottom left */}
      <div className="absolute left-[4%] bottom-[6%] pointer-events-none hidden md:block z-[1]">
        <Ankh size={50} opacity={0.08} />
      </div>

      <div className="section-padding">
        {/* Header */}
        <div className="mb-20 md:mb-28 max-w-3xl">
          <span className="mono-label block mb-6">SECTION // 06</span>
          <h2
            className="font-serif font-light text-bone leading-[1.1]"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
          >
            Timeline
          </h2>
          <p className="font-sans text-sm md:text-base text-lunar-silver/50 mt-6 max-w-md leading-relaxed">
            Twelve hours, eight milestones. The night moves in one direction.
          </p>
        </div>

        {/* Timeline list */}
        <div ref={containerRef} className="relative max-w-4xl mx-auto">
          {/* Track line */}
          <div className="absolute left-[7px] md:left-[9px] top-2 bottom-2 w-px bg-ash/15" />

          {/* Progress line */}
          <motion.div
            style={{ scaleY: progressScale }}
            className="absolute left-[7px] md:left-[9px] top-2 bottom-2 w-px bg-gradient-to-b from-ancient-gold via-ancient-gold/50 to-ancient-gold/20 origin-top"
          />

          <div className="flex flex-col">
            {timeline.map((item, i) => (
              <motion.div
                key={item.time}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-8%' }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex items-start gap-6 md:gap-10 py-5 md:py-7 group"
              >
                {/* Dot */}
                <div className="relative flex-shrink-0 pt-2">
                  <div className="w-3.5 h-3.5 md:w-4 md:h-4 rounded-full border border-ash/40 bg-deep-shadow group-hover:border-ancient-gold transition-colors duration-500 z-10 relative" />
                </div>

                {/* Time */}
                <div className="flex-shrink-0 w-16 md:w-24 pt-1">
                  <span className="font-mono text-sm md:text-lg text-bone tracking-wide">
                    {item.time}
                  </span>
                </div>

                {/* Event */}
                <div className="flex-1 pt-1">
                  <span
                    className={`font-serif font-light tracking-wide transition-colors duration-300 ${
                      i === timeline.length - 1
                        ? 'text-ancient-gold'
                        : 'text-lunar-silver group-hover:text-bone'
                    }`}
                    style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.75rem)' }}
                  >
                    {item.event}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
