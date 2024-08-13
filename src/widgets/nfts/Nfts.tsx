'use client'

import React, { useEffect } from 'react'
import { Category } from './Category'
import { CircularProgress, Container, Stack, Typography } from '@mui/material'
import { LoadingSection, Section, TitleWithIcon } from 'shared/ui'
import { useFetchNftsQuery } from 'entities/nft'

export const Nfts = () => {
  const { data: { data: nfts = [], count, lastPage } = {}, isFetching } = useFetchNftsQuery({})

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
          {isFetching ? (
            <LoadingSection />
          ) : (
            <>
              <Category title='New nft releases' items={nfts} />
              <Category title='top sellers' items={nfts} />
            </>
          )}
        </Stack>
      </Container>
    </Section>
  )
}
