import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { event } from '@/config/eventConfig';
import { EyeOfHorus, Ankh } from '@/components/MoonKnightVisuals';

// Atmospheric images — real photography, CSS-graded to match the Moon Knight palette
const HERO_FIGURE = 'https://images.pexels.com/photos/19406595/pexels-photo-19406595.jpeg?auto=compress&cs=tinysrgb&w=900';
const CRESCENT_MOON = 'https://images.pexels.com/photos/30554143/pexels-photo-30554143.jpeg?auto=compress&cs=tinysrgb&w=600';
const SMOKE_TEXTURE = 'https://images.pexels.com/photos/9694697/pexels-photo-9694697.jpeg?auto=compress&cs=tinysrgb&w=800';
const DARK_TEXTURE = 'https://images.pexels.com/photos/5622897/pexels-photo-5622897.jpeg?auto=compress&cs=tinysrgb&w=1600';

function DustParticles() {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2.5 + 0.5,
    duration: Math.random() * 10 + 8,
    delay: Math.random() * 6,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-bone/30"
          style={{ width: p.size, height: p.size, left: `${p.x}%`, top: `${p.y}%` }}
          animate={{
            y: [0, -40, 0],
            x: [0, 15, 0],
            opacity: [0, 0.35, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const [reduceMotion, setReduceMotion] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(mq.matches);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    const handleMouse = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const dx = (e.clientX - rect.left - cx) / cx;
      const dy = (e.clientY - rect.top - cy) / cy;
      setParallax({ x: dx * 15, y: dy * 10 });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, [reduceMotion]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-obsidian"
    >
      {/* === Layer 1: Dark concrete texture — very subtle base === */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${DARK_TEXTURE})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15,
          mixBlendMode: 'overlay',
        }}
        aria-hidden="true"
      />

      {/* === Layer 2: Crescent moon — large, behind figure, top area === */}
      <motion.div
        className="absolute left-1/2 top-[18%] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[1]"
        style={{
          x: reduceMotion ? 0 : -parallax.x * 0.2,
          y: reduceMotion ? 0 : -parallax.y * 0.2,
        }}
      >
        <div
          className="relative"
          style={{
            width: 'min(480px, 50vw)',
            height: 'min(480px, 50vw)',
          }}
        >
          <img
            src={CRESCENT_MOON}
            alt=""
            className="w-full h-full object-cover rounded-full"
            style={{
              filter: 'brightness(0.4) contrast(1.5) grayscale(0.8) sepia(0.3)',
              opacity: 0.5,
              maskImage: 'radial-gradient(circle, black 40%, transparent 75%)',
              WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 75%)',
            }}
            loading="eager"
          />
          {/* Glow ring around moon */}
          <div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              boxShadow: '0 0 120px 40px rgba(232, 227, 216, 0.06)',
            }}
            aria-hidden="true"
          />
        </div>
      </motion.div>

      {/* === Layer 3: Smoke / fog texture — drifting atmosphere === */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-[1]"
        animate={reduceMotion ? {} : { opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <img
          src={SMOKE_TEXTURE}
          alt=""
          className="w-full h-full object-cover"
          style={{
            filter: 'brightness(0.3) contrast(1.2)',
            mixBlendMode: 'screen',
            opacity: 0.2,
            maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
          }}
          loading="eager"
        />
      </motion.div>

      {/* === Layer 4: The hooded figure — main centerpiece === */}
      <motion.div
        className="absolute inset-0 flex items-end justify-center pointer-events-none z-[2]"
        style={{
          x: reduceMotion ? 0 : parallax.x,
          y: reduceMotion ? 0 : parallax.y,
        }}
        transition={{ type: 'tween', duration: 0.3 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 1.05 }}
          animate={{ opacity: loaded ? 1 : 0, y: 0, scale: 1 }}
          transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[90vh] max-h-[800px]"
          style={{
            width: 'min(500px, 85vw)',
          }}
        >
          <img
            src={HERO_FIGURE}
            alt="A hooded figure shrouded in darkness"
            className="w-full h-full object-cover object-top"
            style={{
              filter: 'grayscale(1) contrast(1.4) brightness(0.45) sepia(0.15)',
              maskImage: 'linear-gradient(to bottom, black 0%, black 50%, transparent 95%), radial-gradient(ellipse at center, black 50%, transparent 80%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 50%, transparent 95%), radial-gradient(ellipse at center, black 50%, transparent 80%)',
              maskComposite: 'intersect',
              WebkitMaskComposite: 'source-in',
            }}
            onLoad={() => setLoaded(true)}
            loading="eager"
          />
          {/* Color grade overlay — bone tint on figure */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(180deg, rgba(232,227,216,0.08) 0%, transparent 40%, rgba(168,138,90,0.04) 80%, transparent 100%)',
              mixBlendMode: 'overlay',
              maskImage: 'linear-gradient(to bottom, black 0%, black 50%, transparent 95%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 50%, transparent 95%)',
            }}
            aria-hidden="true"
          />
          {/* Edge glow — moonlight rim from left */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(105deg, rgba(216,225,229,0.12) 0%, transparent 30%)',
              mixBlendMode: 'screen',
              maskImage: 'linear-gradient(to bottom, black 0%, black 50%, transparent 95%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 50%, transparent 95%)',
            }}
            aria-hidden="true"
          />
        </motion.div>
      </motion.div>

      {/* === Layer 5: Egyptian symbols — floating at edges === */}
      <motion.div
        className="absolute left-[6%] top-[28%] pointer-events-none z-[3] hidden md:block"
        animate={reduceMotion ? {} : { y: [0, -12, 0], opacity: [0.12, 0.2, 0.12] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <EyeOfHorus size={80} opacity={0.15} />
      </motion.div>
      <motion.div
        className="absolute right-[6%] top-[25%] pointer-events-none z-[3] hidden md:block"
        animate={reduceMotion ? {} : { y: [0, 10, 0], opacity: [0.1, 0.18, 0.1] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      >
        <Ankh size={60} opacity={0.12} />
      </motion.div>

      {/* === Layer 6: Grain overlay === */}
      <div className="absolute inset-0 grain-overlay opacity-30 pointer-events-none z-[4]" aria-hidden="true" />

      {/* === Layer 7: Radial vignette === */}
      <div
        className="absolute inset-0 pointer-events-none z-[5]"
        style={{ background: 'radial-gradient(ellipse at 50% 40%, transparent 25%, rgba(5,5,5,0.7) 70%, #050505 95%)' }}
        aria-hidden="true"
      />

      <DustParticles />

      {/* === Content === */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-20">
        {/* Top metadata */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mb-10 md:mb-14"
        >
          {[event.id, event.date, event.duration, event.location].map((item, i) => (
            <span key={item} className="font-mono text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.3em] text-ash flex items-center">
              {i > 0 && <span className="mr-5 text-ash/40">·</span>}
              {item}
            </span>
          ))}
        </motion.div>

        {/* SPECTOR */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif font-light text-bone leading-none"
          style={{ fontSize: 'clamp(4.5rem, 16vw, 13rem)', letterSpacing: '0.08em', textShadow: '0 0 80px rgba(232,227,216,0.15), 0 0 30px rgba(0,0,0,0.8)' }}
        >
          {event.title}
        </motion.h1>

        {/* CODE AFTER DARK */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.7 }}
          className="font-mono text-xs sm:text-sm md:text-base tracking-[0.5em] text-lunar-silver mt-4 md:mt-6 pl-2"
          style={{ textShadow: '0 0 20px rgba(0,0,0,0.8)' }}
        >
          {event.subtitle}
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="font-sans text-sm md:text-base text-lunar-silver/70 mt-8 md:mt-10 max-w-md leading-relaxed"
          style={{ textShadow: '0 0 20px rgba(0,0,0,0.8)' }}
        >
          {event.tagline}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-10 md:mt-12"
        >
          <a
            href="#intel"
            className="px-8 py-3.5 bg-bone text-obsidian font-mono text-xs tracking-[0.25em] uppercase font-medium hover:bg-ancient-gold transition-colors duration-500"
          >
            ACCEPT THE MISSION
          </a>
          <a
            href="#operations"
            className="px-8 py-3.5 border border-ash/30 text-lunar-silver font-mono text-xs tracking-[0.25em] uppercase hover:border-bone/60 hover:text-bone transition-all duration-500"
          >
            VIEW OPERATIONS
          </a>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-obsidian to-transparent pointer-events-none z-10" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[9px] tracking-[0.3em] text-ash uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-ash/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
