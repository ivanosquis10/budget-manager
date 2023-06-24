import { createRoot } from 'react-dom/client'
import { App } from './App.tsx'
import './index.css'
import { ControlProvider } from './context/ControlProvider.tsx'

createRoot(document.getElementById('root') as HTMLElement).render(
  <ControlProvider>
    <App />
  </ControlProvider>
)
