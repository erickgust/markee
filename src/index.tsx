import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Root } from 'root'

const root = document.querySelector('[data-js="root"]')!

createRoot(root).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
