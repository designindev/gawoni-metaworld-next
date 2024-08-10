'use client'

import { Box, BoxProps, styled } from '@mui/material'

export const SwiperPagination = ({ ...rest }: BoxProps) => {
  return (
    <Box
      position={'relative'}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      flexWrap={'wrap'}
      zIndex={5}
      {...rest}
      sx={[
        {
          '& .swiper-pagination-bullet': {
            position: 'relative',
            display: 'inline-flex',
            opacity: 1,
            width: 20,
            height: 20,
            mx: 0.5,
            borderRadius: '50%',
            bgcolor: 'transparent',
            cursor: 'pointer',
            transition: 'transform 0.3s, background-color 0.3s, border 0.3s',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              margin: 'auto',
              width: '50%',
              height: '50%',
              bgcolor: '#fff',
              border: 'inherit',
              borderRadius: 'inherit',
              transition: 'inherit',
            },
            '&:hover': {
              '&::before': {
                bgcolor: '#ff4501',
              },
            },
            '&.swiper-pagination-bullet-active': {
              '&::before': {
                bgcolor: '#ff4501',
              },
            },
          },
        },
        ...(Array.isArray(rest.sx) ? rest.sx : [rest.sx]),
      ]}
    />
  )
}
