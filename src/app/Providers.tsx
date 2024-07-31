'use client'

import { SessionProvider } from 'next-auth/react'
import { StoreProvider } from './StoreProvider'
import { theme } from '../shared/theme/theme'
import { CssBaseline, ThemeProvider } from '@mui/material'

export const Providers = ({ children }: { children: React.ReactNode }) => (
  <SessionProvider>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <StoreProvider> */}
      <main className='wrapper'>{children}</main>
      {/* </StoreProvider> */}
    </ThemeProvider>
  </SessionProvider>
)
