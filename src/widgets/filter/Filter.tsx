'use client'

import { Box, Drawer, Button, Typography, Stack, InputLabel, MenuItem, FormControl, Select } from '@mui/material'
import { ReactNode, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { Controller, FormProvider, useForm, useFormContext, useWatch } from 'react-hook-form'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { categories, games, rarities } from 'app/api/nfts/db'

const filters = [
  {
    label: 'Game',
    name: 'game',
    options: games.map((el) => ({ value: el, label: el })),
  },
  {
    label: 'Category',
    name: 'category',
    options: categories.map((el) => ({ value: el, label: el })),
  },
  {
    label: 'Rarity',
    name: 'rarity',
    options: rarities.map((el) => ({ value: el, label: el })),
  },
] as const

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

  const methods = useForm({
    defaultValues: { game: '', category: '', rarity: '' },
  })

  const count = Object.values(useWatch({ control: methods.control })).filter((e) => e).length

  const bgStyle = props.hasBg ? { padding: 6, bgcolor: 'dark.main', borderRadius: 4 } : {}

  const filterInner = <FilterInner count={count} />

  return (
    <Box {...bgStyle} mb={{ lg: 12, xs: 10 }}>
      <FormProvider {...methods}>
        <Box
          sx={(theme) => ({
            [theme.breakpoints.down('lg')]: {
              display: 'none',
            },
          })}
        >
          {filterInner}
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
            {filterInner}
            <Box textAlign={'center'} mt={6}>
              <Button onClick={() => setOpen(false)} fullWidth>
                Accept
              </Button>
            </Box>
          </Drawer>
        </Box>
      </FormProvider>
    </Box>
  )
}

const FilterInner = ({ count }: { count: number }) => {
  const methods = useFormContext()
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const clearValue = () => {
    methods.reset()
    router.push(pathname, { scroll: false })
  }

  const onChangeHandler = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    value === '' ? params.delete(name) : params.set(name, value)
    router.push(pathname + '?' + params.toString(), { scroll: false })
  }

  return (
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
