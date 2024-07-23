import type { Metadata } from 'next'
import { IBM_Plex_Sans, Roboto_Mono } from 'next/font/google'
import localFont from 'next/font/local'
import classNames from 'classnames'
import { StoreProvider } from './StoreProvider'
import { IBM_FLEX_SANS } from './fonts'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/free-mode'
// import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import './App.scss'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        {/* className={classNames(IBM_FLEX_SANS.className, IBM_FLEX_SANS.variable)} */}
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  )
}
