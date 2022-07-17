import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

const root = document.querySelector('[data-js="root"]')!

createRoot(root).render(
  <StrictMode>
    <h1>App</h1>
  </StrictMode>,
)
