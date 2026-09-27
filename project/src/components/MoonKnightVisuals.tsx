// Shared SVG decorative elements — Moon Knight inspired visual language
// Crescent moon, Eye of Horus, ankh, hieroglyph borders, linen bandage texture

export function CrescentMoon({
  size = 200,
  className = '',
  opacity = 1,
}: {
  size?: number;
  className?: string;
  opacity?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={className}
      style={{ opacity }}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="crescentGlow" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#E8E3D8" stopOpacity="0.15" />
          <stop offset="50%" stopColor="#E8E3D8" stopOpacity="0.04" />
          <stop offset="100%" stopColor="#E8E3D8" stopOpacity="0" />
        </radialGradient>
        <filter id="moonBlur">
          <feGaussianBlur stdDeviation="4" />
        </filter>
      </defs>
      {/* Outer glow */}
      <circle cx="100" cy="100" r="95" fill="url(#crescentGlow)" />
      {/* Crescent shape — outer circle minus inner offset circle */}
      <path
        d="M 100 20
           A 80 80 0 1 0 100 180
           A 65 65 0 1 1 100 20
           Z"
        fill="#E8E3D8"
        fillOpacity="0.12"
        filter="url(#moonBlur)"
      />
      {/* Crisper crescent edge */}
      <path
        d="M 100 20
           A 80 80 0 1 0 100 180
           A 65 65 0 1 1 100 20
           Z"
        fill="none"
        stroke="#E8E3D8"
        strokeOpacity="0.25"
        strokeWidth="1"
      />
      {/* Thin inner crescent ring */}
      <circle cx="100" cy="100" r="80" fill="none" stroke="#A88A5A" strokeOpacity="0.15" strokeWidth="0.5" />
    </svg>
  );
}

export function EyeOfHorus({
  size = 60,
  className = '',
  opacity = 0.15,
}: {
  size?: number;
  className?: string;
  opacity?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      style={{ opacity }}
      aria-hidden="true"
    >
      <g stroke="#A88A5A" strokeWidth="1.5" fill="none" strokeLinecap="round">
        {/* Eye body */}
        <path d="M 15 50 Q 35 30, 55 50 Q 35 70, 15 50 Z" />
        {/* Pupil */}
        <circle cx="40" cy="50" r="6" fill="#A88A5A" fillOpacity="0.3" />
        {/* Upper sweep */}
        <path d="M 30 32 Q 45 22, 60 28" />
        {/* Lower tear line */}
        <path d="M 55 55 Q 58 68, 52 78" />
        <path d="M 50 56 Q 50 70, 45 75" />
        {/* Tail */}
        <path d="M 60 50 Q 75 48, 85 42" />
      </g>
    </svg>
  );
}

export function Ankh({
  size = 50,
  className = '',
  opacity = 0.15,
}: {
  size?: number;
  className?: string;
  opacity?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 50 80"
      className={className}
      style={{ opacity }}
      aria-hidden="true"
    >
      <g stroke="#A88A5A" strokeWidth="2" fill="none" strokeLinecap="round">
        {/* Loop */}
        <ellipse cx="25" cy="18" rx="12" ry="15" />
        {/* Vertical stem */}
        <line x1="25" y1="33" x2="25" y2="75" />
        {/* Crossbar */}
        <line x1="10" y1="48" x2="40" y2="48" />
      </g>
    </svg>
  );
}

export function HieroglyphBorder({
  className = '',
  opacity = 0.08,
}: {
  className?: string;
  opacity?: number;
}) {
  return (
    <svg
      width="100%"
      height="40"
      viewBox="0 0 400 40"
      className={className}
      style={{ opacity }}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <g stroke="#A88A5A" strokeWidth="0.5" fill="none">
        {/* Repeating Egyptian-inspired pattern */}
        <line x1="0" y1="20" x2="400" y2="20" />
        {Array.from({ length: 20 }, (_, i) => {
          const x = i * 20;
          return (
            <g key={i}>
              <line x1={x} y1="8" x2={x} y2="32" />
              <circle cx={x} cy="20" r="2" />
              {i % 3 === 0 && <line x1={x} y1="4" x2={x + 10} y2="4" />}
              {i % 3 === 0 && <line x1={x} y1="36" x2={x + 10} y2="36" />}
            </g>
          );
        })}
      </g>
    </svg>
  );
}

