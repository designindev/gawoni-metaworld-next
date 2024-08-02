'use client'

import { NftCard } from 'entities/nft'
import { mockItems } from 'entities/nft/api/items'
import { usePaginationQuery } from 'shared/model'
import { useState } from 'react'
import { Filter } from '../../../widgets/filter/Filter'
import { ActionMeta, SingleValue } from 'react-select'
import { Grid, Pagination, useMediaQuery } from '@mui/material'
import { Theme } from 'shared/theme/theme'
import { PATH_PAGE } from 'shared/lib'

export const ShopFilter = () => {
  const [page, onChangePage] = usePaginationQuery()
  const [filters, setFilters] = useState<Record<string, string>>({})
  const count = Object.values(filters).filter((el) => el).length
  const matches = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'))

  const onChangeFilter = (
    newValue: SingleValue<{ value: string; label: string }>,
    actionMeta: ActionMeta<{ value: string; label: string }>
  ) => {
    const name = actionMeta.name
    if (!name) return
    if (actionMeta.action === 'select-option') setFilters((prev) => ({ ...prev, [name]: newValue?.value || '' }))
    if (actionMeta.action === 'clear') setFilters((prev) => ({ ...prev, [name]: '' }))
  }

  return (
    <>
      <Filter count={count} onChange={onChangeFilter} className='shop__filter' />
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
