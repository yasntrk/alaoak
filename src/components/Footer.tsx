import { Logo } from './Logo'
import { LangSwitcher } from './LangSwitcher'
import { useSite } from '../lib/site'
import { LINKS } from '../content/types'

interface FLink {
  label: string
  href: string
  ext?: boolean
}

export function Footer() {
  const { t } = useSite()

  const columns: { title: string; links: FLink[] }[] = [
    {
      title: t.footer.columns[0].title,
      links: t.products.map((p) => ({
        label: p.name,
        href: p.href,
        ext: p.href.startsWith('http'),
      })),
    },
    {
      title: t.footer.columns[1].title,
      links: [
        { label: t.nav.about, href: '#about' },
        { label: t.nav.why, href: '#why' },
        { label: t.nav.contact, href: '#contact' },
      ],
    },
    {
      title: t.footer.columns[2].title,
      links: [
        { label: t.footer.columns[2].links[0], href: LINKS.dicoPlayStore, ext: true },
        { label: t.footer.columns[2].links[1], href: `mailto:${t.contact.email}` },
      ],
    },
  ]

  return (
    <footer className="border-t border-line bg-ivory-2">
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="max-w-xs">
          <Logo />
          <p className="mt-4 text-sm leading-relaxed text-muted">{t.footer.tagline}</p>
          <div className="mt-5">
            <LangSwitcher />
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="font-serif text-sm font-semibold text-ink">{col.title}</h3>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={l.ext ? '_blank' : undefined}
                    rel={l.ext ? 'noreferrer' : undefined}
                    className="link-underline text-sm text-muted hover:text-forest"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-line/70">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 sm:flex-row">
          <p className="text-xs text-muted">{t.footer.rights}</p>
          <span className="inline-flex items-center gap-1.5 text-xs text-muted">
            <span className="h-1 w-1 rotate-45 bg-gold" aria-hidden />
            Rooted in craft. Built to grow.
          </span>
        </div>
      </div>
    </footer>
  )
}
