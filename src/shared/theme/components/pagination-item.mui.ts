import { BREAKPOINTS, COLORS } from 'shared/const'
import { Components } from '@mui/material'

const style = {
  backgroundColor: COLORS.dark,
  color: '#fff',
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

export const MuiPaginationItem: Components['MuiPaginationItem'] = {
  styleOverrides: {
    page: {
      ...style,
      '&:hover': hoverAndSelected,
      '&.Mui-selected': hoverAndSelected,
      '&.Mui-selected:hover': hoverAndSelected,
    },
    previousNext: {
      ...style,
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
}
