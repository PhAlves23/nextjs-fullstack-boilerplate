import type { Metadata } from 'next'
import { ReactNode } from 'react'

import AppSidebar from '@/components/app-sidebar'
import { SidebarProvider } from '@/components/ui/sidebar'

export const metadata: Metadata = {
  title: 'Boilerplate - Dashboard',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <SidebarProvider>
      <AppSidebar>{children}</AppSidebar>
    </SidebarProvider>
  )
}
