'use client'

import { createTheme } from '@mui/material'

export const theme = createTheme({
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: 'xxxl',
      },
    },
    MuiGrid: {
      defaultProps: {
        // spacing: { xs: 6, lg: 10 },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        color: 'primary',
      },
      styleOverrides: {
        root: ({ ownerState }) => ({
          display: 'inline-flex',
          padding: '5px 30px',
          height: '48px',
          borderRadius: 0,
          fontSize: '20px',
          minWidth: '197px',
          fontWeight: 500,
          textTransform: 'none',
          ...(ownerState.size === 'large' && {
            height: '64px',
          }),
          ...(ownerState.variant === 'contained' &&
            ownerState.color === 'primary' && {
              background: 'linear-gradient(-90deg, #00ff19 0%, #a8ffb0 100%)',
              border: '1px solid #00ff19',
              '&:hover': {
                background: 'linear-gradient(-90deg, #00ff19 0%, #00ff19 100%)',
                filter: 'drop-shadow(0px 0px 15px #00ff19)',
              },
              '&:active': {
                background: 'linear-gradient(-90deg, #05d219 0%, #05d219 100%)',
                filter: 'none',
              },
            }),
        }),
        // root: {
        //   fontSize: '24px',
        //   borderRadius: 0,
        //   border: '2px solid green',
        // },
      },
      variants: [
        {
          props: { variant: 'dashed' },
          style: {
            textTransform: 'none',
            border: `2px dashed blue`,
          },
        },
        {
          props: { variant: 'dashed', color: 'secondary' },
          style: {
            border: `4px dashed blue`,
          },
        },
      ],
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
  },
  spacing: 4,
  palette: {
    mode: 'dark',
    primary: {
      main: '#00ff19',
    },
    secondary: {
      main: '#ff4501',
    },
    white: {
      main: '#fff',
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
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    sectionTitle?: React.CSSProperties
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    sectionTitle: true
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    dashed: true
  }
  interface ButtonPropsColorOverrides {
    white: true
  }
}

declare module '@mui/material/styles' {
  interface Palette {
    white: Palette['primary']
  }

  interface PaletteOptions {
    white?: PaletteOptions['primary']
  }
}
