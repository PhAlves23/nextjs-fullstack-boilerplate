import React, { ReactNode } from 'react'

import { ScrollArea } from '@/components/ui/scroll-area'

export function PageContainer({
  children,
  scrollable = false,
}: Readonly<{
  children: ReactNode
  scrollable?: boolean
}>) {
  return (
    <>
      {scrollable ? (
        <ScrollArea className='h-[calc(100dvh-52px)]'>
          <div className='h-full p-5 md:px-8'>{children}</div>
        </ScrollArea>
      ) : (
        <div className='h-full p-5 md:px-8'>{children}</div>
      )}
    </>
  )
}
