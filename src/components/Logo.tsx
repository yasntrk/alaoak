import { cx } from '../lib/cx'

/** The AlaOak brand mark — oak leaf + gold acorn inside the enclosing ring. */
export function Mark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-label="AlaOak" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="27" fill="none" stroke="#1F4A2B" strokeWidth="1.7" />
      <path d="M30 12 C 21 21, 21 35, 30 45 C 39 35, 39 21, 30 12 Z" fill="#25623A" />
      <path d="M30 15 L30 42" stroke="#FAF7F0" strokeWidth="1.1" opacity="0.55" />
      <path
        d="M30 23 L24.5 26 M30 23 L35.5 26 M30 30 L25 33 M30 30 L35 33"
        stroke="#FAF7F0"
        strokeWidth="0.9"
        opacity="0.4"
        fill="none"
      />
      <g transform="translate(33 33)">
        <path d="M-5 1 C -5 7, 0 12, 0 12 C 0 12, 5 7, 5 1 Z" fill="#B9892E" />
        <path d="M-6 1 C -6 -3, 6 -3, 6 1 C 6 3, -6 3, -6 1 Z" fill="#7A5A24" />
        <line x1="0" y1="-3" x2="0" y2="-6" stroke="#7A5A24" strokeWidth="1.4" strokeLinecap="round" />
      </g>
    </svg>
  )
}

/**
 * Full logo lockup: mark + "AlaOak" wordmark (Ala = forest, Oak = ink).
 * To use your own raster logo instead, drop it at public/logo.png and swap
 * <Mark /> for <img src="/logo.png" ... />.
 */
export function Logo({ className, showWordmark = true }: { className?: string; showWordmark?: boolean }) {
  return (
    <span className={cx('inline-flex items-center gap-2.5', className)}>
      <Mark className="h-9 w-9 shrink-0" />
      {showWordmark && (
        <span className="font-serif text-[1.4rem] font-semibold leading-none tracking-tight">
          <span className="text-forest">Ala</span>
          <span className="text-ink">Oak</span>
        </span>
      )}
    </span>
  )
}
