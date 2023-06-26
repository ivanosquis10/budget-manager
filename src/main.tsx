import { createRoot } from 'react-dom/client'
import { App } from './App.tsx'
import { ControlProvider } from './context'
import './index.css'

createRoot(document.getElementById('root') as HTMLElement).render(
  <ControlProvider>
    <App />
  </ControlProvider>
)
