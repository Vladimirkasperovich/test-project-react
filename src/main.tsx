import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'
import './app/language/i18n.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense fallback={<div>...Loading</div>}>
        <App />
      </Suspense>
    </BrowserRouter>
  </StrictMode>,
)
