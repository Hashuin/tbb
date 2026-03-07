import type { InterestEntry } from '../entities'

export interface InterestCache {
  load(): Promise<InterestEntry[]>
  save(entry: InterestEntry): Promise<void>
  replaceAll(entries: InterestEntry[]): Promise<void>
}
