import { motion, useReducedMotion } from 'framer-motion'
import { cx } from '../lib/cx'

/**
 * The AlaOak signature: thin forest-green branches grow upward from a gold
 * acorn, each fork tipped with a gold node — an oak growing from acorn to
 * canopy. Self-draws on mount; respects reduced-motion.
 */

type Seg = { d: string; delay: number; dur: number; w: number }
type Node = { cx: number; cy: number; r: number; delay: number }

const SEGMENTS: Seg[] = [
  { d: 'M210 452 C 206 410 210 384 208 352', delay: 0.15, dur: 0.7, w: 3 },
  { d: 'M208 352 C 195 322 150 316 120 286', delay: 0.75, dur: 0.6, w: 2.4 },
  { d: 'M208 352 C 225 322 270 314 300 288', delay: 0.75, dur: 0.6, w: 2.4 },
  { d: 'M208 352 C 210 320 208 292 206 264', delay: 0.8, dur: 0.6, w: 2.4 },
  { d: 'M120 286 C 100 260 78 252 62 222', delay: 1.3, dur: 0.55, w: 1.7 },
  { d: 'M120 286 C 128 252 150 236 158 206', delay: 1.3, dur: 0.55, w: 1.7 },
  { d: 'M300 288 C 320 260 340 252 356 224', delay: 1.3, dur: 0.55, w: 1.7 },
  { d: 'M300 288 C 292 254 270 236 262 208', delay: 1.35, dur: 0.55, w: 1.7 },
  { d: 'M206 264 C 200 234 205 212 200 184', delay: 1.35, dur: 0.55, w: 1.7 },
  { d: 'M62 222 C 50 198 55 180 44 160', delay: 1.85, dur: 0.5, w: 1.2 },
  { d: 'M158 206 C 160 184 150 170 150 148', delay: 1.85, dur: 0.5, w: 1.2 },
  { d: 'M356 224 C 366 198 360 178 372 158', delay: 1.85, dur: 0.5, w: 1.2 },
  { d: 'M262 208 C 262 184 270 168 272 148', delay: 1.9, dur: 0.5, w: 1.2 },
  { d: 'M200 184 C 196 160 202 144 198 122', delay: 1.9, dur: 0.5, w: 1.2 },
]

const NODES: Node[] = [
  { cx: 208, cy: 352, r: 3.2, delay: 0.8 },
  { cx: 120, cy: 286, r: 3, delay: 1.3 },
  { cx: 300, cy: 288, r: 3, delay: 1.3 },
  { cx: 206, cy: 264, r: 3, delay: 1.35 },
  { cx: 62, cy: 222, r: 2.6, delay: 1.85 },
  { cx: 158, cy: 206, r: 2.6, delay: 1.85 },
  { cx: 356, cy: 224, r: 2.6, delay: 1.85 },
  { cx: 262, cy: 208, r: 2.6, delay: 1.9 },
  { cx: 200, cy: 184, r: 2.6, delay: 1.9 },
  { cx: 44, cy: 160, r: 2.2, delay: 2.35 },
  { cx: 150, cy: 148, r: 2.2, delay: 2.35 },
  { cx: 372, cy: 158, r: 2.2, delay: 2.35 },
  { cx: 272, cy: 148, r: 2.2, delay: 2.35 },
  { cx: 198, cy: 122, r: 2.6, delay: 2.4 },
]

export function BranchMotif({ className }: { className?: string }) {
  const reduce = useReducedMotion()

  return (
    <svg
      viewBox="0 0 420 480"
      className={cx('h-full w-full', className)}
      fill="none"
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="acornGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#B9892E" stopOpacity="0.45" />
          <stop offset="70%" stopColor="#B9892E" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* faint enclosing-ring watermark (echoes the logo) */}
      <circle cx="210" cy="250" r="196" stroke="#E3DCCB" strokeWidth="1" opacity="0.7" />
      <circle cx="210" cy="250" r="150" stroke="#E3DCCB" strokeWidth="1" opacity="0.5" />

      {/* branches */}
      {SEGMENTS.map((s, i) => (
        <motion.path
          key={i}
          d={s.d}
          stroke="#2E5D34"
          strokeWidth={s.w}
          strokeLinecap="round"
          initial={reduce ? false : { pathLength: 0, opacity: 0 }}
          animate={reduce ? undefined : { pathLength: 1, opacity: 0.9 }}
          transition={{ duration: s.dur, delay: s.delay, ease: [0.4, 0, 0.2, 1] }}
        />
      ))}

      {/* gold node-dots */}
      {NODES.map((n, i) => (
        <motion.circle
          key={i}
          cx={n.cx}
          cy={n.cy}
          r={n.r}
          fill="#B9892E"
          initial={reduce ? false : { scale: 0, opacity: 0 }}
          animate={reduce ? undefined : { scale: 1, opacity: 0.95 }}
          transition={{ duration: 0.4, delay: n.delay, ease: 'backOut' }}
          style={{ transformOrigin: `${n.cx}px ${n.cy}px` }}
        />
      ))}

      {/* acorn root — the always-brightest north-star node */}
      <motion.g
        initial={reduce ? false : { scale: 0, opacity: 0 }}
        animate={reduce ? undefined : { scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.05, ease: 'backOut' }}
        style={{ transformOrigin: '210px 452px' }}
      >
        <circle cx="210" cy="450" r="46" fill="url(#acornGlow)" />
        <g transform="translate(210 448) scale(1.5)">
          <path d="M-5 1 C -5 7, 0 12, 0 12 C 0 12, 5 7, 5 1 Z" fill="#B9892E" />
          <path d="M-6 1 C -6 -3, 6 -3, 6 1 C 6 3, -6 3, -6 1 Z" fill="#7A5A24" />
          <line x1="0" y1="-3" x2="0" y2="-6.5" stroke="#7A5A24" strokeWidth="1.4" strokeLinecap="round" />
        </g>
      </motion.g>
    </svg>
  )
}
