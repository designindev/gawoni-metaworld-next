'use client'

import { NFT, NftCard, NftCardSkeleton, useNftsQuery } from 'entities/nft'
import { usePaginationQuery } from 'shared/model'
import { Filter } from 'widgets/filter/Filter'
import { Grid, Pagination, Skeleton, Stack, useMediaQuery } from '@mui/material'
import { Theme } from 'shared/theme/theme'
import { PATH_PAGE } from 'shared/lib'
import { useSearchParams } from 'next/navigation'

export const ShopFilter = () => {
  const [page, onChangePage] = usePaginationQuery()
  const matches = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'))
  const searchParams = useSearchParams()
  const game = searchParams.get('game') ?? undefined
  const category = searchParams.get('category') ?? undefined
  const rarity = searchParams.get('rarity') ?? undefined
  const { data: { data: nfts = [], count, lastPage } = {}, isFetching } = useNftsQuery({
    page,
    game,
    category,
    rarity,
    limit: 4,
  })

  return (
    <>
      <Filter />
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
          : nfts.map((item, i) => {
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
        count={lastPage}
        shape='rounded'
        siblingCount={matches ? 1 : 0}
        sx={{ mt: { xs: 10, lg: 14 } }}
      />
    </>
  )
}
