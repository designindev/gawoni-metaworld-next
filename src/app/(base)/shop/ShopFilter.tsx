'use client'

import { NftCard } from 'entities/nft'
import { mockItems } from 'entities/nft/api/items'
import { usePaginationQuery } from 'shared/model'
import { Filter } from 'widgets/filter/Filter'
import { Grid, Pagination, useMediaQuery } from '@mui/material'
import { Theme } from 'shared/theme/theme'
import { PATH_PAGE } from 'shared/lib'

export const ShopFilter = () => {
  const [page, onChangePage] = usePaginationQuery()
  const matches = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'))

  return (
    <>
      <Filter />
      <Grid container spacing={{ xs: 6, lg: 10 }}>
        {mockItems.map((item, i) => {
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
