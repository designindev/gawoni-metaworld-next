'use client'

import { Box, BoxProps } from '@mui/material'

type SwiperButtonProps = {
  side: 'left' | 'right'
  circle?: boolean
}

const arrow = {
  content: '""',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  borderRadius: 'inherit',
  background: '42% center / 45% no-repeat',
  transition: 'opacity 0.3s',
}

export const SwiperButton = ({ side = 'left', circle, ...rest }: BoxProps & SwiperButtonProps) => {
  const left = side === 'left'
  const right = side === 'right'

  return (
    <Box
      position={'absolute'}
      top={0}
      bottom={0}
      left={left ? '0' : 'auto'}
      right={right ? '0' : 'auto'}
      my={'auto'}
      zIndex={5}
      width={{ xl: 56, xs: 32 }}
      height={{ xl: 56, xs: 32 }}
      border={'2px solid #fff'}
      borderRadius={circle ? '50%' : 0}
      {...rest}
      sx={[
        {
          cursor: 'pointer',
          '&::before': {
            ...arrow,
            backgroundImage: 'url(/images/icons/noun-arrow.svg)',
          },
          '&::after': {
            ...arrow,
            opacity: 0,
            backgroundImage: 'url(/images/icons/noun-arrow-secondary.svg)',
          },
          '&:hover::after': {
            opacity: 1,
          },
          '&.swiper-button-disabled': {
            opacity: 0.5,
            borderColor: '#f3f3f3',
            pointerEvents: 'none',
          },
        },
        right && {
          '&::before': {
            transform: 'rotate(180deg)',
          },
          '&::after': {
            transform: 'rotate(180deg)',
          },
        },
        ...(Array.isArray(rest.sx) ? rest.sx : [rest.sx]),
      ]}
    />
  )
}
