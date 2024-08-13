import React, { useEffect } from 'react'
import { Category } from './Category'
import { Container, Stack, Typography } from '@mui/material'
import { Section, TitleWithIcon } from 'shared/ui'
import { NFT } from 'entities/nft'
import { getNfts } from 'lib/actions/nft.actions'

export const Nfts = async () => {
  const data = await getNfts()

  return (
    <Section
      sx={{
        background: 'linear-gradient(180deg, #3c453c 0%, #000000 100%)',
      }}
    >
      <Container>
        <Typography variant='h1' component='h2' mb={{ lg: 15, xs: 8 }}>
          <TitleWithIcon>Nft</TitleWithIcon>
        </Typography>

        <Stack spacing={15}>
          <Category title='New nft releases' items={data.items} />
          <Category title='top sellers' items={data.items} />
        </Stack>
      </Container>
    </Section>
  )
}
