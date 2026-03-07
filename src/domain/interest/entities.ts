export type ItemRequest = {
  item: string
  slot: string
  priority: string
  source: string
  notes: string
}

export type InterestEntry = {
  id?: number | string
  name: string
  role: string
  level: string
  availability: string
  contact: string
  build: string
  item_requests?: ItemRequest[]
  interest_boss_ids?: number[]
  interest_activity_ids?: number[]
  interest_guide_ids?: number[]
  created_at?: string
}

export const normalizeInterestEntry = (entry: InterestEntry): InterestEntry => ({
  ...entry,
  item_requests: entry.item_requests ?? [],
  interest_boss_ids: entry.interest_boss_ids ?? [],
  interest_activity_ids: entry.interest_activity_ids ?? [],
  interest_guide_ids: entry.interest_guide_ids ?? [],
})

export const normalizeInterestEntries = (entries: InterestEntry[]): InterestEntry[] =>
  entries.map(normalizeInterestEntry)
