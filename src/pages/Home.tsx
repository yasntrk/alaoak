import { Helmet } from 'react-helmet-async'
import { content, langPath } from '../content'
import type { Lang } from '../content'
import { SiteProvider } from '../lib/site'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Hero } from '../sections/Hero'
import { TrustBar } from '../sections/TrustBar'
import { Products } from '../sections/Products'
import { About } from '../sections/About'
import { Why } from '../sections/Why'
import { CTA } from '../sections/CTA'
import { Contact } from '../sections/Contact'

// TODO: set this to your live domain once the custom domain is connected.
const SITE_URL = 'https://alaoak.com'

export function Home({ lang }: { lang: Lang }) {
  const t = content[lang]
  const canonical = SITE_URL + (lang === 'en' ? '/' : langPath(lang))

  return (
    <SiteProvider value={{ lang, t }}>
      <Helmet htmlAttributes={{ lang }}>
        <title>{t.meta.title}</title>
        <meta name="description" content={t.meta.description} />
        <link rel="canonical" href={canonical} />

        <link rel="alternate" hrefLang="en" href={`${SITE_URL}/`} />
        <link rel="alternate" hrefLang="tr" href={`${SITE_URL}/tr`} />
        <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/`} />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="AlaOak" />
        <meta property="og:locale" content={lang === 'en' ? 'en_US' : 'tr_TR'} />
        <meta property="og:title" content={t.meta.ogTitle ?? t.meta.title} />
        <meta property="og:description" content={t.meta.ogDescription ?? t.meta.description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={`${SITE_URL}/og.png`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t.meta.ogTitle ?? t.meta.title} />
        <meta name="twitter:description" content={t.meta.ogDescription ?? t.meta.description} />
        <meta name="twitter:image" content={`${SITE_URL}/og.png`} />
      </Helmet>

      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Products />
        <About />
        <Why />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </SiteProvider>
  )
}
