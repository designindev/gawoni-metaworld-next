'use client'

import { Box, Drawer, Button, Typography, Stack } from '@mui/material'
import classNames from 'classnames'
import { useRef, useState } from 'react'
import { ActionMeta, SingleValue } from 'react-select'
import { Select } from 'shared/ui'
import CloseIcon from '@mui/icons-material/Close'

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
  count: number
  className?: string
  onChange?: (
    newValue: SingleValue<{ value: string; label: string }>,
    actionMeta: ActionMeta<{
      value: string
      label: string
    }>
  ) => void
  bg?: boolean
}

export const Filter = (props: Props) => {
  const select1Ref = useRef<any>(null)
  const select2Ref = useRef<any>(null)
  const select3Ref = useRef<any>(null)
  const [open, setOpen] = useState(false)

  const refs = [select1Ref, select2Ref, select3Ref]

  const clearValue = () => {
    select1Ref.current?.clearValue()
    select2Ref.current?.clearValue()
    select3Ref.current?.clearValue()
  }

  const FilterInner = (
    <>
      <Stack direction={'row'} justifyContent={'space-between'} mb={7}>
        <Stack direction={'row'}>
          <Typography variant='h4' component={'h3'}>
            Filters
          </Typography>
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
            {props.count}
          </Box>
        </Stack>
        <Box>
          <Button color={'white'} variant={'outlined'} onClick={clearValue} endIcon={<CloseIcon />}>
            Clear all
          </Button>
        </Box>
      </Stack>

      <Stack direction={{ lg: 'row', xs: 'column' }} spacing={5} flexWrap={'wrap'} position={'relative'} zIndex={4}>
        {filters.map((el, i) => {
          return (
            <Stack direction={{ lg: 'row', xs: 'column' }} spacing={5} alignItems={'center'} key={i}>
              <Box m={{ lg: '0 0 8px', xs: '0 0 10px' }}>{el.label}</Box>
              <Box width={{ lg: 207, xs: '100%' }}>
                <Select
                  onChange={props.onChange}
                  placeholder={'All'}
                  name={el.name}
                  options={el.options}
                  inputRef={refs[i]}
                  isClearable
                />
              </Box>
            </Stack>
          )
        })}
      </Stack>
    </>
  )

  const bgStyle = props.bg ? { padding: 6, bgColor: 'dark.main', borderRadius: 4 } : {}

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
        <Box>
          <Button color={'white'} variant={'outlined'} onClick={() => setOpen(true)} fullWidth>
            Filters <div className='filter__number'>{props.count}</div>
          </Button>
        </Box>
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
