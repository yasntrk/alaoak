import { cx } from '../lib/cx'

/**
 * A tasteful, on-brand "Google Play" install button. The play glyph uses the
 * AlaOak green→gold gradient rather than Google's exact multicolor mark.
 * When you publish, you may swap this for Google's official badge asset.
 */
export function PlayBadge({
  href,
  top = 'GET IT ON',
  store = 'Google Play',
  onDark = false,
  className,
}: {
  href: string
  top?: string
  store?: string
  onDark?: boolean
  className?: string
}) {
  const external = href.startsWith('http')
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className={cx(
        'group inline-flex items-center gap-3 rounded-xl px-4 py-2.5 transition-all duration-200',
        onDark
          ? 'bg-ivory text-forest-deep hover:bg-white'
          : 'bg-ink text-ivory hover:-translate-y-0.5 hover:shadow-card',
        className,
      )}
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="playg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3E8E52" />
            <stop offset="55%" stopColor="#2E5D34" />
            <stop offset="100%" stopColor="#B9892E" />
          </linearGradient>
        </defs>
        <path
          d="M4 3.4 C4 2.5 4.9 2 5.6 2.5 L20 11.1 C20.7 11.6 20.7 12.4 20 12.9 L5.6 21.5 C4.9 22 4 21.5 4 20.6 Z"
          fill="url(#playg)"
        />
      </svg>
      <span className="flex flex-col text-left leading-none">
        <span className="text-[10px] font-medium uppercase tracking-wide opacity-75">{top}</span>
        <span className="font-serif text-base font-semibold">{store}</span>
      </span>
    </a>
  )
}
