'use client'

import { Box, Button, Chip, Stack, styled, Typography } from '@mui/material'
import Image from 'next/image'
import React, { ReactNode } from 'react'
import { PATH_PAGE } from 'shared/lib'
import Logo from 'shared/images/games/logo.png'

export const GameInfo = () => {
  return (
    <>
      <Stack
        flexDirection={{ lg: 'row', xs: 'column' }}
        rowGap={6}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Box maxWidth={'240px'}>
          <Image src={Logo} alt='' />
        </Box>
        <Box width={'100%'} maxWidth={310}>
          <Button href={PATH_PAGE.download} fullWidth>
            Play
          </Button>
        </Box>
      </Stack>
      <Stack
        flexDirection={{ lg: 'row', xs: 'column' }}
        justifyContent={'space-between'}
        alignItems={'center'}
        rowGap={8}
        mt={5}
      >
        <Stack direction='row' spacing={2}>
          <Chip label='Racing' />
          <Chip label='Blockchain game' />
        </Stack>

        <Stack
          component={'ul'}
          flexDirection={{ lg: 'row', xs: 'column' }}
          flexWrap={'wrap'}
          sx={(theme) => ({
            '& li:first-of-type': {
              pl: 0,
              ml: 0,
              [theme.breakpoints.down('lg')]: {
                mt: 0,
                pt: 0,
              },
              '&::before': { display: 'none' },
            },
            '& li:last-of-type': {
              mr: 0,
            },
          })}
        >
          <Li label={'developer'}>GAWOONI MetaLabs</Li>
          <Li label={'Release'}>02 2024</Li>
          <Li label={'platform'}>PC Client (Windows), Game Streaming, Mobile</Li>
        </Stack>
      </Stack>
    </>
  )
}

const Li = ({ label, children }: { label: string; children: ReactNode }) => {
  return (
    <Box
      component={'li'}
      fontWeight={600}
      pl={{ xl: 12, lg: 7, xs: 0 }}
      mr={{ xl: 11, lg: 7, xs: 0 }}
      pt={{ lg: 0, xs: 5 }}
      mt={{ lg: 0, xs: 5 }}
      position={'relative'}
      maxWidth={{ lg: 256, xs: '100%' }}
      fontSize={{ xl: 18, xs: 16 }}
      sx={{
        '&::before': {
          content: '""',
          position: 'absolute',
          top: { lg: '50%', xs: 0 },
          left: 0,
          mt: { lg: '-5px', xs: 0 },
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          bgcolor: 'secondary.main',
        },
      }}
    >
      <Typography
        variant='h6'
        component={'h5'}
        textTransform={'uppercase'}
        color={'gray.main'}
        letterSpacing={'.3em'}
        fontSize={16}
        mb={2}
      >
        {label}
      </Typography>
      <Box lineHeight={1.2}>{children}</Box>
    </Box>
  )
}
