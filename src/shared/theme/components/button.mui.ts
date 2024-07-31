import { Components } from '@mui/material'

export const MuiButton: Components['MuiButton'] = {
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
      ...(ownerState.color === 'white' && {}),
    }),
    startIcon: {
      '&>*:nth-of-type(1)': {
        fontSize: '24px',
      },
    },
  },
  variants: [
    {
      props: { variant: 'outlined' },
      style: {
        borderRadius: '4px',
      },
    },
  ],
}
