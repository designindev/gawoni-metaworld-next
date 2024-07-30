'use client'

import { NftCard } from 'entities/nft'
import { mockItems } from 'entities/nft/api/items'
import { usePaginationQuery } from 'shared/model'
import { useState } from 'react'
import { Filter } from '../../../widgets/filter/Filter'
import { ActionMeta, SingleValue } from 'react-select'
import { Pagination } from 'shared/ui'
import { Grid } from '@mui/material'

export const ShopFilter = () => {
  const [page, onChangePage] = usePaginationQuery()
  const [filters, setFilters] = useState<Record<string, string>>({})
  const count = Object.values(filters).filter((el) => el).length

  const onChangeFilter = (newValue: SingleValue<{ value: string; label: string }>, actionMeta: ActionMeta<{ value: string; label: string }>) => {
    const name = actionMeta.name
    if (!name) return
    if (actionMeta.action === 'select-option') setFilters((prev) => ({ ...prev, [name]: newValue?.value || '' }))
    if (actionMeta.action === 'clear') setFilters((prev) => ({ ...prev, [name]: '' }))
  }

  return (
    <>
      <Filter count={count} onChange={onChangeFilter} className='shop__filter' />
      <Grid container spacing={4}>
        {mockItems.map((item, i) => {
          return (
            <Grid item key={i} xl={3} lg={4} sm={6}>
              <NftCard nft={item} />
            </Grid>
          )
        })}
      </Grid>
      <Pagination onChange={(_, page) => onChangePage(page)} page={page} count={100} shape='rounded' className='mt-55 d-none d-lg-flex' />
      <Pagination onChange={(_, page) => onChangePage(page)} page={page} count={100} siblingCount={0} shape='rounded' className='mt-55 d-lg-none' />
    </>
  )
}
