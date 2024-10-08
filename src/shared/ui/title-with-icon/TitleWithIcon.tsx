'use client'

import { Box, BoxProps } from '@mui/material'

export const TitleWithIcon = ({ side = 'left', ...rest }: BoxProps & { side?: 'left' | 'right' }) => {
  const left = side === 'left'
  const right = side === 'right'

  return (
    <Box
      component={'span'}
      display={'inline-block'}
      pl={left ? { lg: 19, sm: 15, xs: 13 } : 0}
      pr={right ? { lg: 19, sm: 15, xs: 13 } : 0}
      position={'relative'}
      fontSize={{ xl: 48, lg: 40, sm: 30, xs: 24 }}
      {...rest}
      sx={{
        ...rest.sx,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: { lg: 10, sm: 3, xs: 0 },
          left: left ? 0 : 'initial',
          right: right ? 0 : 'initial',
          width: { lg: 50, sm: 40, xs: 32 },
          height: { lg: 50, sm: 40, xs: 32 },
          background: 'center / contain no-repeat',
          backgroundImage: `url(/images/icons/h2-icon-${left ? 'secondary' : 'primary'}.svg)`,
        },
      }}
    />
  )
}
