'use client'

import Image from 'next/image'
import ImageCar from './image.jpg'
import classNames from 'classnames'
import { AccordionItem } from './AccordionItem'

const carParameters = [
  { label: 'SPEED', value: '1', params: ['1', '50', '150'] },
  { label: 'ACCELERATION', value: '1', params: ['1', '50', '150'] },
  { label: 'DRIFT', value: '1', params: ['1', '50', '150'] },
  { label: 'agility', value: '1', params: ['1', '50', '150'] },
  { label: 'stability', value: '1', params: ['1', '50', '150'] },
  { label: 'breaking', value: '1', params: ['1', '50', '150'] },
  { label: 'Drive type', value: 'AWD' },
]

type Props = {
  bgClass: string
}

export const NTFParameters = (props: Props) => {
  return (
    <>
      <div className={classNames('image image--cover image--square image--border nft-detail__image', props.bgClass)}>
        <Image src={ImageCar} alt='' priority />
      </div>
      <div className='progress-bar nft-detail__progress-bar'>
        <div className='progress-bar__label'>
          Car level: <span className='text-secondary'>1</span>
        </div>
        <div className='progress-bar__line'>
          <div className='progress-bar__line-fill' style={{ width: '26%' }}></div>
        </div>
        <div className='progress-bar__label progress-bar__label--sm'>BRL level: 0</div>
      </div>
      <AccordionItem title='Car Parameters'>
        <ul className='detail-list nft-detail__list'>
          {carParameters.map((el, i) => {
            return (
              <li key={i} className='detail-list__item detail-list__item--row'>
                <div className='detail-list__label text-uppercase'>{el.label}</div>
                <div
                  className={classNames('detail-list__value text-secondary', {
                    'detail-list__value--w-150': Boolean(el.params),
                  })}
                >
                  {el.value}
                </div>
                {el.params && (
                  <div className='detail-list__params'>
                    {el.params.map((el, i) => {
                      return (
                        <div key={i} className='detail-list__params-item'>
                          {el}
                        </div>
                      )
                    })}
                  </div>
                )}
              </li>
            )
          })}
        </ul>
      </AccordionItem>
      <AccordionItem title='Upgrades & Boosts'>
        <ul className='detail-list nft-detail__list'>
          <li className='detail-list__item detail-list__item--row'>
            <div className='detail-list__label text-uppercase'>car part slots</div>
            <div className='detail-list__value text-secondary'>4</div>
          </li>
          <li className='detail-list__item detail-list__item--row'>
            <div className='detail-list__label text-uppercase'>Parameter boosts</div>
            <div className='detail-list__value text-secondary'>2</div>
          </li>
          <li className='detail-list__item detail-list__item--row'>
            <div className='detail-list__label text-uppercase'>Parameter boosts used</div>
            <div className='detail-list__value text-secondary'>2</div>
          </li>
          <li className='detail-list__item detail-list__item--row'>
            <div className='detail-list__label text-uppercase'>Parameter boosted</div>
            <div className='detail-list__value text-secondary'>Speed acceleration</div>
          </li>
          <li className='detail-list__item detail-list__item--row'>
            <div className='detail-list__label text-uppercase'>sk4r reward bonus</div>
            <div className='detail-list__value text-secondary'>0%</div>
          </li>
          <li className='detail-list__item detail-list__item--row'>
            <div className='detail-list__label text-uppercase'>sk4r daily drop rate</div>
            <div className='detail-list__value text-secondary'>0%</div>
          </li>
          <li className='detail-list__item detail-list__item--row'>
            <div className='detail-list__label text-uppercase'>sk4r tournament fees reduction </div>
            <div className='detail-list__value text-secondary'>0%</div>
          </li>
        </ul>
      </AccordionItem>
    </>
  )
}
