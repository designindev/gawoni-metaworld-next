import { Components } from '@mui/material'

export const MuiModal: Components['MuiModal'] = {
  styleOverrides: {
    backdrop: {
      backgroundColor: 'rgba(#000, .6)',
      backdropFilter: 'blur(4px)',
    },
  },
}
