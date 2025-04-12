'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query' 
import { Tooltip } from 'react-tooltip'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes 
    },
  },
})

export default function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      {children} 
      <Tooltip id="global-tooltip" />
    </QueryClientProvider>
  )
}