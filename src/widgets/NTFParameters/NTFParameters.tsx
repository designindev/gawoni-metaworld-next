'use client'

import Image from 'next/image'
import ImageCar from 'shared/images/nft-detail/image.jpg'
import classNames from 'classnames'
import { AccordionItem } from './AccordionItem'
import { Box } from '@mui/material'

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
            <Box color={'primary.main'} className='detail-list__value'>
              4
            </Box>
          </li>
          <li className='detail-list__item detail-list__item--row'>
            <div className='detail-list__label text-uppercase'>Parameter boosts</div>
            <Box color={'primary.main'} className='detail-list__value'>
              2
            </Box>
          </li>
          <li className='detail-list__item detail-list__item--row'>
            <div className='detail-list__label text-uppercase'>Parameter boosts used</div>
            <Box color={'primary.main'} className='detail-list__value'>
              2
            </Box>
          </li>
          <li className='detail-list__item detail-list__item--row'>
            <div className='detail-list__label text-uppercase'>Parameter boosted</div>
            <Box color={'primary.main'} className='detail-list__value'>
              Speed acceleration
            </Box>
          </li>
          <li className='detail-list__item detail-list__item--row'>
            <div className='detail-list__label text-uppercase'>sk4r reward bonus</div>
            <Box color={'primary.main'} className='detail-list__value'>
              0%
            </Box>
          </li>
          <li className='detail-list__item detail-list__item--row'>
            <div className='detail-list__label text-uppercase'>sk4r daily drop rate</div>
            <Box color={'primary.main'} className='detail-list__value'>
              0%
            </Box>
          </li>
          <li className='detail-list__item detail-list__item--row'>
            <div className='detail-list__label text-uppercase'>sk4r tournament fees reduction </div>
            <Box color={'primary.main'} className='detail-list__value'>
              0%
            </Box>
          </li>
        </ul>
      </AccordionItem>
    </>
  )
}
