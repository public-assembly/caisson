import '../styles/globals.css'
import { Providers } from './providers'
import { Metadata } from 'next'
import { satoshi } from '@/fonts'
import { GridPattern } from '@/server'

export const metadata: Metadata = {
  title: 'Public Assembly - Caisson',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${satoshi.variable}`}>
      <body>
        <GridPattern />
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
