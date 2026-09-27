import { motion } from 'framer-motion';
import { missions } from '@/config/eventConfig';

export default function Missions() {
  return (
    <section id="missions" className="relative bg-obsidian py-28 md:py-40 overflow-hidden">
      <div className="absolute inset-0 grain-overlay opacity-20 pointer-events-none" aria-hidden="true" />

      <div className="section-padding">
        <div className="mb-20 md:mb-28 max-w-3xl">
          <span className="mono-label block mb-6">SECTION // 05B</span>
          <h2
            className="font-serif font-light text-bone leading-[1.1]"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
          >
            Mission Briefings
          </h2>
          <p className="font-sans text-sm md:text-base text-lunar-silver/50 mt-6 max-w-md leading-relaxed">
            Classified documents. Sealed until the operation begins.
          </p>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col gap-px">
          {missions.map((m, i) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-5%' }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-deep-shadow/40 hover:bg-deep-shadow/70 transition-colors duration-500 p-8 md:p-10 cursor-default overflow-hidden"
            >
              {/* Classified stamp line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ancient-gold/20 to-transparent" />

              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12">
                <div className="flex-shrink-0 md:w-40">
                  <span className="font-mono text-[10px] tracking-[0.3em] text-ancient-gold/60 uppercase block mb-2">
                    {m.id}
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.2em] text-ash/40 uppercase">
                    Classified
                  </span>
                </div>

                <div className="flex-1">
                  <h3
                    className="font-serif font-light text-bone mb-3 group-hover:text-ancient-gold transition-colors duration-500"
                    style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
                  >
                    {m.title}
                  </h3>
                  <p className="font-sans text-sm md:text-base text-lunar-silver/50 leading-relaxed max-w-xl">
                    {m.description}
                  </p>
                </div>

                <div className="flex-shrink-0 hidden md:block">
                  <span className="font-mono text-2xl text-ash/20 group-hover:text-ancient-gold/30 transition-colors duration-500">
                    0{i + 1}
                  </span>
                </div>
              </div>

              {/* Linen texture on hover */}
              <div className="absolute inset-0 linen-texture opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
