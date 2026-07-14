import { Users, CalendarCheck, BarChart3, Snowflake, Factory, Gauge, Play } from 'lucide-react'
import { Mark } from './Logo'
import { cx } from '../lib/cx'

/** Stylized preview for Dico — the pixel-art luck & fate game, on a phone. */
export function DicoMock({ className }: { className?: string }) {
  const stars: Array<[string, string]> = [
    ['12%', '16%'], ['80%', '11%'], ['64%', '28%'], ['22%', '52%'],
    ['88%', '58%'], ['38%', '76%'], ['73%', '84%'], ['14%', '80%'],
  ]
  return (
    <div className={cx('relative mx-auto w-full max-w-[280px]', className)}>
      {/* phone frame */}
      <div className="rounded-[2.2rem] border border-line bg-ink/90 p-2.5 shadow-card">
        <div
          className="relative overflow-hidden rounded-[1.7rem]"
          style={{ background: 'radial-gradient(130% 90% at 30% 15%, #3c2670 0%, #241544 48%, #160f2c 100%)' }}
        >
          {/* starfield */}
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            {stars.map(([l, t], i) => (
              <span
                key={i}
                className="absolute h-0.5 w-0.5 rounded-full bg-[#cfc0ff]"
                style={{ left: l, top: t, opacity: 0.45 + (i % 3) * 0.2 }}
              />
            ))}
          </div>

          <div className="relative flex flex-col items-center px-6 py-10 text-center">
            {/* wordmark */}
            <span
              className="font-mono text-[2rem] font-black leading-none tracking-[0.12em] text-[#f5c542]"
              style={{ textShadow: '2px 2px 0 #a06a12' }}
            >
              DICO
            </span>

            {/* dice-with-eye mascot */}
            <div className="my-7" style={{ filter: 'drop-shadow(0 0 14px rgba(150,120,240,0.55))' }}>
              <svg width="88" height="88" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="14" y="14" width="52" height="52" rx="16" fill="#e7defa" />
                <circle cx="26" cy="29" r="2.6" fill="#241542" />
                <circle cx="31" cy="53" r="2.6" fill="#241542" />
                <path d="M23 40 L29 44 L25 49" stroke="#241542" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="48" cy="40" r="13" fill="#ffffff" />
                <circle cx="50" cy="41" r="6.5" fill="#3a2a6a" />
                <circle cx="52.5" cy="38.5" r="2" fill="#ffffff" />
                <circle cx="40" cy="8" r="2.6" fill="#a897ec" />
                <line x1="40" y1="14" x2="40" y2="11" stroke="#a897ec" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>

            {/* tagline */}
            <span className="text-[11px] tracking-wide text-[#bcaef0]">kaderi oku, şansı ayarla</span>

            {/* play button */}
            <button className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-[#f5c542] px-6 py-2 text-xs font-extrabold uppercase tracking-wide text-[#241542]">
              <Play size={12} className="fill-[#241542]" /> Oyna
            </button>
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

/** Browser preview of the Akçe Mühendislik corporate site we built (steel/industrial theme). */
export function AkceMock({ className }: { className?: string }) {
  const tiles = [
    { icon: Snowflake, label: 'Kriyojenik' },
    { icon: Gauge, label: 'Regasifikasyon' },
    { icon: Factory, label: 'Metal İşleme' },
  ]
  return (
    <div className={cx('relative mx-auto w-full max-w-[420px]', className)}>
      <div className="overflow-hidden rounded-2xl border border-line bg-surface shadow-card">
        {/* browser bar */}
        <div className="flex items-center gap-2 border-b border-line bg-ivory-2 px-3 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="ml-2 flex-1 truncate rounded-md border border-line bg-surface px-3 py-1 text-[10px] text-muted">
            ak-ce.com.tr
          </span>
        </div>
        {/* site preview */}
        <div>
          {/* site nav */}
          <div className="flex items-center justify-between bg-[#0f2942] px-4 py-2.5 text-white">
            <span className="text-sm font-bold tracking-wide">
              AKÇE <span className="font-normal text-sky-300/90">Mühendislik</span>
            </span>
            <span className="hidden gap-3 text-[10px] text-white/70 sm:flex">
              <span>Hizmetler</span>
              <span>Galeri</span>
              <span>İletişim</span>
            </span>
          </div>
          {/* hero */}
          <div className="relative overflow-hidden bg-gradient-to-br from-[#12324f] to-[#1c4a72] px-4 py-6 text-white">
            <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-sky-300">Endüstriyel Mühendislik</span>
            <h4 className="mt-1.5 text-base font-bold leading-snug">Kriyojenik tank &amp; gaz sistemleri</h4>
            <p className="mt-1 text-[10px] text-white/70">Tasarım, üretim ve montaj · ASME / EN 13458</p>
            <div className="pointer-events-none absolute -right-1 -top-1 opacity-25">
              <svg width="88" height="88" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="34" y="14" width="22" height="52" rx="11" stroke="#bfe0ff" strokeWidth="2" />
                <line x1="34" y1="30" x2="56" y2="30" stroke="#bfe0ff" strokeWidth="1.5" />
                <line x1="34" y1="50" x2="56" y2="50" stroke="#bfe0ff" strokeWidth="1.5" />
                <line x1="45" y1="66" x2="45" y2="77" stroke="#bfe0ff" strokeWidth="2" />
              </svg>
            </div>
            <button className="mt-3 rounded-md bg-sky-400/90 px-3 py-1.5 text-[10px] font-semibold text-[#0f2942]">
              Hizmetlerimiz
            </button>
          </div>
          {/* service tiles */}
          <div className="grid grid-cols-3 gap-2 bg-white p-3">
            {tiles.map((tile) => {
              const Icon = tile.icon
              return (
                <div
                  key={tile.label}
                  className="flex flex-col items-center gap-1.5 rounded-lg border border-line bg-ivory px-1 py-3 text-center"
                >
                  <Icon size={16} className="text-[#1c4a72]" />
                  <span className="text-[9px] font-medium text-ink">{tile.label}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
