import { createRoot } from 'react-dom/client'
import { ControlProvider } from './context'
import { ThemeProvider } from './components'
import { App } from './App.tsx'
import './index.css'

createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
    <ControlProvider>
      <App />
    </ControlProvider>
  </ThemeProvider>
)
