const DEPLOY_MARKER_KEY = 'app_build_id'
const APP_CACHE_KEYS = ['custom_content', 'guild_interest_local'] as const

export function invalidateLocalCacheOnDeploy(currentBuildId: string): void {
  try {
    const previousBuildId = localStorage.getItem(DEPLOY_MARKER_KEY)
    if (previousBuildId === currentBuildId) {
      return
    }

    for (const key of APP_CACHE_KEYS) {
      localStorage.removeItem(key)
    }

    localStorage.setItem(DEPLOY_MARKER_KEY, currentBuildId)
  } catch (error) {
    console.warn('Unable to run deploy cache invalidation:', error)
  }
}
