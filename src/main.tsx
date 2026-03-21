import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import './enhancements.css'
import App from './App.tsx'
import { invalidateLocalCacheOnDeploy } from './shared/storage/invalidateOnDeploy'

invalidateLocalCacheOnDeploy(__APP_BUILD_ID__)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
