import { motion } from 'framer-motion';
import { intelFields, event } from '@/config/eventConfig';

export default function EventIntel() {
  return (
    <section id="intel" className="relative bg-deep-shadow py-28 md:py-40 overflow-hidden">
      <div className="absolute inset-0 grain-overlay opacity-15 pointer-events-none" aria-hidden="true" />

      <div className="section-padding">
        <div className="mb-20 md:mb-28 max-w-3xl">
          <span className="mono-label block mb-6">SECTION // 08</span>
          <h2
            className="font-serif font-light text-bone leading-[1.1]"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
          >
            Event Intel
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-ash/10 max-w-4xl">
          {intelFields.map((field, i) => (
            <motion.div
              key={field.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-5%' }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="bg-deep-shadow p-6 md:p-8 group hover:bg-obsidian/40 transition-colors duration-500"
            >
              <span className="font-mono text-[10px] tracking-[0.3em] text-ash uppercase block mb-3">
                {field.label}
              </span>
              <span className="font-sans text-sm md:text-base text-bone/90 leading-relaxed">
                {field.value}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Registration CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 md:mt-20 flex flex-col items-start gap-6"
        >
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-xs tracking-[0.3em] text-ash uppercase">
              Entry
            </span>
            <span className="font-serif font-light text-ancient-gold text-3xl md:text-4xl">
              Free
            </span>
          </div>
          <a
            href="#"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-bone text-obsidian font-mono text-xs tracking-[0.25em] uppercase font-medium hover:bg-ancient-gold transition-colors duration-500"
          >
            Accept the Mission
            <span className="inline-block w-6 h-px bg-obsidian group-hover:w-10 transition-all duration-500" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
