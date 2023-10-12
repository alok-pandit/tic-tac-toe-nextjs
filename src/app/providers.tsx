'use client'

import { Provider as JotaiProvider, createStore } from 'jotai'
import { ReactNode } from 'react'

export default function Providers({ children }: { children: ReactNode }) {
  const jotaiStore = createStore()

  return <JotaiProvider store={jotaiStore}>{children}</JotaiProvider>
}
