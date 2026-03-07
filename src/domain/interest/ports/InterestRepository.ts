import type { InterestEntry } from '../entities'

export type RemoteSaveError = {
  message: string
  code?: string
}

export interface InterestRepository {
  load(): Promise<InterestEntry[]>
  save(entry: InterestEntry): Promise<void>
}
