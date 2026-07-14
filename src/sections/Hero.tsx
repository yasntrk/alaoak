import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useSite } from '../lib/site'
import { LinkButton } from '../components/ui'
import { BranchMotif } from '../components/BranchMotif'

export function Hero() {
  const { t } = useSite()
  const reduce = useReducedMotion()

  const stagger = (i: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay: 0.1 + i * 0.12 },
        }

  return (
    <section className="grain relative overflow-hidden pt-28 md:pt-36">
      {/* faint enclosing-ring watermark bleeding off the top-right */}
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full border border-line opacity-60"
        aria-hidden
      />
      <div className="container-x relative grid items-center gap-10 pb-16 md:pb-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <div className="max-w-xl">
          <motion.div className="flex items-center gap-3" {...stagger(0)}>
            <span className="h-px w-8 bg-gold/60" aria-hidden />
            <span className="text-xs font-semibold uppercase tracking-eyebrow text-gold">{t.hero.badge}</span>
          </motion.div>

          <motion.h1
            className="mt-5 text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl"
            {...stagger(1)}
          >
            {t.hero.headline}{' '}
            <span className="italic text-forest">{t.hero.highlight}</span>
          </motion.h1>

          <motion.p className="mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg" {...stagger(2)}>
            {t.hero.subhead}
          </motion.p>

          <motion.div className="mt-8 flex flex-wrap items-center gap-3" {...stagger(3)}>
            <LinkButton href="#products" variant="primary" className="group">
              {t.hero.ctaPrimary}
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </LinkButton>
            <LinkButton href="#contact" variant="ghost">
              {t.hero.ctaSecondary}
            </LinkButton>
          </motion.div>
        </div>

        {/* signature oak-branch motif */}
        <div className="relative mx-auto h-[360px] w-full max-w-[440px] sm:h-[440px] lg:h-[500px]">
          <BranchMotif />
        </div>
      </div>
    </section>
  )
}
