'use client'

import { FormEvent, useState } from 'react'
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
} from '@mui/material'
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
import { NFT } from 'entities/nft'
import { getPriceBySymbol } from './get-price-by-symbol'

export const formSchema = z.object({
  chain: z.string({ message: 'Select blockchain' }),
  coin: z.string({ message: 'Select currency' }),
  quantity: z.number({ message: 'Select quantity' }),
})

export type FormSchema = z.infer<typeof formSchema>

const defaultValues: FormSchema = {
  chain: blockchain[0].value,
  coin: currency[0].value,
  quantity: 1,
}

export const NftForm = ({ nft: nftDetail }: { nft: NFT }) => {
  const { chains } = nftDetail
  const [getSelectedChain, setGetSelectedChain] = useState<string[]>([])
  const [selectedChainId, setselectedChainId] = useState<null | number>(null)
  const [selectedChainValue, setselectedChainValue] = useState('')
  const [selectedCoinValue, setselectedCoinValue] = useState('')
  const [selectedCoinName, setselectedCoinName] = useState('')
  const [contractAddress, setContractAddress] = useState('')
  const [chainId, setChainId] = useState('')
  const [nftPrice, setPrice] = useState(nftDetail.price)
  const [nftCoinPrice, setNftCoinPrice] = useState('')
  const [totalPrice, setNftTotalPrice] = useState(0)

  const methods = useForm<FormSchema>({
    defaultValues: { chain: '', coin: '', quantity: 1 },
  })

  const onSubmit = (data: FormSchema) => {
    // TODO: ADD LOGIC
    console.log(data)
    notifySuccess('You have successfully')
  }

  const onChainChange = async (event: SelectChangeEvent<unknown>) => {
    const quantityValue = methods.getValues('quantity')
    const value = event.target.value as string
    if (value === '') {
      setGetSelectedChain([])
      setContractAddress('')
      setselectedCoinValue('')
      setselectedChainId(null)
      setselectedCoinName('')
      setNftCoinPrice('')
      setNftTotalPrice(0)
      methods.setValue('coin', '')
      return
    }

    const result = nftDetail.chains.filter((arg) => arg.value === parseInt(value)) // const result = nftDetail.value.chains.filter(arg => parseInt(arg.value) === parseInt(event.target.value))
    const getSelectedChain = result[0].coins.split(',') // getSelectedChain.value = result[0].coins.split(',')
    const contractAddress = result[0].contract_address.trim() // contractAddress.value = result[0].contract_address.trim()
    const selectedCoinValue = getSelectedChain[0].toUpperCase() // selectedCoinValue.value = getSelectedChain.value[0].toUpperCase()
    const selectedChainId = result[0].id // selectedChainId.value = result[0].id

    const selectedCoinName = selectedCoinValue // selectedCoinName.value = selectedCoinValue.value;
    const nftCoinPrice = await getPriceBySymbol(selectedCoinValue, nftPrice) // nftCoinPrice.value = await getPriceBySymbol(selectedCoinValue.value, nftPrice.value)
    console.log(selectedCoinValue)
    const totalPrice = parseFloat(nftCoinPrice) * quantityValue // totalPrice.value = (parseFloat(nftCoinPrice.value) * quantityValue.value).toString();

    methods.setValue('coin', selectedCoinValue)
    setGetSelectedChain(getSelectedChain)
    setContractAddress(contractAddress)
    setselectedCoinValue(selectedCoinValue)
    setselectedChainId(selectedChainId)
    setselectedCoinName(selectedCoinName)
    setNftCoinPrice(nftCoinPrice)
    setNftTotalPrice(totalPrice)
  }

  async function onCoinChange(event: SelectChangeEvent<unknown>) {
    const quantityValue = methods.getValues('quantity')

    const selectedCoinName = event.target.value as string // selectedCoinName.value = event.target.value
    const nftCoinPrice = await getPriceBySymbol(selectedCoinName.toUpperCase(), nftPrice) // nftCoinPrice.value = await getPriceBySymbol(event.target.value.toUpperCase(), nftPrice.value)
    const totalPrice = parseFloat(nftCoinPrice) * quantityValue // totalPrice.value = (parseFloat(nftCoinPrice.value) * quantityValue.value).toString();
    setselectedCoinName(selectedCoinName)
    setNftCoinPrice(nftCoinPrice)
    setNftTotalPrice(totalPrice)
  }

  function onChangeIncremetn(newValue: number) {
    const nftCoinPriceNumber = parseFloat(nftCoinPrice)
    if (nftCoinPriceNumber > 0) {
      const totalPrice = nftCoinPriceNumber * newValue
      setNftTotalPrice(totalPrice)
    }
  }

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)} className='nft-detail__block form'>
      <FormProvider {...methods}>
        <Stack spacing={4}>
          <ControlledSelect<FormSchema>
            name='chain'
            label='Select Blockchain'
            placeholder='Select Blockchain'
            options={chains}
            onChange={onChainChange}
            fullWidth
          />
          <ControlledSelect<FormSchema>
            name='coin'
            label='Select Currency'
            placeholder='Select Currency'
            options={getSelectedChain.map((el) => ({ label: el, value: el }))}
            // @ts-ignore
            onChange={onCoinChange}
            fullWidth
          />
        </Stack>
        <Stack component={'ul'} spacing={4} mt={11}>
          <Stack component={'li'} direction={'row'} spacing={2} justifyContent={'space-between'} alignItems={'center'}>
            <Box color={'#aaa'} fontSize={14} fontWeight={600}>
              Price
            </Box>
            <Box fontSize={18}>
              ${nftPrice}{' '}
              {nftCoinPrice && selectedCoinName && selectedCoinName != 'CREDIT CARD' && (
                <>
                  ({nftCoinPrice} {selectedCoinName})
                </>
              )}
            </Box>
          </Stack>
          <Stack component={'li'} direction={'row'} spacing={2} justifyContent={'space-between'} alignItems={'center'}>
            <Box color={'#aaa'} fontSize={14} fontWeight={600}>
              Quantity
            </Box>
            <Box>
              <ControlledInputCount onChange={onChangeIncremetn} />
            </Box>
          </Stack>
          <Stack component={'li'} direction={'row'} spacing={2} justifyContent={'space-between'} alignItems={'center'}>
            <Box color={'#aaa'} fontSize={14} fontWeight={600}>
              Total
            </Box>
            <Box color={'secondary.main'} fontSize={24} textAlign={'right'}>
              {totalPrice && totalPrice} {selectedCoinName == 'CREDIT CARD' ? '$' : selectedCoinName}
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
