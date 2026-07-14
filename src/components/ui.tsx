import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { cx } from '../lib/cx'

export function Diamond({ className }: { className?: string }) {
  return <span className={cx('inline-block h-1.5 w-1.5 rotate-45 bg-gold', className)} aria-hidden />
}

type Variant = 'primary' | 'ghost' | 'gold' | 'onDark'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:ring-offset-2 focus-visible:ring-offset-ivory disabled:opacity-60'

const variants: Record<Variant, string> = {
  primary: 'bg-forest px-6 py-3 text-ivory hover:bg-forest-deep hover:shadow-gold',
  gold: 'bg-gold px-6 py-3 text-white hover:bg-[#8a6620] hover:shadow-gold',
  ghost: 'border border-line bg-transparent px-6 py-3 text-ink hover:border-forest hover:text-forest',
  onDark: 'bg-ivory px-6 py-3 text-forest-deep hover:bg-white',
}

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant
  children: ReactNode
}

export function LinkButton({ variant = 'primary', className, children, ...rest }: LinkButtonProps) {
  return (
    <a className={cx(base, variants[variant], className)} {...rest}>
      {children}
    </a>
  )
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  children: ReactNode
}

export function Button({ variant = 'primary', className, children, ...rest }: ButtonProps) {
  return (
    <button className={cx(base, variants[variant], className)} {...rest}>
      {children}
    </button>
  )
}
