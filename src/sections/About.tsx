import { useSite } from '../lib/site'
import { Reveal } from '../lib/reveal'

export function About() {
  const { t } = useSite()
  return (
    <section id="about" className="scroll-mt-20 border-y border-line bg-ivory-2 py-24 sm:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <Reveal>
          <span className="eyebrow">
            <span className="inline-block h-1.5 w-1.5 rotate-45 bg-gold" aria-hidden />
            {t.about.eyebrow}
          </span>
          <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-[1.14] tracking-tight text-ink sm:text-4xl">
            {t.about.heading}
          </h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted sm:text-base">
            {t.about.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-line pt-8">
            {t.about.stats.map((s) => (
              <div key={s.label}>
                <dt className="font-serif text-2xl font-semibold text-forest sm:text-[1.7rem]">{s.value}</dt>
                <dd className="mt-1 text-xs leading-snug text-muted">{s.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-line bg-surface p-7 shadow-card sm:p-8">
            <ul className="space-y-6">
              {t.about.values.map((v, i) => (
                <li key={v.title} className="relative flex gap-4">
                  {/* branch connector between markers */}
                  {i < t.about.values.length - 1 && (
                    <span className="absolute left-[3px] top-5 h-full w-px bg-line" aria-hidden />
                  )}
                  <span className="relative z-10 mt-1.5 h-2 w-2 shrink-0 rotate-45 bg-gold" aria-hidden />
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-ink">{v.title}</h3>
                    <p className="mt-1 text-[13.5px] leading-relaxed text-muted">{v.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
