export type Lang = 'en' | 'tr'

export interface Feature {
  title: string
  desc: string
}

export interface Product {
  id: string
  name: string
  category: string
  tagline: string
  description: string
  features: Feature[]
  platforms: string[]
  status: string
  /** 'live' → available now, 'soon' → coming soon (drives the status chip styling) */
  statusType: 'live' | 'soon'
  /** Which CTA to render: Google Play badge, external site link, or waitlist button. */
  ctaKind: 'play' | 'external' | 'waitlist'
  cta: string
  /** Store / site / waitlist link. TODO: replace Dico's with the real Google Play URL. */
  href: string
}

export interface TitleDesc {
  title: string
  desc: string
}

export interface Stat {
  value: string
  label: string
}

export interface FooterColumn {
  title: string
  links: string[]
}

export interface Content {
  lang: Lang
  meta: {
    title: string
    description: string
    ogTitle?: string
    ogDescription?: string
  }
  nav: {
    home: string
    about: string
    products: string
    why: string
    contact: string
  }
  hero: {
    badge: string
    headline: string
    highlight: string
    subhead: string
    ctaPrimary: string
    ctaSecondary: string
  }
  trustBar: string[]
  about: {
    eyebrow: string
    heading: string
    body: string[]
    stats: Stat[]
    values: TitleDesc[]
  }
  productsIntro: {
    eyebrow: string
    heading: string
    sub: string
  }
  products: Product[]
  why: {
    eyebrow: string
    heading: string
    items: TitleDesc[]
  }
  cta: {
    heading: string
    sub: string
    button: string
  }
  contact: {
    eyebrow: string
    heading: string
    sub: string
    email: string
    buttonLabel: string
  }
  footer: {
    tagline: string
    rights: string
    columns: FooterColumn[]
  }
}

/** Shared, language-independent links. */
export const LINKS = {
  // TODO: replace with the real Dico Google Play listing URL.
  dicoPlayStore: 'https://play.google.com/store/apps/details?id=com.alaoak.dico',
  // Playable web build of the Dico game.
  dicoWeb: 'https://yasntrk.github.io/dico/',
  akceSite: 'https://ak-ce.com.tr/',
  email: 'hello@alaoak.com',
}
