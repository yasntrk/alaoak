import { useSite } from '../lib/site'
import { Reveal } from '../lib/reveal'
import { PlayBadge } from '../components/PlayBadge'
import { cx } from '../lib/cx'

export function CTA() {
  const { t } = useSite()
  return (
    <section className="relative overflow-hidden bg-forest-deep py-20 text-ivory sm:py-24">
      {/* gold hairline branch texture */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.13]"
        viewBox="0 0 1200 400"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        aria-hidden
      >
        <path d="M-20 380 C 200 300 260 240 420 250 C 560 258 620 180 760 190 C 900 200 980 130 1220 150" stroke="#B9892E" strokeWidth="1" />
        <path d="M-20 300 C 180 250 300 300 440 300 C 640 300 700 220 900 240 C 1040 254 1120 210 1220 220" stroke="#B9892E" strokeWidth="1" />
        {[420, 760, 440, 900].map((x, i) => (
          <circle key={i} cx={x} cy={i < 2 ? (i === 0 ? 250 : 190) : i === 2 ? 300 : 240} r="3" fill="#B9892E" />
        ))}
      </svg>

      <div className="container-x relative text-center">
        <Reveal>
          <h2 className="mx-auto max-w-2xl font-serif text-3xl font-semibold leading-tight sm:text-[2.6rem]">
            {t.cta.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ivory/75 sm:text-lg">{t.cta.sub}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            {t.products.map((p) =>
              p.statusType === 'live' ? (
                <PlayBadge key={p.id} href={p.href} onDark />
              ) : (
                <a
                  key={p.id}
                  href={p.href}
                  className={cx(
                    'inline-flex items-center gap-2 rounded-full border border-ivory/30 px-6 py-3 text-sm font-semibold text-ivory',
                    'transition-colors duration-200 hover:border-gold hover:bg-gold hover:text-white',
                  )}
                >
                  {p.cta}
                </a>
              ),
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
