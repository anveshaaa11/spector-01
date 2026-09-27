import { motion } from 'framer-motion';
import { tracks } from '@/config/eventConfig';

export default function Tracks() {
  return (
    <section className="relative bg-deep-shadow py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 grain-overlay opacity-15 pointer-events-none" aria-hidden="true" />

      <div className="section-padding">
        <div className="mb-16 md:mb-24 max-w-3xl">
          <span className="mono-label block mb-6">SECTION // 05</span>
          <h2
            className="font-serif font-light text-bone leading-[1.1]"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
          >
            Tracks
          </h2>
        </div>

        {/* Asymmetric editorial layout */}
        <div className="grid md:grid-cols-12 gap-px">
          {tracks.map((track, i) => {
            const spans = [
              'md:col-span-7',
              'md:col-span-5',
              'md:col-span-5',
              'md:col-span-7',
            ];
            return (
              <motion.div
                key={track.code}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-8%' }}
                transition={{ duration: 0.9, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`${spans[i]} group relative bg-obsidian/60 p-8 md:p-12 overflow-hidden cursor-default`}
              >
                {/* Hover background */}
                <div className="absolute inset-0 bg-gradient-to-br from-ancient-gold/0 to-ancient-gold/0 group-hover:from-ancient-gold/5 group-hover:to-transparent transition-all duration-700" />

                <div className="relative z-10">
                  <div className="flex items-baseline gap-4 mb-4">
                    <span className="font-mono text-[10px] text-ash/50 tracking-[0.3em]">
                      0{i + 1}
                    </span>
                    <span className="font-mono text-sm tracking-[0.2em] text-ancient-gold">
                      {track.code}
                    </span>
                  </div>

                  <h3
                    className="font-serif font-light text-bone mb-4 leading-tight"
                    style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
                  >
                    {track.title}
                  </h3>

                  <div className="overflow-hidden max-h-0 group-hover:max-h-32 transition-all duration-700 ease-out">
                    <p className="font-sans text-sm text-lunar-silver/60 leading-relaxed pt-2">
                      {track.description}
                    </p>
                  </div>

                  <div className="h-px w-0 group-hover:w-16 bg-ancient-gold mt-4 transition-all duration-700" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
