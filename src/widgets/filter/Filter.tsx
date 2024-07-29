'use client'

import { Drawer } from '@mui/material'
import classNames from 'classnames'
import { useRef, useState } from 'react'
import { ActionMeta, SingleValue } from 'react-select'
import { Select } from 'shared/ui'
import { Button } from 'shared/ui'

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
          <div className='filter__label h3 h3--fz-32'>Filters</div>
          <div className='filter__number'>{props.count}</div>
        </div>
        <div className='filter__right d-none d-lg-block'>
          <Button color={'light'} onClick={clearValue} border>
            Clear all
          </Button>
        </div>
        <div className='filter__right d-block d-lg-none'>
          <Button color={'light'} onClick={clearValue} border link>
            Clear all <i className='text-icon text-icon--x text-icon--right'></i>
          </Button>
        </div>
      </div>

      <div className='filter__items'>
        {filters.map((el, i) => {
          return (
            <div key={i} className='filter__items-item'>
              <div className='filter__items-label'>{el.label}</div>
              <div className='filter__items-input'>
                <Select onChange={props.onChange} placeholder={'All'} name={el.name} options={el.options} inputRef={refs[i]} isClearable />
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
      <div className='d-none d-lg-block'>{FilterInner}</div>

      <div className='filter__btn-open d-lg-none'>
        <Button onClick={() => setOpen(true)} color={'light'} border maxWidth>
          Filters <div className='filter__number'>{props.count}</div>
        </Button>
      </div>
      <Drawer anchor='bottom' open={open} onClose={() => setOpen(false)} className='d-lg-none'>
        {FilterInner}
        <div className='filter__button'>
          <Button maxWidth onClick={() => setOpen(false)}>
            Accept
          </Button>
        </div>
      </Drawer>
    </div>
  )
}
