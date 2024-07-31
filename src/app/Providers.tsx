'use client'

import { SessionProvider } from 'next-auth/react'
import { StoreProvider } from './StoreProvider'
import { theme } from './theme'
import { ThemeProvider } from '@mui/material'

export const Providers = ({ children }: { children: React.ReactNode }) => (
  <SessionProvider>
    <ThemeProvider theme={theme}>
      {/* <StoreProvider> */}
      <main className='wrapper'>{children}</main>
      {/* </StoreProvider> */}
    </ThemeProvider>
  </SessionProvider>
)
