'use client'

import { createTheme } from '@mui/material'
import { COLORS } from 'shared/const'
import { MuiButton, MuiDrawer, MuiModal, MuiPagination, MuiPaginationItem, MuiTypography } from './components'

export const theme = createTheme({
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: 'xxxl',
      },
    },
    MuiButton,
    MuiTypography,
    MuiModal,
    MuiPagination,
    MuiPaginationItem,
    MuiDrawer,
  },
  typography: {
    fontFamily: ['var(--font-imb)', 'sans-serif'].join(','),
    htmlFontSize: 16,
    h1: {
      fontFamily: 'Whyte',
    },
    h2: {},
    h3: {
      fontSize: '40px',
    },
    h4: {
      fontSize: '24px',
      lineHeight: '1.3',
    },
    h5: {
      fontSize: '18px',
    },
    h6: {
      fontSize: '16px',
    },
    label: {
      marginBottom: '10px',
      fontWeight: 600,
      color: 'gray',
      fontSize: 14,
    },
  },
  spacing: 4,
  palette: {
    primary: {
      main: COLORS.primary,
    },
    secondary: {
      main: COLORS.secondary,
    },
    white: {
      main: COLORS.white,
    },
    dark: {
      main: COLORS.dark,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 1024,
      xl: 1200,
      xxl: 1360,
      xxxl: 1570,
      xxxxl: 1870,
    },
  },
})

export type Theme = typeof theme

theme.typography.h2 = {
  fontFamily: 'Whyte',
  fontSize: '56px',
  textTransform: 'uppercase',
  fontWeight: '900',
  [theme.breakpoints.down('xl')]: {
    fontSize: '50px',
  },
  [theme.breakpoints.down('lg')]: {
    fontSize: '40px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '30px',
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '24px',
  },
}
theme.typography.h3 = {
  fontSize: '40px',
  [theme.breakpoints.down('xl')]: {
    fontSize: '36px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '28px',
  },
}
theme.typography.h4 = {
  fontSize: '24px',
  [theme.breakpoints.down('lg')]: {
    fontSize: '21px',
  },
}
theme.typography.sectionTitle = {
  ...theme.typography.h2,
  marginBottom: 15,
  [theme.breakpoints.down('sm')]: {
    marginBottom: 7,
  },
}

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true
    sm: true
    md: true
    lg: true
    xl: true
    xxl: true
    xxxl: true
    xxxxl: true
  }

  interface TypographyVariants {
    sectionTitle: React.CSSProperties
    label: React.CSSProperties
  }

  interface TypographyVariantsOptions {
    sectionTitle?: React.CSSProperties
    label?: React.CSSProperties
  }

  interface Palette {
    white: Palette['primary']
    dark: Palette['primary']
  }

  interface PaletteOptions {
    white?: PaletteOptions['primary']
    dark?: PaletteOptions['primary']
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    sectionTitle: true
    label: true
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    dashed: true
  }
  interface ButtonPropsColorOverrides {
    white: true
    dark: true
  }
}
