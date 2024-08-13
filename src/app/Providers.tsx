'use client'

import { StoreProvider } from './StoreProvider'
import { theme } from '../shared/theme/theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const Providers = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <StoreProvider>{children}</StoreProvider>
    <ToastContainer position='bottom-right' />
  </ThemeProvider>
)
