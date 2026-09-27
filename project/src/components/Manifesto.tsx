import { motion } from 'framer-motion';
import { manifesto } from '@/config/eventConfig';
import { EyeOfHorus } from '@/components/MoonKnightVisuals';

const CRESCENT_MOON = 'https://images.pexels.com/photos/30554143/pexels-photo-30554143.jpeg?auto=compress&cs=tinysrgb&w=400';

export default function Manifesto() {
  return (
    <section className="relative bg-obsidian py-32 md:py-48 overflow-hidden">
      <div className="absolute inset-0 grain-overlay opacity-20 pointer-events-none" aria-hidden="true" />

      {/* Crescent moon photo — top right, heavily graded */}
      <div className="absolute right-[3%] top-[8%] pointer-events-none z-[1]">
        <div className="relative" style={{ width: 'min(280px, 30vw)', height: 'min(280px, 30vw)' }}>
          <img
            src={CRESCENT_MOON}
            alt=""
            className="w-full h-full object-cover rounded-full"
            style={{
              filter: 'brightness(0.3) contrast(1.5) grayscale(0.8) sepia(0.3)',
              opacity: 0.3,
              maskImage: 'radial-gradient(circle, black 40%, transparent 75%)',
              WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 75%)',
            }}
            loading="lazy"
          />
          <div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{ boxShadow: '0 0 80px 20px rgba(232, 227, 216, 0.04)' }}
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Eye of Horus — faint, bottom left */}
      <div className="absolute left-[4%] bottom-[8%] pointer-events-none hidden md:block z-[1]">
        <EyeOfHorus size={90} opacity={0.08} />
      </div>

      <div className="section-padding relative z-10">
        <div className="max-w-5xl mx-auto">
          {manifesto.map((line, i) => (
            <motion.h2
              key={line}
              initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-15%' }}
              transition={{
                duration: 1.2,
                delay: i * 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-serif font-light text-bone leading-[1.15] text-balance"
              style={{
                fontSize: 'clamp(2rem, 6vw, 5rem)',
                letterSpacing: '-0.01em',
                textShadow: '0 0 40px rgba(0,0,0,0.5)',
              }}
            >
              {line}
            </motion.h2>
          ))}

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="h-px bg-gradient-to-r from-ancient-gold/60 via-ash/30 to-transparent mt-16 origin-left"
          />
        </div>
      </div>
    </section>
  );
}
