'use client'

import { Box, Drawer, Button, Typography, Stack, InputLabel, MenuItem, FormControl, Select } from '@mui/material'
import { ReactNode, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { Controller, useForm, useWatch } from 'react-hook-form'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const filters = [
  {
    label: 'Game',
    name: 'game',
    options: [
      { value: 'K 4 Rally', label: 'K 4 Rally' },
      { value: 'K 4 Rally 2', label: 'K 4 Rally 2' },
      { value: 'K 4 Rally 3', label: 'K 4 Rally 3' },
    ],
  },
  {
    label: 'Category',
    name: 'category',
    options: [
      { value: 'Car', label: 'Car' },
      { value: 'Car 1', label: 'Car 1' },
      { value: 'Car 2', label: 'Car 2' },
    ],
  },
  {
    label: 'Rarity',
    name: 'rarity',
    options: [
      { value: 'rarity', label: 'rarity' },
      { value: 'rarity 1', label: 'rarity 1' },
      { value: 'rarity 2', label: 'rarity 2' },
    ],
  },
]

type Props = {
  className?: string
  onChange?: (value: string) => void
  hasBg?: boolean
}

export const country = [
  { value: 'USA', label: 'USA' },
  { value: 'Canada', label: 'Canada' },
  { value: 'Francia', label: 'Francia' },
  { value: 'England', label: 'England' },
  { value: 'Ukraine', label: 'Ukraine' },
]

export const Filter = (props: Props) => {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const methods = useForm({
    defaultValues: { game: '', category: '', rarity: '' },
  })

  const count = Object.values(useWatch({ control: methods.control })).filter((e) => e).length

  const clearValue = () => {
    methods.reset()
    router.push(pathname, { scroll: false })
  }

  const onChangeHandler = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    value === '' ? params.delete(name) : params.set(name, value)
    router.push(pathname + '?' + params.toString(), { scroll: false })
  }

  const FilterInner = (
    <>
      <Stack direction={'row'} justifyContent={'space-between'} mb={7}>
        <Stack direction={'row'}>
          <Typography variant='h4' component={'h3'}>
            Filters
          </Typography>
          <Number>{count}</Number>
        </Stack>
        <Button color={'white'} variant={'outlined'} onClick={clearValue} endIcon={<CloseIcon />}>
          Clear all
        </Button>
      </Stack>

      <Stack direction={{ lg: 'row', xs: 'column' }} spacing={5} flexWrap={'wrap'} position={'relative'} zIndex={4}>
        {filters.map((el, i) => {
          return (
            <Stack direction={{ lg: 'row', xs: 'column' }} spacing={5} alignItems={'center'} key={i}>
              <Controller
                // @ts-ignore
                name={el.name}
                control={methods.control}
                render={({ field: { onChange, ref, value }, fieldState: { error } }) => (
                  <Stack component={FormControl} flexDirection={'row'} alignItems={'center'} gap={2} fullWidth>
                    <InputLabel sx={{ overflow: 'initial', maxWidth: 'none' }}>{el.label}</InputLabel>
                    <Select
                      label='Age'
                      inputRef={ref}
                      onChange={(e) => {
                        onChange(e)
                        onChangeHandler(el.name, e.target.value)
                      }}
                      value={value}
                      sx={{ width: { lg: 207, xs: '100%' } }}
                      fullWidth
                    >
                      <MenuItem value=''>
                        <em>All</em>
                      </MenuItem>
                      {el.options.map((el, i) => {
                        return (
                          <MenuItem key={i} value={el.value}>
                            {el.label}
                          </MenuItem>
                        )
                      })}
                    </Select>
                  </Stack>
                )}
              />
            </Stack>
          )
        })}
      </Stack>
    </>
  )

  const bgStyle = props.hasBg ? { padding: 6, bgColor: 'dark.main', borderRadius: 4 } : {}

  return (
    <Box {...bgStyle} mb={{ lg: 12, xs: 10 }}>
      <Box
        sx={(theme) => ({
          [theme.breakpoints.down('lg')]: {
            display: 'none',
          },
        })}
      >
        {FilterInner}
      </Box>
      <Box
        sx={(theme) => ({
          [theme.breakpoints.up('lg')]: { display: 'none' },
        })}
      >
        <Button color={'white'} variant={'outlined'} onClick={() => setOpen(true)} fullWidth>
          Filters <Number>{count}</Number>
        </Button>
        <Drawer anchor='bottom' open={open} onClose={() => setOpen(false)}>
          {FilterInner}
          <Box textAlign={'center'} mt={6}>
            <Button onClick={() => setOpen(false)} fullWidth>
              Accept
            </Button>
          </Box>
        </Drawer>
      </Box>
    </Box>
  )
}

const Number = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      width={{ lg: 40, xs: 32 }}
      height={{ lg: 40, xs: 32 }}
      lineHeight={{ lg: '40px', xs: '32px' }}
      bgcolor={'secondary.main'}
      borderRadius={'50%'}
      textAlign={'center'}
      fontSize={18}
      fontWeight={500}
      ml={4}
    >
      {children}
    </Box>
  )
}
