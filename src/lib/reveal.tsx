import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import { cx } from './cx'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
}

/** Fade-and-rise on scroll into view. Respects prefers-reduced-motion. */
export function Reveal({ children, className, delay = 0, y = 18 }: RevealProps) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  )
}

interface SectionHeadingProps {
  eyebrow: string
  heading: ReactNode
  sub?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({ eyebrow, heading, sub, align = 'left', className }: SectionHeadingProps) {
  return (
    <div className={cx(align === 'center' && 'mx-auto max-w-2xl text-center', 'max-w-2xl', className)}>
      <span className={cx('eyebrow', align === 'center' && 'justify-center')}>
        <span className="inline-block h-1.5 w-1.5 rotate-45 bg-gold" aria-hidden />
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-semibold leading-[1.12] tracking-tight text-ink sm:text-4xl md:text-[2.6rem]">
        {heading}
      </h2>
      {sub && <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{sub}</p>}
    </div>
  )
}
