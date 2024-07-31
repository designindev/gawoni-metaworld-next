import React from 'react'
import { Category } from './Category'
import { Box, Container, Grid } from '@mui/material'

export const Nfts = () => {
  return (
    <Box component={'section'} className='section section--gradient s-nfts'>
      <Container className='s-nfts__container nfts'>
        <h2 className='h2 section__heading'>
          <span className='section__heading-icon'>NFTs</span>
        </h2>

        <Category title='New nft releases' />
        <Category title='top sellers' />
      </Container>
    </Box>
  )
}
