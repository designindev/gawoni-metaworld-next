import React from 'react'
import { Category } from './Category'
import { Box, Container, Stack, Typography } from '@mui/material'

export const Nfts = async () => {
  const items = await (await fetch('http://localhost:8088/api/nfts/')).json()

  return (
    <Box component={'section'} className='section section--gradient s-nfts'>
      <Container className='s-nfts__container nfts'>
        <Typography variant='h1' component='h2' mb={{ lg: 15, xs: 8 }}>
          <span className='section__heading-icon'>NFTs</span>
        </Typography>

        <Stack spacing={15}>
          <Category title='New nft releases' items={items} />
          <Category title='top sellers' items={items} />
        </Stack>
      </Container>
    </Box>
  )
}
