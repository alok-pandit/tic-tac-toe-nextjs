'use client'

import { Provider as JotaiProvider, createStore } from 'jotai'
import { ReactNode } from 'react'

const jotaiStore = createStore()

export default function Providers({ children }: { children: ReactNode }) {
  return <JotaiProvider store={jotaiStore}>{children}</JotaiProvider>
}
