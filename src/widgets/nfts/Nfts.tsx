'use client'

import React, { useEffect } from 'react'
import { Category } from './Category'
import { Container, Stack, Typography } from '@mui/material'
import { Section, TitleWithIcon } from 'shared/ui'
import { useFetchNftsQuery } from 'entities/nft'

export const Nfts = () => {
  // TODO: ADD GRADIENT
  const { data: { data: nfts = [], count, lastPage } = {}, isFetching } = useFetchNftsQuery({})

  return (
    <Section>
      <Container>
        <Typography variant='h1' component='h2' mb={{ lg: 15, xs: 8 }}>
          <TitleWithIcon>Nft</TitleWithIcon>
        </Typography>

        <Stack spacing={15}>
          <Category title='New nft releases' items={nfts} />
          <Category title='top sellers' items={nfts} />
        </Stack>
      </Container>
    </Section>
  )
}
