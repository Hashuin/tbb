import type { InterestCache } from '../../domain/interest/ports/InterestCache'
import type { InterestRepository, RemoteSaveError } from '../../domain/interest/ports/InterestRepository'
import type { InterestEntry } from '../../domain/interest/entities'
import { normalizeInterestEntry } from '../../domain/interest/entities'

export type SaveInterestResult = {
  remoteSynced: boolean
  remoteError?: RemoteSaveError
}

export const loadInterests = async (
  cache: InterestCache,
  repository?: InterestRepository,
): Promise<InterestEntry[]> => {
  if (!repository) {
    return cache.load()
  }

  try {
    const remoteEntries = await repository.load()
    await cache.replaceAll(remoteEntries)
    return remoteEntries
  } catch {
    return cache.load()
  }
}

export const saveInterest = async (
  entry: InterestEntry,
  cache: InterestCache,
  repository?: InterestRepository,
): Promise<SaveInterestResult> => {
  const normalized = normalizeInterestEntry(entry)
  await cache.save(normalized)

  if (!repository) {
    return { remoteSynced: false }
  }

  try {
    await repository.save(normalized)
    return { remoteSynced: true }
  } catch (error) {
    const typedError = error as { message?: string; code?: string }
    return {
      remoteSynced: false,
      remoteError: {
        message: typedError?.message || 'Unknown remote error',
        code: typedError?.code,
      },
    }
  }
}
