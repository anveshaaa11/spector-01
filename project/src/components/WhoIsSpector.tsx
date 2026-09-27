import { useState } from 'react';
import { motion } from 'framer-motion';
import { specterIntro } from '@/config/eventConfig';
import { Ankh, HieroglyphBorder } from '@/components/MoonKnightVisuals';

export default function WhoIsSpector() {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section className="relative bg-deep-shadow py-28 md:py-40 overflow-hidden">
      <div className="absolute inset-0 grain-overlay opacity-15 pointer-events-none" aria-hidden="true" />

      {/* Decorative vertical line */}
      <div className="absolute left-6 md:left-10 lg:left-20 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-ash/15 to-transparent" aria-hidden="true" />

      {/* Ankh symbol — faint, top right */}
      <div className="absolute right-[6%] top-[12%] pointer-events-none hidden md:block">
        <Ankh size={60} opacity={0.1} />
      </div>

      <div className="section-padding relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left: title + body */}
          <div className="lg:col-span-7 lg:pl-8">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mono-label block mb-8"
            >
              {specterIntro.title}
            </motion.span>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif font-light text-bone/90 leading-[1.6] text-balance"
              style={{ fontSize: 'clamp(1.25rem, 2.8vw, 2rem)' }}
            >
              {specterIntro.body}
            </motion.p>

            {/* Hieroglyph border under text */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-10 max-w-sm"
            >
              <HieroglyphBorder opacity={0.12} />
            </motion.div>
          </div>

          {/* Right: interactive stage diagram */}
          <div className="lg:col-span-5 lg:pt-4">
            <div className="relative pl-8 lg:pl-0">
              {/* Stage labels */}
              <div className="flex flex-col gap-1">
                {specterIntro.stages.map((stage, i) => (
                  <button
                    key={stage}
                    onClick={() => setActiveStage(i)}
                    className="group text-left py-4 border-b border-ash/10 transition-colors duration-300"
                    onMouseEnter={() => setActiveStage(i)}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`font-mono text-[10px] tracking-[0.2em] transition-colors duration-300 ${
                          activeStage === i ? 'text-ancient-gold' : 'text-ash/50'
                        }`}
                      >
                        0{i + 1}
                      </span>
                      <span
                        className={`font-serif text-2xl md:text-3xl font-light transition-all duration-300 ${
                          activeStage === i
                            ? 'text-bone translate-x-2'
                            : 'text-ash/40'
                        }`}
                      >
                        {stage}
                      </span>
                    </div>
                    <motion.div
                      className="h-px bg-ancient-gold mt-2"
                      initial={false}
                      animate={{ width: activeStage === i ? '60px' : '0px' }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                    />
                  </button>
                ))}
              </div>

              {/* Arrow flow indicator */}
              <motion.div
                key={activeStage}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="mt-8 flex items-center gap-3"
              >
                <span className="font-mono text-[9px] tracking-[0.3em] text-ash uppercase">
                  Stage
                </span>
                <span className="font-mono text-sm text-ancient-gold">
                  {String(activeStage + 1).padStart(2, '0')} / 04
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