export function MoonKnightSilhouette() {
  // The centerpiece: a white/linen hooded figure against darkness.
  // Bone-colored robes, pointed cowl, visible bandage wrapping,
  // crescent moon behind, Egyptian symbols faintly visible.
  return (
    <svg
      viewBox="0 0 400 700"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <defs>
        {/* Linen / bone gradient for the robe — lighter at top, darker toward bottom */}
        <linearGradient id="robeLinen" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#E8E3D8" stopOpacity="0.95" />
          <stop offset="30%" stopColor="#D8D3C8" stopOpacity="0.85" />
          <stop offset="60%" stopColor="#B5B0A5" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#777A7D" stopOpacity="0.5" />
        </linearGradient>
        {/* Hood gradient — bone white with depth */}
        <linearGradient id="hoodLinen" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#E8E3D8" stopOpacity="0.98" />
          <stop offset="50%" stopColor="#D5D0C5" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#A8A39A" stopOpacity="0.75" />
        </linearGradient>
        {/* Inner hood shadow — the face void */}
        <radialGradient id="faceVoid" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#050505" />
          <stop offset="60%" stopColor="#0a0a0c" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#15151a" stopOpacity="0.7" />
        </radialGradient>
        {/* Crescent glow */}
        <radialGradient id="moonGlow" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="#E8E3D8" stopOpacity="0.12" />
          <stop offset="60%" stopColor="#E8E3D8" stopOpacity="0.03" />
          <stop offset="100%" stopColor="#E8E3D8" stopOpacity="0" />
        </radialGradient>
        <filter id="softBlur">
          <feGaussianBlur stdDeviation="2" />
        </filter>
      </defs>

      {/* === Crescent moon — prominent, behind the figure === */}
      <g transform="translate(200, 180)">
        <circle cx="0" cy="0" r="140" fill="url(#moonGlow)" />
        {/* Crescent shape */}
        <path
          d="M 0 -120
             A 120 120 0 1 0 0 120
             A 95 95 0 1 1 0 -120
             Z"
          fill="#E8E3D8"
          fillOpacity="0.06"
          filter="url(#softBlur)"
        />
        <path
          d="M 0 -120
             A 120 120 0 1 0 0 120
             A 95 95 0 1 1 0 -120
             Z"
          fill="none"
          stroke="#E8E3D8"
          strokeOpacity="0.15"
          strokeWidth="1"
        />
      </g>

      {/* === Lunar geometry rings === */}
      <circle cx="200" cy="300" r="180" fill="none" stroke="#E8E3D8" strokeOpacity="0.04" strokeWidth="0.5" />
      <circle cx="200" cy="300" r="200" fill="none" stroke="#A88A5A" strokeOpacity="0.06" strokeWidth="0.5" strokeDasharray="2 10" />

      {/* === Egyptian hieroglyph decorations — faint === */}
      <g opacity="0.12">
        {/* Eye of Horus — left side */}
        <g transform="translate(70, 350) scale(0.8)">
          <path d="M 15 50 Q 35 30, 55 50 Q 35 70, 15 50 Z" stroke="#A88A5A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <circle cx="40" cy="50" r="5" fill="#A88A5A" fillOpacity="0.4" />
          <path d="M 30 32 Q 45 22, 60 28" stroke="#A88A5A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M 55 55 Q 58 68, 52 78" stroke="#A88A5A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M 60 50 Q 75 48, 85 42" stroke="#A88A5A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </g>
        {/* Ankh — right side */}
        <g transform="translate(310, 340) scale(0.7)">
          <ellipse cx="25" cy="18" rx="12" ry="15" stroke="#A88A5A" strokeWidth="2" fill="none" />
          <line x1="25" y1="33" x2="25" y2="75" stroke="#A88A5A" strokeWidth="2" strokeLinecap="round" />
          <line x1="10" y1="48" x2="40" y2="48" stroke="#A88A5A" strokeWidth="2" strokeLinecap="round" />
        </g>
      </g>

      {/* === Cape/robe — flowing linen, bone-white === */}
      <path
        d="M 60 700
           C 55 560, 65 460, 95 410
           L 135 380
           C 150 370, 250 370, 265 380
           L 305 410
           C 335 460, 345 560, 340 700
           Z"
        fill="url(#robeLinen)"
      />

      {/* === Cape flowing edges — wider, dramatic === */}
      <path
        d="M 40 700
           C 35 580, 45 480, 80 420
           L 95 410
           C 65 460, 55 560, 60 700
           Z"
        fill="#E8E3D8"
        fillOpacity="0.5"
      />
      <path
        d="M 360 700
           C 365 580, 355 480, 320 420
           L 305 410
           C 335 460, 345 560, 340 700
           Z"
        fill="#E8E3D8"
        fillOpacity="0.5"
      />

      {/* === Linen bandage wrapping lines on robe === */}
      <g stroke="#777A7D" strokeOpacity="0.25" strokeWidth="0.8" fill="none">
        <path d="M 75 430 Q 200 415, 325 430" />
        <path d="M 72 460 Q 200 445, 328 460" />
        <path d="M 68 495 Q 200 478, 332 495" />
        <path d="M 65 535 Q 200 518, 335 535" />
        <path d="M 62 580 Q 200 562, 338 580" />
        <path d="M 60 630 Q 200 612, 340 630" />
        <path d="M 58 670 Q 200 655, 342 670" />
      </g>

      {/* === Diagonal bandage wraps on chest === */}
      <g stroke="#777A7D" strokeOpacity="0.15" strokeWidth="0.6" fill="none">
        <path d="M 110 380 L 290 420" />
        <path d="M 120 370 L 280 410" />
        <path d="M 130 365 L 270 400" />
      </g>

      {/* === Shoulders === */}
      <path
        d="M 95 410
           C 100 395, 115 385, 135 380
           L 165 370
           C 175 365, 225 365, 235 370
           L 265 380
           C 285 385, 300 395, 305 410
           Z"
        fill="url(#hoodLinen)"
      />

      {/* === Hood — pointed cowl, bone-white === */}
      <path
        d="M 135 380
           C 100 350, 80 290, 85 230
           C 90 160, 120 100, 200 90
           C 280 100, 310 160, 315 230
           C 320 290, 300 350, 265 380
           L 235 370
           C 225 365, 175 365, 165 370
           Z"
        fill="url(#hoodLinen)"
      />

      {/* === Hood pointed top — extra dramatic point === */}
      <path
        d="M 180 90
           C 190 60, 210 60, 220 90
           C 210 75, 190 75, 180 90
           Z"
        fill="url(#hoodLinen)"
      />

      {/* === Face void — dark interior of hood === */}
      <path
        d="M 155 360
           C 130 330, 120 275, 130 225
           C 138 180, 160 145, 200 138
           C 240 145, 262 180, 270 225
           C 280 275, 270 330, 245 360
           Z"
        fill="url(#faceVoid)"
      />

      {/* === Bandage wrapping across face — crossing lines === */}
      <g stroke="#E8E3D8" strokeOpacity="0.35" strokeWidth="1.2" fill="none">
        {/* Horizontal wraps */}
        <path d="M 135 200 Q 200 190, 265 200" />
        <path d="M 130 225 Q 200 215, 270 225" />
        <path d="M 132 255 Q 200 245, 268 255" />
        {/* Diagonal wraps */}
        <path d="M 140 180 L 260 230" />
        <path d="M 145 240 L 255 195" />
        {/* Eye gap — two horizontal breaks for eyes */}
        <path d="M 145 210 L 175 210" />
        <path d="M 225 210 L 255 210" />
      </g>

      {/* === Moonlight rim light on hood — left edge === */}
      <path
        d="M 135 380
           C 100 350, 80 290, 85 230
           C 90 160, 120 100, 200 90"
        fill="none"
        stroke="#D8E1E5"
        strokeOpacity="0.5"
        strokeWidth="1.5"
      />

      {/* === Moonlight rim — right edge, slightly less === */}
      <path
        d="M 265 380
           C 300 350, 320 290, 315 230
           C 310 160, 280 100, 200 90"
        fill="none"
        stroke="#D8E1E5"
        strokeOpacity="0.3"
        strokeWidth="1"
      />

      {/* === Hood inner edge highlight === */}
      <path
        d="M 155 360
           C 130 330, 120 275, 130 225
           C 138 180, 160 145, 200 138"
        fill="none"
        stroke="#BFC3C7"
        strokeOpacity="0.2"
        strokeWidth="0.8"
      />

      {/* === Subtle glow at hood point === */}
      <circle cx="200" cy="70" r="25" fill="#E8E3D8" fillOpacity="0.04" filter="url(#softBlur)" />

      {/* === Crescent symbol on chest === */}
      <g transform="translate(200, 430)">
        <path
          d="M 0 -18
             A 18 18 0 1 0 0 18
             A 14 14 0 1 1 0 -18
             Z"
          fill="#A88A5A"
          fillOpacity="0.25"
        />
        <path
          d="M 0 -18
             A 18 18 0 1 0 0 18
             A 14 14 0 1 1 0 -18
             Z"
          fill="none"
          stroke="#A88A5A"
          strokeOpacity="0.5"
          strokeWidth="0.8"
        />
      </g>
    </svg>
  );
}

