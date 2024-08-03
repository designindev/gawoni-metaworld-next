'use client'

import { Box, Drawer, Button, Typography } from '@mui/material'
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
      <div className='filter__top'>
        <div className='filter__left'>
          <Typography variant='h4' component={'h3'}>
            Filters
          </Typography>
          <div className='filter__number'>{props.count}</div>
        </div>
        <div className='filter__right'>
          <Button color={'white'} variant={'outlined'} onClick={clearValue} endIcon={<CloseIcon />}>
            Clear all
          </Button>
        </div>
      </div>

      <div className='filter__items'>
        {filters.map((el, i) => {
          return (
            <div key={i} className='filter__items-item'>
              <div className='filter__items-label'>{el.label}</div>
              <div className='filter__items-input'>
                <Select
                  onChange={props.onChange}
                  placeholder={'All'}
                  name={el.name}
                  options={el.options}
                  inputRef={refs[i]}
                  isClearable
                />
              </div>
            </div>
          )
        })}
      </div>
    </>
  )

  return (
    <div
      className={classNames('filter', props.className, {
        filter__bg: props.bg,
      })}
    >
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
        <Box className='filter__btn-open'>
          <Button color={'white'} variant={'outlined'} onClick={() => setOpen(true)} fullWidth>
            Filters <div className='filter__number'>{props.count}</div>
          </Button>
        </Box>
        <Drawer anchor='bottom' open={open} onClose={() => setOpen(false)}>
          {FilterInner}
          <div className='filter__button'>
            <Button onClick={() => setOpen(false)} fullWidth>
              Accept
            </Button>
          </div>
        </Drawer>
      </Box>
    </div>
  )
}
