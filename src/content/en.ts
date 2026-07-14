import type { Content } from './types'
import { LINKS } from './types'

export const en: Content = {
  lang: 'en',
  meta: {
    title: 'AlaOak — Game & Software Studio',
    description:
      'AlaOak is a game and software studio crafting games and digital products, built with care and made to grow. Meet our products, Dico and CoalaHR.',
    ogTitle: 'AlaOak — Crafted Games & Software',
    ogDescription: 'A studio that builds games and digital products with real craft. Discover Dico and CoalaHR from AlaOak.',
  },
  nav: {
    home: 'Home',
    about: 'About',
    products: 'Products',
    why: 'Why AlaOak',
    contact: 'Contact',
  },
  hero: {
    badge: 'Game & Software Studio',
    headline: 'Games and software,',
    highlight: 'built to last',
    subhead:
      'AlaOak is a game and software studio. We design and build games and digital products with the patience of real craft — experiences that feel great to use and are made to grow.',
    ctaPrimary: 'Explore our products',
    ctaSecondary: 'Get in touch',
  },
  trustBar: ['Games & software', 'Available on Google Play', 'Crafted with care', 'Built for growth'],
  about: {
    eyebrow: 'About AlaOak',
    heading: 'A studio rooted in craft',
    body: [
      'AlaOak is a game and software studio built on a simple belief: great software should feel as dependable as an old oak — a joy to use today and ready to grow for years to come. We craft games and digital products that are elegant, reliable, and genuinely enjoyable to use.',
      'Like an acorn that becomes a forest, we build for the long term. From games to everyday apps and custom software, every product we ship is made to grow — shaped by the people who use it.',
    ],
    stats: [
      { value: '2', label: 'Products live and growing' },
      { value: 'Games + Apps', label: 'What we build' },
      { value: 'Mobile + Web', label: 'Wherever you play & work' },
    ],
    values: [
      { title: 'Rooted', desc: 'We build on solid foundations — thoughtful engineering and design that stands the test of time.' },
      { title: 'Crafted', desc: 'Every detail is considered. We sweat the small things so our games and apps feel just right.' },
      { title: 'Player-first', desc: 'We build for the people on the other side of the screen — clarity, delight, and respect for their time.' },
      { title: 'Growth-oriented', desc: 'Our products evolve with you. What works today should work even better tomorrow.' },
    ],
  },
  productsIntro: {
    eyebrow: 'Our Work',
    heading: 'Products & projects',
    sub: 'Games, apps, and work we’ve crafted for others — a look at what we build.',
  },
  products: [
    {
      id: 'dico',
      name: 'Dico',
      category: 'Mobile Game',
      tagline: 'Read your fate, bend your luck',
      description:
        'Dico is a pixel-art game about luck and fate. Read the signs, tip chance in your favor, and see how far a little luck can take you — a bite-sized, atmospheric run through a dreamy cosmic world.',
      features: [
        { title: 'Luck is the game', desc: 'Read your fate and bend your luck — chance is the mechanic, not the enemy.' },
        { title: 'Cosmic pixel-art', desc: 'A dreamy purple universe in crunchy pixels, with a mood to match.' },
        { title: 'Quick, replayable runs', desc: 'Easy to pick up, and made for “just one more try.”' },
        { title: 'On Google Play & web', desc: 'Play on your phone, or jump straight in from your browser.' },
      ],
      platforms: ['Google Play', 'Android', 'Web'],
      status: 'Available on Google Play',
      statusType: 'live',
      ctaKind: 'play',
      cta: 'Play Dico on Google Play',
      href: LINKS.dicoPlayStore,
    },
    {
      id: 'coalahr',
      name: 'CoalaHR',
      category: 'HR & People Ops',
      tagline: 'HR that grows with your team',
      description:
        'CoalaHR brings your people operations into one friendly, modern platform — from employee records to leave, attendance, and onboarding. It helps growing teams and SMEs spend less time on admin and more time on people.',
      features: [
        { title: 'Employee records & self-service', desc: 'Keep every employee profile organized in one place, with self-service access that lightens your HR load.' },
        { title: 'Leave & attendance tracking', desc: 'Manage time off, approvals, and attendance with clarity for both managers and employees.' },
        { title: 'Simple, faster hiring', desc: 'Track candidates and move from application to offer without the busywork.' },
        { title: 'Onboarding & performance', desc: 'Welcome new hires smoothly and support their growth with structured onboarding and performance tools.' },
      ],
      platforms: ['Web', 'Google Play', 'Android'],
      status: 'Coming soon',
      statusType: 'soon',
      ctaKind: 'waitlist',
      cta: 'Join the CoalaHR waitlist',
      href: '#contact',
    },
    {
      id: 'akce',
      name: 'Akçe Mühendislik',
      category: 'Web Project',
      tagline: 'A corporate website we designed and built',
      description:
        'A modern, multilingual corporate website we crafted for Akçe Mühendislik — an Istanbul-based industrial engineering company specializing in cryogenic tanks and industrial gas systems. Clean, fast, and built to present their expertise to clients around the world.',
      features: [
        { title: 'Multilingual by design', desc: 'Built to speak to clients worldwide, with several language options.' },
        { title: 'Services & capabilities showcase', desc: 'Their engineering expertise and product range, presented clearly.' },
        { title: 'Responsive & fast', desc: 'A polished experience on every device, quick to load.' },
        { title: 'Corporate & credible', desc: 'A professional presence that reflects an international, standards-driven company.' },
      ],
      platforms: ['Web'],
      status: 'Live',
      statusType: 'live',
      ctaKind: 'external',
      cta: 'Visit the site',
      href: LINKS.akceSite,
    },
  ],
  why: {
    eyebrow: 'Why AlaOak',
    heading: 'Software you can put down roots with',
    items: [
      { title: 'Craft in every detail', desc: 'We sweat the details so everything we build feels polished, considered, and complete.' },
      { title: 'Designed to last', desc: 'Premium, thoughtful craft over quick fixes — products meant to serve you for years, not weeks.' },
      { title: 'Built for real people', desc: 'Clean interfaces and honest features that respect your time and your attention.' },
      { title: 'Always growing', desc: 'Our products improve continuously, shaped by how they’re actually used.' },
    ],
  },
  cta: {
    heading: 'Ready to grow with AlaOak?',
    sub: 'Try our products today, or tell us about the game or product you’re dreaming up.',
    button: 'Explore products',
  },
  contact: {
    eyebrow: 'Get in Touch',
    heading: 'Let’s build something that lasts',
    sub: 'Questions, partnerships, or a project in mind — we’d love to hear from you. Our team reads every message.',
    email: LINKS.email,
    buttonLabel: 'Email us',
  },
  footer: {
    tagline: 'Rooted in craft — games and software built to grow.',
    columns: [
      { title: 'Products', links: ['Dico', 'CoalaHR'] },
      { title: 'Company', links: ['About', 'Why AlaOak', 'Contact'] },
      { title: 'Connect', links: ['Google Play', 'Email'] },
    ],
    rights: '© 2026 AlaOak. All rights reserved.',
  },
}
