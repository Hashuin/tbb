import type { SupabaseClient } from '@supabase/supabase-js'
import type { InterestRepository } from '../../domain/interest/ports/InterestRepository'
import type { InterestEntry } from '../../domain/interest/entities'
import { normalizeInterestEntries } from '../../domain/interest/entities'

const INTEREST_FIELDS =
  'id, name, role, level, availability, contact, build, item_requests, interest_boss_ids, interest_activity_ids, interest_guide_ids, created_at'

export class SupabaseInterestRepository implements InterestRepository {
  private readonly client: SupabaseClient

  constructor(client: SupabaseClient) {
    this.client = client
  }

  async load(): Promise<InterestEntry[]> {
    const { data, error } = await this.client
      .from('guild_interest')
      .select(INTEREST_FIELDS)
      .order('created_at', { ascending: false })

    if (error) {
      throw error
    }

    return normalizeInterestEntries((data as InterestEntry[]) ?? [])
  }

  async save(entry: InterestEntry): Promise<void> {
    const { error } = await this.client.from('guild_interest').insert(entry)

    if (error) {
      throw error
    }
  }
}
