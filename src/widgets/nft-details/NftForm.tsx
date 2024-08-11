'use client'

import { FormEvent } from 'react'
import { Box, Button, FormControl, FormHelperText, InputLabel, MenuItem, Select, Stack } from '@mui/material'
import { Controller, FormProvider, useForm } from 'react-hook-form'
import { ControlledSelect, ControlledInputCount } from 'shared/ui'

const blockchain = [
  { value: 'Binance Smart Chain (BEP20)', label: 'Binance Smart Chain (BEP20)' },
  { value: 'Polygon', label: 'Polygon' },
  { value: 'Etherum Mainnet', label: 'Etherum Mainnet' },
  { value: 'OKX Chain', label: 'OKX Chain' },
]

const currency = [
  { value: 'BNB', label: 'BNB' },
  { value: 'Bitcoin', label: 'Bitcoin' },
  { value: 'Etherum', label: 'Etherum' },
]

import { z } from 'zod'
import { notifySuccess } from 'shared/lib'

export const formSchema = z.object({
  blockchain: z.string({ message: 'Select blockchain' }),
  currency: z.string({ message: 'Select currency' }),
  quantity: z.string({ message: 'Select quantity' }),
})

export type FormSchema = z.infer<typeof formSchema>

const defaultValues: FormSchema = {
  blockchain: blockchain[0].value,
  currency: currency[0].value,
  quantity: '1',
}

export const NftForm = () => {
  const methods = useForm<FormSchema>({
    defaultValues: defaultValues || { blockchain: '', currency: '', quantity: 1 },
  })

  const onSubmit = (data: FormSchema) => {
    // TODO: ADD LOGIC
    console.log(data)
    notifySuccess('You have successfully')
  }

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)} className='nft-detail__block form'>
      <FormProvider {...methods}>
        <Stack spacing={4}>
          <ControlledSelect<FormSchema>
            name='blockchain'
            label='Select Blockchain'
            placeholder='Select Blockchain'
            options={blockchain}
            fullWidth
          />
          <ControlledSelect<FormSchema>
            name='currency'
            label='Select Currency'
            placeholder='Select Currency'
            options={currency}
            fullWidth
          />
        </Stack>
        <Stack component={'ul'} spacing={4} mt={11}>
          <Stack component={'li'} direction={'row'} spacing={1} justifyContent={'space-between'} alignItems={'center'}>
            <Box color={'#aaa'} fontSize={14} fontWeight={600}>
              Price
            </Box>
            <Box fontSize={18}>$20.00 (0.0794 BNB)</Box>
          </Stack>
          <Stack component={'li'} direction={'row'} spacing={1} justifyContent={'space-between'} alignItems={'center'}>
            <Box color={'#aaa'} fontSize={14} fontWeight={600}>
              Quantity
            </Box>
            <Box>
              <ControlledInputCount />
            </Box>
          </Stack>
          <Stack component={'li'} direction={'row'} spacing={1} justifyContent={'space-between'} alignItems={'center'}>
            <Box color={'#aaa'} fontSize={14} fontWeight={600}>
              Total
            </Box>
            <Box color={'secondary.main'} fontSize={24} textAlign={'right'}>
              $20.00 (0.0794 BNB)
            </Box>
          </Stack>
        </Stack>
        <Box mt={11}>
          <Button type='submit' fullWidth>
            MINT
          </Button>
        </Box>
      </FormProvider>
    </form>
  )
}
