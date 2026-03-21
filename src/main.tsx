import { StrictMode, useCallback, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import './enhancements.css'
import App from './App.tsx'
import { invalidateLocalCacheOnDeploy } from './shared/storage/invalidateOnDeploy'
import { CinematicSplash } from './presentation/components/CinematicSplash'

invalidateLocalCacheOnDeploy(__APP_BUILD_ID__)

function AppBootstrap() {
  const [showSplash, setShowSplash] = useState(true)

  const handleSplashComplete = useCallback(() => {
    setShowSplash(false)
  }, [])

  return (
    <>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      {showSplash ? <CinematicSplash onComplete={handleSplashComplete} /> : null}
    </>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppBootstrap />
  </StrictMode>,
)
