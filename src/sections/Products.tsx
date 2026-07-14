import type { ReactNode } from 'react'
import { useSite } from '../lib/site'
import { Reveal, SectionHeading } from '../lib/reveal'
import { PlayBadge } from '../components/PlayBadge'
import { LinkButton } from '../components/ui'
import { DicoMock, CoalaMock } from '../components/mockups'
import { cx } from '../lib/cx'
import type { Product } from '../content/types'

function StatusChip({ product }: { product: Product }) {
  const live = product.statusType === 'live'
  return (
    <span
      className={cx(
        'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold',
        live ? 'bg-forest/10 text-forest' : 'bg-gold/12 text-gold',
      )}
    >
      <span className={cx('h-1.5 w-1.5 rounded-full', live ? 'bg-forest' : 'bg-gold')} />
      {product.status}
    </span>
  )
}

function ProductBlock({ product, mock, reversed }: { product: Product; mock: ReactNode; reversed: boolean }) {
  const live = product.statusType === 'live'
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <Reveal className={cx(reversed && 'lg:order-2')}>
        <span className="eyebrow">{product.category}</span>
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <h3 className="font-serif text-3xl font-semibold text-ink sm:text-4xl">{product.name}</h3>
          <StatusChip product={product} />
        </div>
        <p className="mt-2 font-serif text-lg italic text-forest">{product.tagline}</p>
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted">{product.description}</p>

        <ul className="mt-6 grid gap-x-6 gap-y-4 sm:grid-cols-2">
          {product.features.map((f) => (
            <li key={f.title} className="flex gap-2.5">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-gold" aria-hidden />
              <span>
                <span className="block text-sm font-semibold text-ink">{f.title}</span>
                <span className="mt-0.5 block text-[13px] leading-relaxed text-muted">{f.desc}</span>
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          {live ? (
            <PlayBadge href={product.href} />
          ) : (
            <LinkButton href={product.href} variant="gold">
              {product.cta}
            </LinkButton>
          )}
          <div className="flex flex-wrap gap-2">
            {product.platforms.map((p) => (
              <span key={p} className="rounded-full border border-line px-2.5 py-1 text-[11px] font-medium text-muted">
                {p}
              </span>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.1} className={cx('relative', reversed && 'lg:order-1')}>
        {/* soft halo behind the mockup */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 mx-auto max-w-[80%] rounded-full bg-gold/5 blur-3xl"
          aria-hidden
        />
        {mock}
      </Reveal>
    </div>
  )
}

export function Products() {
  const { t } = useSite()
  const mocks: Record<string, ReactNode> = {
    dico: <DicoMock />,
    coalahr: <CoalaMock />,
  }

  return (
    <section id="products" className="scroll-mt-20 py-24 sm:py-28">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow={t.productsIntro.eyebrow}
            heading={t.productsIntro.heading}
            sub={t.productsIntro.sub}
            align="center"
            className="mx-auto"
          />
        </Reveal>

        <div className="mt-16 space-y-20 sm:mt-20 sm:space-y-28">
          {t.products.map((p, i) => (
            <ProductBlock key={p.id} product={p} mock={mocks[p.id]} reversed={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
