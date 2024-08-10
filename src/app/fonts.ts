import { IBM_Plex_Sans } from 'next/font/google'
import localFont from 'next/font/local'

export const IBM_FLEX_SANS = IBM_Plex_Sans({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-imb',
})

export const Whyte = localFont({
  src: [
    {
      path: './fonts/Whyte-Black.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: './fonts/Whyte-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Whyte-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
    {
      path: './fonts/Whyte-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Whyte-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Whyte-Light.woff2',
      weight: '300',
      style: 'normal',
    },
  ],
  variable: '--font-whyte',
})
