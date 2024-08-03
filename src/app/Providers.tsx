'use client'

import { SessionProvider } from 'next-auth/react'
import { StoreProvider } from './StoreProvider'
import { theme } from '../shared/theme/theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// TODO: change toast to Snackbar

export const Providers = ({ children }: { children: React.ReactNode }) => (
  <SessionProvider>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StoreProvider>
        <main className='wrapper'>{children}</main>
      </StoreProvider>
      <ToastContainer position='bottom-right' />
    </ThemeProvider>
  </SessionProvider>
)
