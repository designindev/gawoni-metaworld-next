import React, { ReactNode } from 'react'
import { Category } from './Category'
import { Box, Container, Stack, Typography } from '@mui/material'
import { nfts } from './items'
import { TitleWithIcon } from 'shared/ui'

export const Nfts = async () => {
  return (
    <Box component={'section'} className='section section--gradient s-nfts'>
      <Container className='s-nfts__container nfts'>
        <Typography variant='h1' component='h2' mb={{ lg: 15, xs: 8 }}>
          <TitleWithIcon>Nft</TitleWithIcon>
        </Typography>

        <Stack spacing={15}>
          <Category title='New nft releases' items={nfts} />
          <Category title='top sellers' items={nfts} />
        </Stack>
      </Container>
    </Box>
  )
}
