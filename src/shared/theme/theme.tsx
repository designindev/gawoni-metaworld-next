'use client'

import { createTheme } from '@mui/material'
import { BREAKPOINTS, COLORS } from 'shared/const'
import { MuiButton, MuiDrawer, MuiModal, MuiPagination, MuiPaginationItem, MuiTypography } from './components'

export const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#000',
    },
    text: {
      primary: '#fff',
    },
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
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: 'xxxl',
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: COLORS.dark,
          marginBottom: '48px',
          borderRadius: '30px',
          '&:first-of-type': {
            borderRadius: '30px',
            margin: '0',
            marginBottom: '48px',
          },
          '&:last-of-type': {
            borderRadius: '30px',
          },
          '&.Mui-expanded': {
            margin: 0,
            marginBottom: '48px',
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          padding: '32px 24px',
        },
        content: {
          margin: 0,
          fontSize: 20,
          fontFamily: 'Whyte',
          fontWeight: 700,
          '&.Mui-expanded': {
            margin: 0,
          },
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: '0 24px 24px',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          position: 'relative',
          transform: 'none',
          marginBottom: '15px',
          color: '#fff',
        },
      },
    },
    MuiOutlinedInput: {
      defaultProps: {},
      styleOverrides: {
        root: {
          borderRadius: '8px',
        },
        notchedOutline: {
          top: '0',
          borderColor: '#fff',
          '& legend': {
            display: 'none',
          },
        },
        input: {
          padding: '0 12px',
          height: '48px',
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        fullWidth: true,
      },
    },
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
      fontWeight: 600,
      color: 'gray',
      fontSize: 14,
    },
  },
  spacing: 4,
  breakpoints: {
    values: BREAKPOINTS,
  },
})

theme.components = {
  ...theme.components,
  MuiButton,
  MuiTypography,
  MuiModal,
  MuiPagination,
  MuiPaginationItem,
  MuiDrawer,
}

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
  marginBottom: '60px',
  [theme.breakpoints.down('sm')]: {
    marginBottom: '30px',
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
