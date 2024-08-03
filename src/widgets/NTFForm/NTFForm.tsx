'use client'

import { FormEvent } from 'react'
import { Box, Button, FormControl, FormHelperText, InputLabel, MenuItem, Select, Stack } from '@mui/material'
import { InputCount } from 'shared/ui/input-count/InputCount'

const blockChain = [
  { value: 'Binance Smart Chain (BEP20)', label: 'Binance Smart Chain (BEP20)' },
  { value: 'Polygon', label: 'Polygon' },
  { value: 'Etherum Mainnet', label: 'Etherum Mainnet' },
  { value: 'OKX Chain', label: 'OKX Chain' },
]

const currenty = [
  { value: 'BNB', label: 'BNB' },
  { value: 'Bitcoin', label: 'Bitcoin' },
  { value: 'Etherum', label: 'Etherum' },
]

export const NTFForm = () => {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // logic
  }

  return (
    <form onSubmit={onSubmit} className='nft-detail__block form'>
      <Stack spacing={4}>
        <FormControl fullWidth>
          <InputLabel id='select-block-chain'>Select Blockchain</InputLabel>
          <Select labelId='demo-simple-select-label' id='select-block-chain' label='Age' value={''} fullWidth>
            <MenuItem value=''>
              <em>Select Blockchain</em>
            </MenuItem>
            {blockChain.map((el, i) => {
              return (
                <MenuItem key={i} value={el.value}>
                  {el.label}
                </MenuItem>
              )
            })}
          </Select>
          {false && <FormHelperText>{'error'}</FormHelperText>}
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id='select-curency'>Select Currency</InputLabel>
          <Select labelId='demo-simple-select-label' id='select-curency' label='Age' value={''} fullWidth>
            <MenuItem value=''>
              <em>Select Currency</em>
            </MenuItem>
            {currenty.map((el, i) => {
              return (
                <MenuItem key={i} value={el.value}>
                  {el.label}
                </MenuItem>
              )
            })}
          </Select>
          {false && <FormHelperText>{'error'}</FormHelperText>}
        </FormControl>
      </Stack>
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
