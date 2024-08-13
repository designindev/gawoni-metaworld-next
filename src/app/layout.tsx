import type { Metadata } from 'next'
import classNames from 'classnames'
import { Footer, Header } from 'widgets'
import { Providers } from './Providers'
import { Backdrop, Box, CircularProgress } from '@mui/material'
import { IBM_FLEX_SANS, Whyte } from './fonts'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import 'swiper/css'
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
      <body className={classNames(IBM_FLEX_SANS.variable, Whyte.variable)}>
        <Providers>
          <Box
            overflow={'hidden'}
            position={'relative'}
            maxWidth={1920}
            minWidth={320}
            minHeight={{ lg: 900, xs: 'auto' }}
            mx={'auto'}
          >
            <Header />
            <Box sx={{ height: { lg: '85px', xs: '60px' } }}></Box>
            <Box component={'main'}>{children}</Box>
            <Footer />
          </Box>
        </Providers>
      </body>
    </html>
  )
}
