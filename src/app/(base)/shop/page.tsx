'use client'

import { NftCard } from 'entities/nft'
import { mockItems } from 'entities/nft/api/items'
import { usePaginationQuery } from 'shared/model'
import { useState } from 'react'
import { Pagination } from 'shared/ui'
import { Filters } from './Filters1'
import { ActionMeta, SingleValue } from 'react-select'

const Shop = () => {
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
    <section className='section s-shop'>
      <div className='container s-shop__container'>
        <h1 className='h1 section__heading'>NFT Shop</h1>
        <div className='shop s-shop__shop'>
          <div className='shop__filter filter'>
            <Filters count={count} onChange={onChangeFilter} />
          </div>
          <div className='row items shop__items'>
            {mockItems.map((item, i) => {
              return <NftCard key={i} nft={item} className='col-lg-3 col-12 item-bg--grid' />
            })}
          </div>
          <Pagination onChangePage={onChangePage} count={800} limit={8} page={page} className='mt-55' />
        </div>
      </div>
    </section>
  )
}

export default Shop
