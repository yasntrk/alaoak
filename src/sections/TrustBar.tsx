import { Fragment } from 'react'
import { useSite } from '../lib/site'

export function TrustBar() {
  const { t } = useSite()
  return (
    <section className="border-y border-line bg-ivory-2/60">
      <div className="container-x flex flex-wrap items-center justify-center gap-x-6 gap-y-3 py-5 text-center">
        {t.trustBar.map((item, i) => (
          <Fragment key={item}>
            {i > 0 && <span className="hidden h-1.5 w-1.5 rotate-45 bg-gold/70 sm:inline-block" aria-hidden />}
            <span className="text-sm font-medium text-muted">{item}</span>
          </Fragment>
        ))}
      </div>
    </section>
  )
}
