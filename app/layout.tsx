import type { Metadata } from 'next'
import { Delius, Playfair_Display, Lilita_One, Dancing_Script } from 'next/font/google'

import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { LayoutShell } from '@/components/navigation/LayoutShell'

const delius = Delius({ weight: '400', subsets: ['latin'], variable: '--font-inter' })
const playfairDisplay = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' })
const lilitaOne = Lilita_One({ weight: '400', subsets: ['latin'], variable: '--font-brand' })
const dancingScript = Dancing_Script({ subsets: ['latin'], variable: '--font-script', weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'THE SOCIAL ANIMAL',
  description: 'Analyze influencer campaigns with THE SOCIAL ANIMAL AI-powered insights',
  generator: 'v0.app',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${delius.variable} ${playfairDisplay.variable} ${lilitaOne.variable} ${dancingScript.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased min-h-screen bg-background">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <LayoutShell>
            {children}
          </LayoutShell>
        </ThemeProvider>
      </body>
    </html>
  )
}
