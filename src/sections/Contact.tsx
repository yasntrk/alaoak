import type { FormEvent } from 'react'
import { Mail, ArrowUpRight } from 'lucide-react'
import { useSite } from '../lib/site'
import { Reveal } from '../lib/reveal'
import { Button } from '../components/ui'

const FORM = {
  en: { name: 'Name', email: 'Email', message: 'Message', send: 'Send message', ph: 'How can we help?' },
  tr: { name: 'Ad Soyad', email: 'E-posta', message: 'Mesajınız', send: 'Mesaj gönder', ph: 'Size nasıl yardımcı olabiliriz?' },
} as const

export function Contact() {
  const { t, lang } = useSite()
  const f = FORM[lang]

  // Static site: compose an email via the user's mail client. Swap for a form
  // service (e.g. Formspree) by pointing the <form action> there instead.
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const subject = encodeURIComponent(`[AlaOak] ${fd.get('name') ?? ''}`)
    const body = encodeURIComponent(`${fd.get('message') ?? ''}\n\n— ${fd.get('name') ?? ''} (${fd.get('email') ?? ''})`)
    window.location.href = `mailto:${t.contact.email}?subject=${subject}&body=${body}`
  }

  const field = 'w-full rounded-xl border border-line bg-ivory px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-forest focus:bg-surface'

  return (
    <section id="contact" className="scroll-mt-20 border-t border-line bg-ivory-2 py-24 sm:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <span className="eyebrow">
            <span className="inline-block h-1.5 w-1.5 rotate-45 bg-gold" aria-hidden />
            {t.contact.eyebrow}
          </span>
          <h2 className="mt-4 max-w-md text-3xl font-semibold leading-[1.14] tracking-tight text-ink sm:text-4xl">
            {t.contact.heading}
          </h2>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted sm:text-base">{t.contact.sub}</p>

          <a
            href={`mailto:${t.contact.email}`}
            className="group mt-8 inline-flex items-center gap-3 rounded-2xl border border-line bg-surface px-5 py-4 shadow-card transition-shadow hover:shadow-card-hover"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-forest/8 text-forest">
              <Mail size={18} />
            </span>
            <span>
              <span className="block text-xs uppercase tracking-eyebrow text-gold">{t.contact.buttonLabel}</span>
              <span className="block font-serif text-lg font-semibold text-ink">{t.contact.email}</span>
            </span>
            <ArrowUpRight size={18} className="ml-2 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={onSubmit} className="rounded-2xl border border-line bg-surface p-6 shadow-card sm:p-8">
            <div className="grid gap-4">
              <label className="grid gap-1.5">
                <span className="text-xs font-semibold text-ink">{f.name}</span>
                <input name="name" required autoComplete="name" className={field} />
              </label>
              <label className="grid gap-1.5">
                <span className="text-xs font-semibold text-ink">{f.email}</span>
                <input name="email" type="email" required autoComplete="email" className={field} />
              </label>
              <label className="grid gap-1.5">
                <span className="text-xs font-semibold text-ink">{f.message}</span>
                <textarea name="message" required rows={4} placeholder={f.ph} className={field} />
              </label>
              <Button type="submit" variant="primary" className="mt-1 w-full">
                {f.send}
              </Button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
