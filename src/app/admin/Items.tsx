'use client'

import { NftCard } from 'entities/nft'
import { mockItems } from 'entities/nft/api/items'
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import AddIcon from '@mui/icons-material/Add'
import { PATH_PAGE } from 'shared/lib'
import { AdminFilter } from './AdminFilter'
import { useState } from 'react'

const newRow = mockItems.slice(0, 4)

export const Items = () => {
  const [items, setItems] = useState(mockItems)

  return (
    <>
      <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} mb={8}>
        <Typography variant='h1' component='h2'>
          All NFTs
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
      </Grid>
      <Box sx={{ mt: 10, textAlign: 'center' }}>
        <Button
          size='large'
          sx={{ maxWidth: '453px', width: '100%' }}
          onClick={() => {
            setItems((p) => [...p, ...newRow])
          }}
        >
          Load More
        </Button>
      </Box>
    </>
  )
}