export function MoonKnightSilhouetteCrop() {
  // A cropped version for the Final CTA — lower body + partial hood
  return (
    <svg
      viewBox="0 0 300 600"
      className="w-full h-full"
      preserveAspectRatio="xMidYMax meet"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="cropRobe" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#E8E3D8" stopOpacity="0.9" />
          <stop offset="40%" stopColor="#C5C0B5" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#777A7D" stopOpacity="0.4" />
        </linearGradient>
        <linearGradient id="cropHood" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#E8E3D8" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#A8A39A" stopOpacity="0.75" />
        </linearGradient>
        <radialGradient id="cropFaceVoid" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#050505" />
          <stop offset="100%" stopColor="#15151a" stopOpacity="0.7" />
        </radialGradient>
      </defs>

      {/* Crescent moon glow behind */}
      <circle cx="150" cy="180" r="90" fill="#E8E3D8" fillOpacity="0.04" />

      {/* Robe */}
      <path
        d="M 30 600
           C 28 480, 45 400, 75 360
           L 105 340
           C 115 335, 185 335, 195 340
           L 225 360
           C 255 400, 272 480, 270 600
           Z"
        fill="url(#cropRobe)"
      />

      {/* Cape edges */}
      <path d="M 15 600 C 18 490, 35 410, 60 370 L 75 360 C 45 400, 28 480, 30 600 Z" fill="#E8E3D8" fillOpacity="0.45" />
      <path d="M 285 600 C 282 490, 265 410, 240 370 L 225 360 C 255 400, 272 480, 270 600 Z" fill="#E8E3D8" fillOpacity="0.45" />

      {/* Bandage wraps */}
      <g stroke="#777A7D" strokeOpacity="0.22" strokeWidth="0.7" fill="none">
        <path d="M 40 380 Q 150 368, 260 380" />
        <path d="M 36 410 Q 150 397, 264 410" />
        <path d="M 33 445 Q 150 432, 267 445" />
        <path d="M 30 485 Q 150 470, 270 485" />
        <path d="M 28 530 Q 150 515, 272 530" />
        <path d="M 26 575 Q 150 560, 274 575" />
      </g>

      {/* Shoulders */}
      <path
        d="M 75 360 C 80 345, 95 335, 105 340 L 130 330 C 140 325, 160 325, 170 330 L 195 340 C 205 335, 220 345, 225 360 Z"
        fill="url(#cropHood)"
      />

      {/* Hood */}
      <path
        d="M 105 340
           C 78 315, 65 270, 70 220
           C 75 160, 100 110, 150 100
           C 200 110, 225 160, 230 220
           C 235 270, 222 315, 195 340
           L 170 330
           C 160 325, 140 325, 130 330
           Z"
        fill="url(#cropHood)"
      />

      {/* Hood point */}
      <path d="M 138 100 C 145 78, 155 78, 162 100 C 155 88, 145 88, 138 100 Z" fill="url(#cropHood)" />

      {/* Face void */}
      <path
        d="M 122 325
           C 102 300, 95 255, 105 215
           C 112 175, 128 145, 150 140
           C 172 145, 188 175, 195 215
           C 205 255, 198 300, 178 325
           Z"
        fill="url(#cropFaceVoid)"
      />

      {/* Bandage wraps on face */}
      <g stroke="#E8E3D8" strokeOpacity="0.3" strokeWidth="1" fill="none">
        <path d="M 108 190 Q 150 182, 192 190" />
        <path d="M 105 215 Q 150 207, 195 215" />
        <path d="M 107 240 Q 150 232, 193 240" />
        <path d="M 112 170 L 188 210" />
        <path d="M 116 225 L 184 185" />
      </g>

      {/* Rim light */}
      <path d="M 105 340 C 78 315, 65 270, 70 220 C 75 160, 100 110, 150 100" fill="none" stroke="#D8E1E5" strokeOpacity="0.4" strokeWidth="1.2" />

      {/* Crescent on chest */}
      <g transform="translate(150, 380)">
        <path d="M 0 -14 A 14 14 0 1 0 0 14 A 11 11 0 1 1 0 -14 Z" fill="#A88A5A" fillOpacity="0.25" stroke="#A88A5A" strokeOpacity="0.4" strokeWidth="0.6" />
      </g>
    </svg>
  );
}
