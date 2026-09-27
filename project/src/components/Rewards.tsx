import { motion } from 'framer-motion';
import { rewards } from '@/config/eventConfig';

function TrophySVG({ rank }: { rank: string }) {
  return (
    <svg viewBox="0 0 120 120" className="w-full h-full" aria-hidden="true">
      <defs>
        <linearGradient id={`trophy-${rank}`} x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#A88A5A" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#A88A5A" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      {/* Trophy silhouette */}
      <g stroke="#A88A5A" strokeOpacity="0.25" strokeWidth="0.5" fill="none">
        <path d="M 40 25 L 40 55 C 40 70, 55 75, 60 75 C 65 75, 80 70, 80 55 L 80 25 Z" />
        <path d="M 40 30 C 30 30, 28 45, 35 50" />
        <path d="M 80 30 C 90 30, 92 45, 85 50" />
        <line x1="60" y1="75" x2="60" y2="88" />
        <rect x="48" y="88" width="24" height="6" />
        <rect x="42" y="94" width="36" height="8" />
      </g>
      <path
        d="M 40 25 L 40 55 C 40 70, 55 75, 60 75 C 65 75, 80 70, 80 55 L 80 25 Z"
        fill={`url(#trophy-${rank})`}
      />
    </svg>
  );
}

export default function Rewards() {
  return (
    <section id="rewards" className="relative bg-obsidian py-28 md:py-40 overflow-hidden">
      <div className="absolute inset-0 grain-overlay opacity-20 pointer-events-none" aria-hidden="true" />

      <div className="section-padding">
        {/* Header */}
        <div className="mb-20 md:mb-28">
          <span className="mono-label block mb-6">SECTION // 07</span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2
              className="font-serif font-light text-bone leading-[1.1]"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              Rewards
            </h2>
            <div className="text-right">
              <span className="font-mono text-xs tracking-[0.3em] text-ash uppercase block mb-2">
                Prize Pool
              </span>
              <span
                className="font-serif font-light text-ancient-gold"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
              >
                {rewards.pool}
              </span>
            </div>
          </div>
        </div>

        {/* Main prizes — asymmetric, not a grid */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-6 mb-24">
          {/* First place — large */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-7 md:row-span-2 relative bg-deep-shadow/50 border border-ash/10 p-10 md:p-14 flex flex-col justify-between min-h-[280px] md:min-h-[420px] hover:border-ancient-gold/30 transition-colors duration-700"
          >
            <div className="absolute top-8 right-8 w-20 h-20 opacity-60">
              <TrophySVG rank="01" />
            </div>
            <div>
              <span className="font-mono text-xs tracking-[0.3em] text-ancient-gold mb-6 block">
                RANK 01
              </span>
              <h3
                className="font-serif font-light text-bone leading-[1.1] mb-6"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
              >
                {rewards.prizes[0].title}
              </h3>
            </div>
            <div>
              <div className="h-px w-16 bg-ancient-gold/40 mb-4" />
              <span
                className="font-serif font-light text-bone"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}
              >
                {rewards.prizes[0].amount}
              </span>
            </div>
          </motion.div>

          {/* Second place */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-5 relative bg-deep-shadow/30 border border-ash/10 p-8 md:p-10 hover:border-ancient-gold/20 transition-colors duration-700"
          >
            <span className="font-mono text-xs tracking-[0.3em] text-ash mb-5 block">
              RANK 02
            </span>
            <h3 className="font-serif font-light text-bone text-2xl md:text-3xl mb-4">
              {rewards.prizes[1].title}
            </h3>
            <span className="font-serif font-light text-lunar-silver text-xl md:text-2xl">
              {rewards.prizes[1].amount}
            </span>
          </motion.div>

          {/* Third place */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-5 relative bg-deep-shadow/30 border border-ash/10 p-8 md:p-10 hover:border-ancient-gold/20 transition-colors duration-700"
          >
            <span className="font-mono text-xs tracking-[0.3em] text-ash mb-5 block">
              RANK 03
            </span>
            <h3 className="font-serif font-light text-bone text-2xl md:text-3xl mb-4">
              {rewards.prizes[2].title}
            </h3>
            <span className="font-serif font-light text-lunar-silver text-xl md:text-2xl">
              {rewards.prizes[2].amount}
            </span>
          </motion.div>
        </div>

        {/* Special recognitions */}
        <div>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mono-label block mb-10"
          >
            Special Recognitions
          </motion.span>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ash/10">
            {rewards.special.map((rec, i) => (
              <motion.div
                key={rec.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-5%' }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="bg-obsidian p-6 md:p-8 hover:bg-deep-shadow/50 transition-colors duration-500 group"
              >
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="font-mono text-[10px] text-ancient-gold/50 tracking-widest">
                    0{i + 1}
                  </span>
                  <h4 className="font-serif font-light text-bone text-lg md:text-xl group-hover:text-ancient-gold transition-colors duration-300">
                    {rec.title}
                  </h4>
                </div>
                <p className="font-mono text-xs text-ash tracking-wide">
                  {rec.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
