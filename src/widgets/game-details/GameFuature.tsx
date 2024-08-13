'use client'

import { Box, Grid, styled, Typography } from '@mui/material'
import { ReactNode } from 'react'

export const GameFuature = () => {
  return (
    <Box>
      <Grid container spacing={{ xs: 6, lg: 10 }}>
        <Grid item md={6} xs={12}>
          <Box sx={{ border: '1px solid #fff', borderRadius: 2, px: 6, py: 10, height: '100%' }}>
            <Typography
              variant='h5'
              component={'h4'}
              fontWeight={900}
              fontFamily={'var(--font-whyte)'}
              textTransform={'uppercase'}
            >
              game description
            </Typography>
            <Typography variant='body1' mt={6} fontSize={20} lineHeight={1.5}>
              The first Blockchain Rally Racing Game powered by real Rally Champions and Motosport Brands Release: Q2
              2024
            </Typography>
          </Box>
        </Grid>
        <Grid item md={6} xs={12}>
          <Box sx={{ border: '1px solid #fff', borderRadius: 2, px: 6, py: 10, height: '100%' }}>
            <Typography
              variant='h5'
              component={'h4'}
              fontWeight={900}
              fontFamily={'var(--font-whyte)'}
              textTransform={'uppercase'}
            >
              game Features
            </Typography>
            <Box component={'ul'}>
              <Li>Lorem Ipsum dolor sit amet</Li>
              <Li>Lorem Ipsum dolor sit amet</Li>
              <Li>Lorem Ipsum dolor sit amet</Li>
              <Li>Lorem Ipsum dolor sit amet</Li>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

const Li = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      component={'li'}
      mt={4}
      pl={11}
      minHeight={28}
      position={'relative'}
      sx={{
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '28px',
          height: '28px',
          background: 'center / contain no-repeat',
          backgroundImage: 'url(/images/icons/h2-icon-primary.svg)',
        },
      }}
    >
      {children}
    </Box>
  )
}
