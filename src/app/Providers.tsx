'use client'

import { SessionProvider } from 'next-auth/react'
import { StoreProvider } from './StoreProvider'
import { theme } from '../shared/theme/theme'
import { CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material'
import { ToastContainer } from 'react-toastify'
import { Global } from '@emotion/react'
import { reset } from './reset'
import 'react-toastify/dist/ReactToastify.css'

const inputGlobalStyles = <GlobalStyles styles={reset} />

export const Providers = ({ children }: { children: React.ReactNode }) => (
  <SessionProvider>
    <ThemeProvider theme={theme}>
      {inputGlobalStyles}
      <CssBaseline />
      <StoreProvider>{children}</StoreProvider>
      <ToastContainer position='bottom-right' />
    </ThemeProvider>
  </SessionProvider>
)
