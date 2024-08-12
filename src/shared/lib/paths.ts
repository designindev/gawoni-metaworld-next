import { AnchorHTMLAttributes } from 'react'
import { config } from './config'

type PATH_PAGE = {
  root: string | ((...args: string[]) => string)
  [page: string]: string | ((...args: string[]) => string) | PATH_PAGE
}

export const PATH_PAGE = {
  root: '/',
  news: '/news',
  games: {
    root: '/games',
    slug: (slug: string) => `/games/${slug}`,
  },
  nfts: {
    root: '/nfts',
    slug: (slug: string) => `/nfts/${slug}`,
  },
  marketplace: '/marketplace',
  connectWallet: '/connect-wallet',
  download: '/download',
  register: '/register',
  login: '/login',
  resetPassword: '/reset-password',
  checkEmail: '/check-email',
  passwordResetSuccess: '/password-reset-success',
  404: '/404',
  error: '/error',
} as const satisfies PATH_PAGE

export const PATH_IMAGE = (image: string) => `${config.SITE_ENDPOINT}/${image}`

export type PATH_MENU = {
  href: string
  label: string
  auth?: boolean
  sub?: PATH_MENU[]
} & AnchorHTMLAttributes<HTMLAnchorElement>

export const PATH_MENU = [
  {
    href: PATH_PAGE.root,
    label: 'Home',
  },
  { href: 'https://medium.com/@gawooni', label: 'News', target: '_blank' },
  {
    href: PATH_PAGE.games.root,
    label: 'Games',
    sub: [
      { href: PATH_PAGE.games.slug('1'), label: 'K4Rally' },
      { href: PATH_PAGE.games.slug('2'), label: 'Tuk Tuk Rush' },
      { href: PATH_PAGE.games.slug('3'), label: 'Racing Game' },
      { href: PATH_PAGE.games.slug('4'), label: 'Martial Arts Game' },
    ],
  },
  { href: PATH_PAGE.nfts.root, label: 'NFT Shop' },
  { href: PATH_PAGE.connectWallet, label: 'Connect Wallet', auth: true },
] as const satisfies PATH_MENU[]
