import type { Metadata } from 'next'
import classNames from 'classnames'
import { StoreProvider } from './StoreProvider'
import { IBM_FLEX_SANS } from './fonts'
import 'swiper/css/bundle'
// import 'swiper/css'
// import 'swiper/css/effect-fade'
// import 'swiper/css/free-mode'
// import 'swiper/css/navigation'
// import 'swiper/css/thumbs'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
// import 'bootstrap/dist/css/bootstrap-grid.min.css'
// import 'bootstrap/dist/css/bootstrap-grid.rtl.min.css'
import './App.scss'
import { Footer, Header } from 'widgets'
import { Providers } from './Providers'

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
      <body className={classNames(IBM_FLEX_SANS.className, IBM_FLEX_SANS.variable)}>
        <Providers>
          <Header />
          <div className='header-height'></div>
          <main className='wrapper'>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
