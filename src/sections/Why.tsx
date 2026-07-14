import { Sparkles, Gem, HeartHandshake, Sprout } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useSite } from '../lib/site'
import { Reveal, SectionHeading } from '../lib/reveal'

const ICONS: LucideIcon[] = [Sparkles, Gem, HeartHandshake, Sprout]

export function Why() {
  const { t } = useSite()
  return (
    <section id="why" className="scroll-mt-20 py-24 sm:py-28">
      <div className="container-x">
        <Reveal>
          <SectionHeading eyebrow={t.why.eyebrow} heading={t.why.heading} align="center" className="mx-auto" />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.why.items.map((item, i) => {
            const Icon = ICONS[i % ICONS.length]
            return (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="group h-full rounded-2xl border border-line bg-surface p-6 shadow-card transition-shadow duration-300 hover:shadow-card-hover">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-forest/8 text-forest transition-colors duration-300 group-hover:bg-forest group-hover:text-ivory">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-5 font-serif text-lg font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-muted">{item.desc}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
