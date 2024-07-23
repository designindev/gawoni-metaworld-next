'use client'

import { Button } from 'shared/ui/button/Button'
import { Select } from 'shared/ui'
import { FormEvent } from 'react'

import React from 'react'

export const ShopForm = () => {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // logic
  }

  return (
    <form onSubmit={onSubmit} className='nft-detail__block form'>
      <div className='form__input form__input--mb-sm'>
        <div className='input-label'>Select Blockchain</div>
        <Select
          name='blockchain'
          defaultValue={{ value: 'Binance Smart Chain (BEP20)', label: 'Binance Smart Chain (BEP20)' }}
          options={[
            { value: 'Binance Smart Chain (BEP20)', label: 'Binance Smart Chain (BEP20)' },
            { value: 'Polygon', label: 'Polygon' },
            { value: 'Etherum Mainnet', label: 'Etherum Mainnet' },
            { value: 'OKX Chain', label: 'OKX Chain' },
          ]}
        />
      </div>
      <div className='form__input form__input--mb-sm'>
        <div className='input-label'>Select Currency</div>
        <Select
          name='currency'
          defaultValue={{ value: 'BNB', label: 'BNB' }}
          options={[
            { value: 'BNB', label: 'BNB' },
            { value: 'Bitcoin', label: 'Bitcoin' },
            { value: 'Etherum', label: 'Etherum' },
          ]}
        />
      </div>
      <ul className='detail-list nft-detail__list nft-detail__list-mt-lg'>
        <li className='detail-list__item detail-list__item--row'>
          <div className='detail-list__label'>Price</div>
          <div className='detail-list__value detail-list__value--fz-18'>$20.00 (0.0794 BNB)</div>
        </li>
        <li className='detail-list__item detail-list__item--row'>
          <div className='detail-list__label'>Quantity</div>
          <div className='detail-list__value'>
            <div className='input-count'>
              <button className='input-count__operation input-count__operation--minus'>
                <i className='text-icon text-icon--minus'></i>
              </button>
              <input type='text' className='input-count__input' value='1' onChange={() => {}} />
              <button className='input-count__operation input-count__operation--plus'>
                <i className='text-icon text-icon--plus'></i>
              </button>
            </div>
          </div>
        </li>
        <li className='detail-list__item detail-list__item--row'>
          <div className='detail-list__label'>Total</div>
          <div className='detail-list__value text-secondary detail-list__value--fz-24 text-right'>$20.00 (0.0794 BNB)</div>
        </li>
      </ul>
      <div className='nft-detail__button'>
        <Button maxWidth>MINT</Button>
      </div>
    </form>
  )
}
