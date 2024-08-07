'use client'

import { NFT, NftCard } from 'entities/nft'
import { usePaginationQuery } from 'shared/model'
import { Filter } from 'widgets/filter/Filter'
import { Grid, Pagination, useMediaQuery } from '@mui/material'
import { Theme } from 'shared/theme/theme'
import { PATH_PAGE } from 'shared/lib'
import { useNftsQuery } from 'entities/nft/api/nft.api'

export const ShopFilter = ({ items: i }: { items: NFT[] }) => {
  const [page, onChangePage] = usePaginationQuery()
  const matches = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'))
  const { data: items = [] } = useNftsQuery({ page })

  return (
    <>
      <Filter />
      <Grid container spacing={{ xs: 6, lg: 10 }}>
        {items.map((item, i) => {
          return (
            <Grid item key={i} xl={3} lg={4} sm={6} xs={12}>
              <NftCard nft={item} link={PATH_PAGE.shop.slug(item.id)} />
            </Grid>
          )
        })}
      </Grid>
      <Pagination
        onChange={(_, page) => onChangePage(page)}
        page={page}
        count={100}
        shape='rounded'
        siblingCount={matches ? 1 : 0}
        sx={{ mt: { xs: 10, lg: 14 } }}
      />
    </>
  )
}
