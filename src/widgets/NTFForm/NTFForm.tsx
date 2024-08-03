'use client'

import { Select } from 'shared/ui'
import { FormEvent } from 'react'
import { Box, Button } from '@mui/material'
import { InputCount } from 'shared/ui/input-count/InputCount'

export const NTFForm = () => {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // logic
  }

  return (
    <form onSubmit={onSubmit} className='nft-detail__block form'>
      <Box>
        <Box>Select Blockchain</Box>
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
      </Box>
      <Box>
        <Box>Select Currency</Box>
        <Select
          name='currency'
          defaultValue={{ value: 'BNB', label: 'BNB' }}
          options={[
            { value: 'BNB', label: 'BNB' },
            { value: 'Bitcoin', label: 'Bitcoin' },
            { value: 'Etherum', label: 'Etherum' },
          ]}
        />
      </Box>
      <ul className='detail-list nft-detail__list nft-detail__list-mt-lg'>
        <li className='detail-list__item detail-list__item--row'>
          <div className='detail-list__label'>Price</div>
          <div className='detail-list__value detail-list__value--fz-18'>$20.00 (0.0794 BNB)</div>
        </li>
        <li className='detail-list__item detail-list__item--row'>
          <div className='detail-list__label'>Quantity</div>
          <div className='detail-list__value'>
            <InputCount />
          </div>
        </li>
        <li className='detail-list__item detail-list__item--row'>
          <div className='detail-list__label'>Total</div>
          <Box color={'secondary.main'} className='detail-list__value  detail-list__value--fz-24 text-right'>
            $20.00 (0.0794 BNB)
          </Box>
        </li>
      </ul>
      <div className='nft-detail__button'>
        <Button fullWidth>MINT</Button>
      </div>
    </form>
  )
}
