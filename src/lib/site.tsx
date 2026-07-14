import { createContext, useContext } from 'react'
import type { ReactNode } from 'react'
import type { Content, Lang } from '../content'

interface SiteCtx {
  lang: Lang
  t: Content
}

const Ctx = createContext<SiteCtx | null>(null)

export function SiteProvider({ value, children }: { value: SiteCtx; children: ReactNode }) {
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export function useSite(): SiteCtx {
  const c = useContext(Ctx)
  if (!c) throw new Error('useSite must be used within <SiteProvider>')
  return c
}
