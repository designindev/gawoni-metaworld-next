'use client'

import { createTheme } from '@mui/material'
import { BREAKPOINTS, COLORS } from 'shared/const'

const stylePaginationItem = {
  backgroundColor: COLORS.dark,
  minWidth: '44px',
  height: '44px',
  [`@media only screen and (max-width: ${BREAKPOINTS.sm}px)`]: {
    minWidth: '36px',
    height: '36px',
  },
}
const hoverAndSelected = {
  backgroundColor: COLORS.gray,
  color: '#000',
}

export const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#000',
    },
    text: {
      primary: COLORS.white,
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
    MuiCssBaseline: {
      styleOverrides: (theme) => ({
        '*': {
          boxSizing: 'border-box',
        },
        '*::before': {
          boxSizing: 'border-box',
        },
        '*::after': {
          boxSizing: 'border-box',
        },

        '::selection': {
          backgroundColor: '#ff4501',
          color: '#fff',
        },
        section: {
          paddingTop: '110px',
          paddingBottom: '110px',
          [theme.breakpoints.down('xl')]: {
            padding: '70px 0',
          },
          [theme.breakpoints.down('lg')]: {
            padding: '60px 0',
          },
        },
        button: {
          backgroundColor: 'transparent',
          border: 'none',
        },
        a: {
          color: '#fff',
          textDecoration: 'none',
        },
      }),
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: 'xxxl',
      },
      styleOverrides: {
        root: {
          padding: '0 15px!important',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {},
      },
    },
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        color: 'primary',
      },
      styleOverrides: {
        root: ({ ownerState }) => {
          return {
            display: 'inline-flex',
            padding: `5px ${ownerState.size === 'small' ? '25px' : '30px'}`,
            height: ownerState.size === 'medium' ? '48px' : ownerState.size === 'large' ? '58px' : '44px',
            borderRadius: 0,
            fontSize: ownerState.size === 'small' ? '16px' : '20px',
            minWidth: ownerState.size === 'small' ? 'auto' : '197px',
            fontWeight: 500,
            textTransform: 'none',
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
            ...(ownerState.variant === 'contained' &&
              ownerState.color === 'white' && {
                color: '#000',
                borderRadius: '6px',
              }),
            ...(ownerState.variant === 'outlined' &&
              ownerState.color === 'white' && {
                borderColor: '#fff',
                '&:hover': {
                  borderColor: COLORS.secondary,
                  backgroundColor: COLORS.secondary,
                },
              }),
          }
        },
        startIcon: {
          // '&>*:nth-of-type(1)': {
          //   fontSize: '24px',
          // },
        },
      },
      variants: [
        {
          props: { variant: 'outlined' },
          style: {
            borderRadius: '4px',
            borderWidth: '3px',
            '&:hover': {
              borderWidth: '3px',
            },
          },
        },
      ],
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#000',
          padding: '50px 30px',
          border: '5px solid #777',
          borderRadius: '12px 12px 0px 0px',
        },
      },
    },
    MuiPagination: {
      styleOverrides: {
        root: {
          display: 'flex',
          justifyContent: 'center',
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          label: 'div',
          body1: 'p',
          body2: 'p',
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        page: {
          ...stylePaginationItem,
          '&:hover': hoverAndSelected,
          '&.Mui-selected': hoverAndSelected,
          '&.Mui-selected:hover': hoverAndSelected,
        },
        previousNext: {
          ...stylePaginationItem,
          margin: '0 20px',
          [`@media only screen and (max-width: ${BREAKPOINTS.sm}px)`]: {
            margin: '0 5px',
            minWidth: '36px',
            height: '36px',
          },
        },
        ellipsis: {
          color: '#fff',
          fontSize: '16px',
          fontWeight: 500,
          minWidth: '1px',
        },
      },
    },
    MuiModal: {
      styleOverrides: {
        backdrop: {
          backgroundColor: 'rgba(#000, .6)',
          backdropFilter: 'blur(4px)',
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: COLORS.dark,
          marginBottom: '48px',
          '&:last-child': {
            marginBottom: 0,
          },
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
          padding: '28px 24px',
        },
        content: {
          margin: 0,
          fontSize: 20,
          fontFamily: 'var(--font-whyte)',
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
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: 12,
        },
      },
    },
    MuiSelect: {
      defaultProps: {
        displayEmpty: true,
      },
      styleOverrides: {
        root: {},
        icon: {
          fontSize: 30,
        },
      },
    },
    MuiFormControl: {},
    MuiInputLabel: {
      defaultProps: {
        shrink: true,
      },
      styleOverrides: {
        root: {
          position: 'relative',
          transform: 'none',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        formControl: {},
        root: {
          padding: '0 12px',
          height: '48px',
        },
        input: {
          '&::placeholder': { color: '#fff', opacity: 1 },
          '&::-webkit-input-placeholder': { color: '#fff', opacity: 1 },
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
          padding: '0',
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: 14,
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        fullWidth: true,
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          // display: 'block',
          // marginBottom: '15px',
          color: '#fff',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          backgroundColor: COLORS.dark,
          borderRadius: '16px',
          fontSize: ownerState.size === 'medium' ? 18 : 16,
          height: 40,
          paddingLeft: '30px',
          paddingRight: '30px',
        }),
      },
    },
    MuiPaper: {
      styleOverrides: {},
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {},
      },
    },
  },
  typography: {
    fontFamily: ['var(--font-imb)', 'sans-serif'].join(','),
    fontSize: 16,
    h1: {
      fontFamily: 'var(--font-whyte)',
      fontSize: '56px',
      textTransform: 'uppercase',
      fontWeight: '900',
    },
    h2: {
      fontFamily: 'var(--font-whyte)',
      fontSize: '48px',
      textTransform: 'uppercase',
      fontWeight: '900',
    },
    h3: {
      fontSize: '40px',
    },
    h4: {
      fontSize: '32px',
    },
    h5: {
      fontSize: '24px',
    },
    h6: {
      fontSize: '18px',
    },
    label: {
      fontWeight: 600,
      color: 'gray',
      fontSize: 14,
    },
    body1: {
      fontSize: 16,
      lineHeight: 1.5,
    },
    body2: {
      fontSize: 14,
    },
  },
  spacing: 4,
  breakpoints: {
    values: BREAKPOINTS,
  },
})

export type Theme = typeof theme

theme.typography.h1 = {
  ...theme.typography.h1,
  [theme.breakpoints.down('xl')]: {
    fontSize: '48px',
  },
}
theme.typography.h2 = {
  ...theme.typography.h2,
}
theme.typography.h3 = {
  ...theme.typography.h3,
  [theme.breakpoints.down('xl')]: {
    fontSize: '36px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '28px',
  },
}

theme.typography.h4 = {
  ...theme.typography.h4,
  [theme.breakpoints.down('lg')]: {
    fontSize: '21px',
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
    label: React.CSSProperties
  }

  interface TypographyVariantsOptions {
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
  interface ButtonPropsColorOverrides {
    white: true
    dark: true
  }
}
