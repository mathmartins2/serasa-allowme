import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages/App'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { worker } from './mocks/msw/browser'
import { parsedEnv } from './env'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'

const queryClient = new QueryClient()

if (parsedEnv.VITE_ENABLE_MOCKS) {
  worker.start();
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>,
)
