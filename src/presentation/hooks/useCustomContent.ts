import { useEffect, useState } from 'react'

type UseCustomContentOptions<TContent> = {
  storageKey: string
  loadFromRemote?: () => Promise<TContent | null>
}

export const useCustomContent = <TContent>({
  storageKey,
  loadFromRemote,
}: UseCustomContentOptions<TContent>) => {
  const [customContent, setCustomContent] = useState<TContent | null>(null)
  const [contentLoading, setContentLoading] = useState(true)

  useEffect(() => {
    const loadContent = async () => {
      setContentLoading(true)

      if (loadFromRemote) {
        try {
          const remoteContent = await loadFromRemote()
          if (remoteContent) {
            setCustomContent(remoteContent)
            localStorage.setItem(storageKey, JSON.stringify(remoteContent))
            setContentLoading(false)
            return
          }
        } catch (error) {
          console.error('Failed to load content from remote source:', error)
        }
      }

      const stored = localStorage.getItem(storageKey)
      if (stored) {
        try {
          setCustomContent(JSON.parse(stored) as TContent)
        } catch (error) {
          console.error('Failed to parse local content:', error)
        }
      }

      setContentLoading(false)
    }

    void loadContent()
  }, [loadFromRemote, storageKey])

  return {
    customContent,
    setCustomContent,
    contentLoading,
  }
}
