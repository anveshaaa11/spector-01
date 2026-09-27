import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { nav, event } from '@/config/eventConfig';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-obsidian/90 backdrop-blur-md border-b border-ash/10'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <nav className="section-padding flex items-center justify-between h-16 md:h-20">
          {/* Left: logo */}
          <a
            href="#"
            className="font-mono text-xs md:text-sm tracking-[0.3em] text-bone uppercase hover:text-ancient-gold transition-colors duration-300"
          >
            {event.title} // 01
          </a>

          {/* Center: nav links */}
          <div className="hidden lg:flex items-center gap-8">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-mono text-[11px] tracking-[0.2em] text-lunar-silver/60 uppercase hover:text-bone transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right: CTA + mobile toggle */}
          <div className="flex items-center gap-4">
            <a
              href="#intel"
              className="hidden md:inline-flex font-mono text-[11px] tracking-[0.2em] text-ancient-gold uppercase hover:text-bone transition-colors duration-300 border border-ancient-gold/30 px-4 py-2 hover:border-bone/40"
            >
              ACCEPT MISSION
            </a>
            <button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden text-bone p-1"
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-obsidian flex flex-col"
          >
            <div className="section-padding flex items-center justify-between h-16 md:h-20 border-b border-ash/10">
              <span className="font-mono text-xs tracking-[0.3em] text-bone uppercase">
                {event.title} // 01
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-bone p-1"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center items-center gap-2">
              {nav.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                  className="font-serif font-light text-bone text-3xl md:text-4xl py-3 hover:text-ancient-gold transition-colors duration-300"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>

            <div className="section-padding pb-12 flex flex-col items-center gap-6">
              <a
                href="#intel"
                onClick={() => setMenuOpen(false)}
                className="px-8 py-3.5 bg-ancient-gold text-obsidian font-mono text-xs tracking-[0.25em] uppercase font-medium"
              >
                ACCEPT THE MISSION
              </a>
              <p className="font-mono text-[10px] tracking-[0.2em] text-ash/40 uppercase">
                {event.date} · {event.location}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
