'use client'

import { SessionProvider } from 'next-auth/react'
import { StoreProvider } from './StoreProvider'
import { theme } from '../shared/theme/theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { ToastContainer } from 'react-toastify'
import { Global } from '@emotion/react'
import { reset } from './reset'
import 'react-toastify/dist/ReactToastify.css'

export const Providers = ({ children }: { children: React.ReactNode }) => (
  <SessionProvider>
    <ThemeProvider theme={theme}>
      <Global styles={reset} />
      <CssBaseline />
      <StoreProvider>
        <main className='wrapper'>{children}</main>
      </StoreProvider>
      <ToastContainer position='bottom-right' />
    </ThemeProvider>
  </SessionProvider>
)
