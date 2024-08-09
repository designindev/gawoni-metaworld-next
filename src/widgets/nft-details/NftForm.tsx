'use client'

import { FormEvent } from 'react'
import { Box, Button, FormControl, FormHelperText, InputLabel, MenuItem, Select, Stack } from '@mui/material'
import { InputCount } from 'shared/ui/input-count/InputCount'
import { Controller, useForm } from 'react-hook-form'

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

export const NftForm = () => {
  const methods = useForm({
    defaultValues: { blockChain: '', curency: '' },
  })

  const onSubmit = (data: { blockChain: string; curency: string }) => {
    // logic
    console.log(data)
  }

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)} className='nft-detail__block form'>
      <Stack spacing={4}>
        <Controller
          name={'blockChain'}
          control={methods.control}
          render={({ field: { onChange, ref, value }, fieldState: { error } }) => (
            <FormControl fullWidth>
              <InputLabel sx={{ overflow: 'initial', maxWidth: 'none' }}>Select Blockchain</InputLabel>
              <Select label='Blockchain' inputRef={ref} onChange={onChange} value={value} fullWidth>
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
            </FormControl>
          )}
        />
        <Controller
          name={'curency'}
          control={methods.control}
          render={({ field: { onChange, ref, value }, fieldState: { error } }) => (
            <FormControl fullWidth>
              <InputLabel sx={{ overflow: 'initial', maxWidth: 'none' }}>Select Currency</InputLabel>
              <Select label='Currency' inputRef={ref} onChange={onChange} value={value} fullWidth>
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
            </FormControl>
          )}
        />
      </Stack>
      <ul className='detail-list nft-detail__list nft-detail__list-mt-lg'>
        <li className='detail-list__item detail-list__item--row'>
          <div className='detail-list__label'>Price</div>
          <Box fontSize={18} className='detail-list__value'>
            $20.00 (0.0794 BNB)
          </Box>
        </li>
        <li className='detail-list__item detail-list__item--row'>
          <div className='detail-list__label'>Quantity</div>
          <div className='detail-list__value'>
            <InputCount />
          </div>
        </li>
        <li className='detail-list__item detail-list__item--row'>
          <div className='detail-list__label'>Total</div>
          <Box
            color={'secondary.main'}
            fontSize={24}
            textAlign={'right'}
            className='detail-list__value  detail-list__value--fz-24'
          >
            $20.00 (0.0794 BNB)
          </Box>
        </li>
      </ul>
      <div className='nft-detail__button'>
        <Button type='submit' fullWidth>
          MINT
        </Button>
      </div>
    </form>
  )
}
