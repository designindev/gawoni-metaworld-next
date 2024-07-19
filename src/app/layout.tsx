import type { Metadata } from 'next'
import { IBM_Plex_Sans } from 'next/font/google'
import localFont from 'next/font/local'
import classNames from 'classnames'
import { StoreProvider } from './StoreProvider'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/free-mode'
// import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import './App.scss'

const IBM_FLEX_SANS = IBM_Plex_Sans({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
})
const Whyte900 = localFont({
  src: './Whyte-Black.woff2',
  variable: '--font-whyte-900',
  weight: '900',
})

const Whyte500 = localFont({
  src: './Whyte-Medium.woff2',
  variable: '--font-whyte-500',
  weight: '500',
})

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
    <html lang='en' className={classNames(Whyte500.variable, Whyte900.variable)}>
      <head></head>
      <body className={IBM_FLEX_SANS.className}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  )
}
