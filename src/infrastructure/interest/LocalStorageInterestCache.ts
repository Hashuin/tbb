import type { InterestCache } from '../../domain/interest/ports/InterestCache'
import type { InterestEntry } from '../../domain/interest/entities'
import { normalizeInterestEntries } from '../../domain/interest/entities'

export class LocalStorageInterestCache implements InterestCache {
  private readonly storageKey: string

  constructor(storageKey = 'guild_interest_local') {
    this.storageKey = storageKey
  }

  async load(): Promise<InterestEntry[]> {
    const stored = localStorage.getItem(this.storageKey)
    const parsed = stored ? (JSON.parse(stored) as InterestEntry[]) : []
    return normalizeInterestEntries(parsed)
  }

  async save(entry: InterestEntry): Promise<void> {
    const current = await this.load()
    const next = [entry, ...current]
    await this.replaceAll(next)
  }

  async replaceAll(entries: InterestEntry[]): Promise<void> {
    localStorage.setItem(this.storageKey, JSON.stringify(entries))
  }
}
