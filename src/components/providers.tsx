'use client'

import { ReactNode } from 'react'
import { Toaster } from 'react-hot-toast'

import { ThemeProvider } from './theme-provider'

interface ProviderProps {
  children: ReactNode
}

export default function Providers({ children }: Readonly<ProviderProps>) {
  return (
    <div>
      <ThemeProvider
        attribute='class'
        defaultTheme='system'
        enableSystem
        disableTransitionOnChange
      >
        <Toaster position='bottom-right' />
        {children}
      </ThemeProvider>
    </div>
  )
}
