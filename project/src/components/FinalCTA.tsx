import { motion } from 'framer-motion';
import { event } from '@/config/eventConfig';
import { EyeOfHorus } from '@/components/MoonKnightVisuals';

const CTA_FIGURE = 'https://images.pexels.com/photos/19406595/pexels-photo-19406595.jpeg?auto=compress&cs=tinysrgb&w=700';
const CRESCENT_MOON = 'https://images.pexels.com/photos/30554143/pexels-photo-30554143.jpeg?auto=compress&cs=tinysrgb&w=400';

export default function FinalCTA() {
  return (
    <section className="relative bg-obsidian py-32 md:py-48 overflow-hidden">
      <div className="absolute inset-0 grain-overlay opacity-25 pointer-events-none" aria-hidden="true" />

      {/* Crescent moon — behind figure, right side */}
      <div className="absolute right-[8%] top-[15%] pointer-events-none z-[1]">
        <div className="relative" style={{ width: 'min(300px, 35vw)', height: 'min(300px, 35vw)' }}>
          <img
            src={CRESCENT_MOON}
            alt=""
            className="w-full h-full object-cover rounded-full"
            style={{
              filter: 'brightness(0.35) contrast(1.5) grayscale(0.8) sepia(0.3)',
              opacity: 0.4,
              maskImage: 'radial-gradient(circle, black 40%, transparent 75%)',
              WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 75%)',
            }}
            loading="lazy"
          />
          <div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{ boxShadow: '0 0 100px 30px rgba(232, 227, 216, 0.05)' }}
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Hooded figure — right side, different crop */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-10%' }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute right-0 bottom-0 pointer-events-none z-[2]"
        style={{ width: 'min(420px, 60vw)', height: '70vh', maxHeight: '700px' }}
      >
        <img
          src={CTA_FIGURE}
          alt="A hooded figure emerging from darkness"
          className="w-full h-full object-cover object-top"
          style={{
            filter: 'grayscale(1) contrast(1.4) brightness(0.4) sepia(0.15)',
            maskImage: 'linear-gradient(to left, black 0%, black 40%, transparent 85%), linear-gradient(to bottom, black 0%, black 60%, transparent 95%)',
            WebkitMaskImage: 'linear-gradient(to left, black 0%, black 40%, transparent 85%), linear-gradient(to bottom, black 0%, black 60%, transparent 95%)',
            maskComposite: 'intersect',
            WebkitMaskComposite: 'source-in',
          }}
          loading="lazy"
        />
        {/* Moonlight rim */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(105deg, rgba(216,225,229,0.1) 0%, transparent 30%)',
            mixBlendMode: 'screen',
            maskImage: 'linear-gradient(to left, black 0%, black 40%, transparent 85%)',
            WebkitMaskImage: 'linear-gradient(to left, black 0%, black 40%, transparent 85%)',
          }}
          aria-hidden="true"
        />
      </motion.div>

      {/* Eye of Horus — faint, left side */}
      <div className="absolute left-[5%] bottom-[12%] pointer-events-none hidden md:block z-[2]">
        <EyeOfHorus size={90} opacity={0.1} />
      </div>

      {/* Vignette — fade figure into bg */}
      <div
        className="absolute inset-0 pointer-events-none z-[3]"
        style={{ background: 'linear-gradient(90deg, #050505 15%, transparent 55%, transparent 70%, #050505 100%)' }}
        aria-hidden="true"
      />

      <div className="section-padding relative z-10">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mono-label block mb-10"
          >
            FINAL DIRECTIVE
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-15%' }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif font-light text-bone leading-[1.05] mb-8"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)', textShadow: '0 0 60px rgba(232,227,216,0.1)' }}
          >
            THE NIGHT IS WAITING.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-serif italic text-xl md:text-2xl text-lunar-silver/70 mb-12 max-w-md leading-relaxed"
          >
            You have seen the system. Now enter it.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <a
              href="#"
              className="px-10 py-4 bg-bone text-obsidian font-mono text-xs tracking-[0.25em] uppercase font-medium hover:bg-ancient-gold transition-colors duration-500"
            >
              ACCEPT THE MISSION
            </a>
            <a
              href="#intel"
              className="px-10 py-4 border border-ash/30 text-lunar-silver font-mono text-xs tracking-[0.25em] uppercase hover:border-bone/60 hover:text-bone transition-all duration-500"
            >
              VIEW THE INTEL
            </a>
          </motion.div>

          <div className="mt-16 flex flex-wrap gap-x-6 gap-y-2">
            {[event.date, event.duration, event.venue].map((item) => (
              <span key={item} className="font-mono text-[10px] tracking-[0.2em] text-ash uppercase">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
