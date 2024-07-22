'use client'

import { useRef } from 'react'
import { ActionMeta, SingleValue } from 'react-select'
import { Select } from 'shared/ui'
import { Button } from 'shared/ui/button/Button'

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
  onChange: (
    newValue: SingleValue<{ value: string; label: string }>,
    actionMeta: ActionMeta<{
      value: string
      label: string
    }>
  ) => void
}

export const Filters = (props: Props) => {
  const select1Ref = useRef<any>(null)
  const select2Ref = useRef<any>(null)
  const select3Ref = useRef<any>(null)

  const refs = [select1Ref, select2Ref, select3Ref]

  const clearValue = () => {
    select1Ref.current?.clearValue()
    select2Ref.current?.clearValue()
    select3Ref.current?.clearValue()
  }

  return (
    <div>
      <div className='filter__top'>
        <div className='filter__left'>
          <div className='filter__label h3 h3--fz-32'>Filters</div>
          <div className='filter__number'>{props.count}</div>
        </div>
        <div className='filter__right'>
          <Button color={'white'} onClick={clearValue} border>
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
                <Select onChange={props.onChange} placeholder={'All'} name={el.name} options={el.options} inputRef={refs[i]} isClearable />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
