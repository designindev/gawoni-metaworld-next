'use client'

import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import AddIcon from '@mui/icons-material/Add'
import { useState } from 'react'
import { useNftsQuery } from 'entities/nft/api/nft.api'
import { AdminFilter } from './AdminFilter'
import { NftCard } from 'entities/nft'
import { PATH_PAGE } from 'shared/lib'

export const Items = () => {
  const { data: items = [] } = useNftsQuery({ page: 1 })
  const [page, setPage] = useState(1)

  const onLoad = () => {
    setPage((p) => p + 1)
  }

  return (
    <>
      <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} mb={8}>
        <Typography variant='h1' component='h2'>
          All NFTs {page}
        </Typography>
        <Button component={Link} href='/admin/new-nft' sx={{ minWidth: { sm: '197px', xs: '1px' } }}>
          <Box display={{ sm: 'inline', xs: 'none' }}>Add New</Box>
          <Box display={{ sm: 'none', xs: 'inline' }}>
            <AddIcon fontSize='large' sx={{ verticalAlign: 'middle' }} />
          </Box>
        </Button>
      </Stack>
      <AdminFilter />
      <Grid container spacing={{ xs: 6, lg: 10 }}>
        {items.map((item, i) => {
          return (
            <Grid item key={i} xl={3} lg={4} sm={6} xs={12}>
              <NftCard nft={item} link={PATH_PAGE.shop.slug(item.id)} hasButtons />
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
      <Box sx={{ mt: 10, textAlign: 'center' }}>
        <Button size='large' sx={{ maxWidth: '453px', width: '100%' }} onClick={onLoad}>
          Load More
        </Button>
      </Box>
    </>
  )
}

export const Page = ({ page }: { page: number }) => {
  const { data: items = [], isLoading } = useNftsQuery({ page })

  return (
    <>
      {isLoading ? (
        <div>LOADING</div>
      ) : (
        <>
          {items.map((item, i) => {
            return (
              <Grid item key={i} xl={3} lg={4} sm={6} xs={12}>
                <NftCard nft={item} link={PATH_PAGE.shop.slug(item.id)} hasButtons />
              </Grid>
            )
          })}
        </>
      )}
    </>
  )
}
