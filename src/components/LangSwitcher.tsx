import { Link } from 'react-router-dom'
import { useSite } from '../lib/site'
import { cx } from '../lib/cx'
import type { Lang } from '../content'

function Item({ to, code, active }: { to: string; code: string; active: boolean }) {
  return (
    <Link
      to={to}
      aria-current={active ? 'true' : undefined}
      className={cx(
        'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold transition-colors',
        active ? 'bg-forest text-ivory' : 'text-muted hover:text-forest',
      )}
    >
      {active && <span className="inline-block h-1 w-1 rotate-45 bg-gold-soft" aria-hidden />}
      {code}
    </Link>
  )
}

export function LangSwitcher({ className }: { className?: string }) {
  const { lang } = useSite()
  const is = (l: Lang) => lang === l
  return (
    <div
      className={cx('inline-flex items-center rounded-full border border-line bg-surface/70 p-0.5 backdrop-blur', className)}
      role="group"
      aria-label="Language"
    >
      <Item to="/" code="EN" active={is('en')} />
      <Item to="/tr" code="TR" active={is('tr')} />
    </div>
  )
}
