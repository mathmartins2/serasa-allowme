import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages/App'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { worker } from './mocks/msw/browser'

const queryClient = new QueryClient()

if (import.meta.env.VITE_ENABLE_MOCKS === true) {
  worker.start();
}

console.log(import.meta.env.VITE_ENABLE_MOCKS)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
)
