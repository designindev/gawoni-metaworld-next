'use client'
import { NftCard } from 'entities/nft'
import { mockItems } from 'entities/nft/api/items'
import { usePaginationQuery } from 'shared/model'
import { Pagination } from 'shared/ui'

const Shop = () => {
  // const [page, onChangePage] = usePaginationQuery()

  return (
    <section className='section s-shop'>
      <div className='container s-shop__container'>
        <h1 className='h1 section__heading'>NFT Shop</h1>
        <div className='shop s-shop__shop'>
          <div className='shop__filter filter'>
            <div className='filter__top'>
              <div className='filter__left'>
                <div className='filter__label h3 h3--fz-32'>Filters</div>
                <div className='filter__number'>2</div>
              </div>
              <div className='filter__right'>
                <button className='btn btn--white btn--border btn--w-max'>Clear all</button>
              </div>
            </div>
            <div className='filter__items'>
              <div className='filter__items-item'>
                <div className='filter__items-label'>Game</div>
                <div className='filter__items-input'>
                  <select name='name'>
                    <option value='K 4 Rally'>K 4 Rally</option>
                    <option value='K 4 Rally'>K 4 Rally</option>
                    <option value='K 4 Rally'>K 4 Rally</option>
                    <option value='K 4 Rally'>K 4 Rally</option>
                  </select>
                </div>
              </div>
              <div className='filter__items-item'>
                <div className='filter__items-label'>Game</div>
                <div className='filter__items-input'>
                  <select name='name'>
                    <option value='K 4 Rally'>K 4 Rally</option>
                    <option value='K 4 Rally'>K 4 Rally</option>
                    <option value='K 4 Rally'>K 4 Rally</option>
                    <option value='K 4 Rally'>K 4 Rally</option>
                  </select>
                </div>
              </div>
              <div className='filter__items-item'>
                <div className='filter__items-label'>Game</div>
                <div className='filter__items-input'>
                  <select name='name'>
                    <option value='K 4 Rally'>K 4 Rally</option>
                    <option value='K 4 Rally'>K 4 Rally</option>
                    <option value='K 4 Rally'>K 4 Rally</option>
                    <option value='K 4 Rally'>K 4 Rally</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className='row items shop__items'>
            {mockItems.map((item, i) => {
              return <NftCard key={i} nft={item} className='col-lg-3 col-12 item-bg--grid' />
            })}
          </div>
          {/* <Pagination onChangePage={onChangePage} count={800} limit={8} page={page} className='mt-55' /> */}
          <Pagination count={800} limit={8} className='mt-55' />
        </div>
      </div>
    </section>
  )
}

export default Shop
