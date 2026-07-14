import { en } from './en'
import { tr } from './tr'
import type { Content, Lang } from './types'

export const content: Record<Lang, Content> = { en, tr }
export const LANGS: Lang[] = ['en', 'tr']

/** Path prefix for a language ('' for the default English, '/tr' for Turkish). */
export const langPath = (lang: Lang): string => (lang === 'en' ? '/' : '/tr')

export type { Content, Lang }
