import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Logo } from './Logo'
import { LangSwitcher } from './LangSwitcher'
import { useSite } from '../lib/site'
import { cx } from '../lib/cx'

export function Navbar() {
  const { t, lang } = useSite()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const home = lang === 'en' ? '/' : '/tr'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#about', label: t.nav.about },
    { href: '#products', label: t.nav.products },
    { href: '#why', label: t.nav.why },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <header
      className={cx(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'border-b border-line bg-ivory/85 backdrop-blur-md' : 'border-b border-transparent',
      )}
    >
      <nav className="container-x flex h-16 items-center justify-between md:h-[72px]">
        <a href={home} aria-label="AlaOak — home" className="shrink-0">
          <Logo />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="link-underline text-sm font-medium text-ink/80 hover:text-forest">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <LangSwitcher className="hidden sm:inline-flex" />
          <a
            href="#contact"
            className="hidden rounded-full border border-forest/30 px-4 py-2 text-sm font-semibold text-forest transition-colors hover:border-forest hover:bg-forest hover:text-ivory md:inline-flex"
          >
            {t.contact.buttonLabel}
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink md:hidden"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cx(
          'overflow-hidden border-t border-line bg-ivory/95 backdrop-blur-md transition-[max-height] duration-300 md:hidden',
          open ? 'max-h-96' : 'max-h-0 border-t-0',
        )}
      >
        <div className="container-x flex flex-col gap-1 py-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-3 text-base font-medium text-ink hover:bg-ivory-2 hover:text-forest"
            >
              {l.label}
            </a>
          ))}
          <div className="mt-2 flex items-center justify-between px-2">
            <LangSwitcher />
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded-full bg-forest px-4 py-2 text-sm font-semibold text-ivory"
            >
              {t.contact.buttonLabel}
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
