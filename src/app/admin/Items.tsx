'use client'

import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import AddIcon from '@mui/icons-material/Add'
import { useEffect, useState } from 'react'
import { useFetchNftsQuery } from 'entities/nft/api/nft.api'
import { AdminFilter } from './AdminFilter'
import { NftCard, NftCardSkeleton } from 'entities/nft'
import { PATH_PAGE } from 'shared/lib'
import { useSearchParams } from 'next/navigation'

export const Items = () => {
  const [page, setPage] = useState(1)
  const searchParams = useSearchParams()
  const game = searchParams.get('game') ?? undefined
  const category = searchParams.get('category') ?? undefined
  const rarity = searchParams.get('rarity') ?? undefined
  const { data: { data: nfts = [], lastPage } = {}, isFetching } = useFetchNftsQuery({
    page: 1,
    game,
    category,
    rarity,
  })

  const onLoad = () => {
    setPage((p) => p + 1)
  }

  useEffect(() => {
    setPage(1)
  }, [game, category, rarity])

  return (
    <>
      <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} mb={8}>
        <Typography variant='h1' component='h2'>
          All NFTs
        </Typography>
        <Button component={Link} href={PATH_PAGE.adminPanel['newNft']} sx={{ minWidth: { sm: '197px', xs: '1px' } }}>
          <Box display={{ sm: 'inline', xs: 'none' }}>Add New</Box>
          <Box display={{ sm: 'none', xs: 'inline' }}>
            <AddIcon fontSize='large' sx={{ verticalAlign: 'middle' }} />
          </Box>
        </Button>
      </Stack>
      <AdminFilter />
      <Grid container spacing={{ xs: 6, lg: 10 }}>
        {isFetching
          ? Array(4)
              .fill(null)
              .map((_, i) => {
                return (
                  <Grid item key={i} xl={3} lg={4} sm={6} xs={12}>
                    <NftCardSkeleton />
                  </Grid>
                )
              })
          : nfts.map((nft, i) => {
              return (
                <Grid item key={i} xl={3} lg={4} sm={6} xs={12}>
                  <NftCard nft={nft} link={PATH_PAGE.nfts.slug(nft.id)} hasButtons />
                </Grid>
              )
            })}
        {Array(page)
          .slice(1)
          .fill(null)
          .map((_, i) => {
            return <Page key={i} page={i + 2} />
          })}
      </Grid>
      {lastPage !== page && (
        <Box sx={{ mt: 10, textAlign: 'center' }}>
          <Button size='large' sx={{ maxWidth: '453px', width: '100%' }} onClick={onLoad}>
            Load More
          </Button>
        </Box>
      )}
    </>
  )
}

export const Page = ({ page }: { page: number }) => {
  const { data: { data: nfts = [] } = {}, isLoading } = useFetchNftsQuery({ page, limit: 4 })

  return (
    <>
      {isLoading ? (
        Array(4)
          .fill(null)
          .map((_, i) => {
            return (
              <Grid item key={i} xl={3} lg={4} sm={6} xs={12}>
                <NftCardSkeleton />
              </Grid>
            )
          })
      ) : (
        <>
          {nfts.map((item, i) => {
            return (
              <Grid item key={i} xl={3} lg={4} sm={6} xs={12}>
                <NftCard nft={item} link={PATH_PAGE.nfts.slug(item.id)} hasButtons />
              </Grid>
            )
          })}
        </>
      )}
    </>
  )
}
