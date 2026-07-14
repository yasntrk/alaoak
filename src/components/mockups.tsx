import { Search, Volume2, Plus, Users, CalendarCheck, Flame, BarChart3 } from 'lucide-react'
import { Mark } from './Logo'
import { cx } from '../lib/cx'

/** Stylized in-app preview for Dico — a smart dictionary card on a phone. */
export function DicoMock({ className }: { className?: string }) {
  return (
    <div className={cx('relative mx-auto w-full max-w-[280px]', className)}>
      {/* phone frame */}
      <div className="rounded-[2.2rem] border border-line bg-ink/90 p-2.5 shadow-card">
        <div className="overflow-hidden rounded-[1.7rem] bg-ivory">
          {/* app top bar */}
          <div className="flex items-center justify-between px-4 pb-3 pt-4">
            <span className="inline-flex items-center gap-1.5 font-serif text-sm font-semibold text-forest">
              <Mark className="h-5 w-5" /> Dico
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-gold/12 px-2 py-0.5 text-[10px] font-semibold text-gold">
              <Flame size={10} /> 7
            </span>
          </div>
          {/* search */}
          <div className="mx-4 flex items-center gap-2 rounded-xl border border-line bg-surface px-3 py-2 text-xs text-muted">
            <Search size={13} className="text-gold" />
            <span className="font-medium text-ink">flourish</span>
          </div>
          {/* word card */}
          <div className="m-4 rounded-xl border border-line bg-surface p-4 shadow-sm">
            <div className="flex items-baseline justify-between">
              <h4 className="font-serif text-lg font-semibold text-ink">flourish</h4>
              <button className="inline-flex items-center gap-1 rounded-full bg-gold/12 px-2 py-1 text-[10px] font-semibold text-gold">
                <Plus size={10} /> Save
              </button>
            </div>
            <div className="mt-1 flex items-center gap-2 text-[11px] text-muted">
              <span>/ˈflʌrɪʃ/</span>
              <Volume2 size={12} className="text-forest" />
              <span className="italic">verb</span>
            </div>
            <p className="mt-2 text-[11px] leading-relaxed text-ink/80">
              To grow or develop in a healthy, vigorous way, especially as the result of a good environment.
            </p>
            <p className="mt-2 border-l-2 border-gold/40 pl-2 text-[11px] italic leading-relaxed text-muted">
              “Small teams flourish when the tools grow with them.”
            </p>
          </div>
          {/* review progress */}
          <div className="mx-4 mb-5 flex items-center gap-2">
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-line">
              <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-forest to-gold" />
            </div>
            <span className="text-[10px] font-semibold text-muted">12/16</span>
          </div>
        </div>
      </div>
    </div>
  )
}

/** Stylized in-app preview for CoalaHR — a people dashboard window. */
export function CoalaMock({ className }: { className?: string }) {
  const team = [
    { i: 'EA', n: 'w-24', role: 'w-14', c: 'bg-forest' },
    { i: 'MK', n: 'w-20', role: 'w-16', c: 'bg-gold' },
    { i: 'SD', n: 'w-28', role: 'w-12', c: 'bg-ink' },
  ]
  return (
    <div className={cx('relative mx-auto w-full max-w-[420px]', className)}>
      <div className="overflow-hidden rounded-2xl border border-line bg-surface shadow-card">
        {/* window bar */}
        <div className="flex items-center gap-2 border-b border-line bg-ivory-2 px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="ml-2 inline-flex items-center gap-1.5 font-serif text-xs font-semibold text-forest">
            <Mark className="h-4 w-4" /> CoalaHR
          </span>
        </div>
        <div className="grid grid-cols-[44px_1fr]">
          {/* rail */}
          <div className="flex flex-col items-center gap-4 border-r border-line bg-ivory py-4">
            <span className="h-6 w-6 rounded-lg bg-forest/15" />
            <Users size={16} className="text-forest" />
            <CalendarCheck size={16} className="text-muted" />
            <BarChart3 size={16} className="text-gold" />
          </div>
          {/* content */}
          <div className="p-4">
            <div className="flex items-center justify-between">
              <h4 className="font-serif text-sm font-semibold text-ink">People</h4>
              <span className="inline-flex items-center gap-1 rounded-full bg-gold/12 px-2 py-0.5 text-[10px] font-semibold text-gold">
                <Users size={10} /> Hiring
              </span>
            </div>
            {/* stat cards */}
            <div className="mt-3 grid grid-cols-3 gap-2">
              {[
                { v: '24', l: 'Active' },
                { v: '3', l: 'On leave' },
                { v: '5', l: 'New hires' },
              ].map((s) => (
                <div key={s.l} className="rounded-lg border border-line bg-ivory px-2 py-2 text-center">
                  <div className="font-serif text-base font-semibold text-forest">{s.v}</div>
                  <div className="text-[9px] uppercase tracking-wide text-muted">{s.l}</div>
                </div>
              ))}
            </div>
            {/* list */}
            <div className="mt-3 space-y-2">
              {team.map((m, idx) => (
                <div key={idx} className="flex items-center gap-2.5 rounded-lg border border-line bg-surface px-2.5 py-2">
                  <span className={cx('flex h-7 w-7 items-center justify-center rounded-full text-[9px] font-bold text-white', m.c)}>
                    {m.i}
                  </span>
                  <div className="flex-1">
                    <div className={cx('h-1.5 rounded-full bg-ink/15', m.n)} />
                    <div className={cx('mt-1 h-1.5 rounded-full bg-line', m.role)} />
                  </div>
                  <span
                    className={cx(
                      'rounded-full px-2 py-0.5 text-[9px] font-semibold',
                      idx === 1 ? 'bg-gold/15 text-gold' : 'bg-forest/12 text-forest',
                    )}
                  >
                    {idx === 1 ? 'Leave' : 'Active'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
