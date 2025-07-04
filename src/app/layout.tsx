import type { Metadata } from 'next'
import './globals.css'
import localFont from 'next/font/local'
//import { Toaster } from 'sonner'

const foundersGrotesk = localFont({
  src: [
    {
      path: '../assets/fonts/FoundersGrotesk-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/FoundersGrotesk-Light.otf',
      weight: '300',
      style: 'light',
    },
  ],
  variable: '--font-founders-grotesk',
})

export const metadata: Metadata = {
  title: 'Watch Project',
  description: 'Spletna stran je v pripravi',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body
        className={`${foundersGrotesk.variable} antialiased font-founders-grotesk`}
        suppressHydrationWarning
      >
        {children}
        {/* <Toaster /> */}
      </body>
    </html>
  )
}
