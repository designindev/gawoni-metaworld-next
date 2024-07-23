'use client'

import Image from 'next/image'
import ImageCar from './image.jpg'
import classNames from 'classnames'
import { ReactNode, useRef, useState } from 'react'

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

export const ShopCenter = (props: Props) => {
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

type AccordionItemProp = {
  title: string
  children: ReactNode
}

export const AccordionItem = (props: AccordionItemProp) => {
  const { title, children } = props
  const ref = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)
  const onToggle = () => {
    slideToggle(ref.current)
    setOpen((o) => !o)
  }

  return (
    <div
      className={classNames('accordion', {
        'accordion--active': open,
      })}
    >
      <h4 className='accordion__title h6' onClick={onToggle}>
        {title}
        <i className='text-icon text-icon--chevron-down text-icon--md'></i>
      </h4>
      <div ref={ref} className='accordion__content' style={{ display: 'none' }}>
        {children}
      </div>
    </div>
  )
}

export const slideUp = (target: HTMLElement | null, duration = 500) => {
  if (!target) return
  target.style.transitionProperty = 'height, margin, padding'
  target.style.transitionDuration = duration + 'ms'
  target.style.boxSizing = 'border-box'
  target.style.height = target.offsetHeight + 'px'
  target.offsetHeight
  target.style.overflow = 'hidden'
  target.style.height = '0'
  target.style.paddingTop = '0'
  target.style.paddingBottom = '0'
  target.style.marginTop = '0'
  target.style.marginBottom = '0'
  window.setTimeout(() => {
    target.style.display = 'none'
    target.style.removeProperty('height')
    target.style.removeProperty('padding-top')
    target.style.removeProperty('padding-bottom')
    target.style.removeProperty('margin-top')
    target.style.removeProperty('margin-bottom')
    target.style.removeProperty('overflow')
    target.style.removeProperty('transition-duration')
    target.style.removeProperty('transition-property')
  }, duration)
}

export const slideDown = (target: HTMLElement | null, duration = 500) => {
  if (!target) return
  target.style.removeProperty('display')
  let display = window.getComputedStyle(target).display
  if (display === 'none') display = 'block'
  target.style.display = display
  let height = target.offsetHeight
  target.style.overflow = 'hidden'
  target.style.height = '0'
  target.style.paddingTop = '0'
  target.style.paddingBottom = '0'
  target.style.marginTop = '0'
  target.style.marginBottom = '0'
  target.offsetHeight
  target.style.boxSizing = 'border-box'
  target.style.transitionProperty = 'height, margin, padding'
  target.style.transitionDuration = duration + 'ms'
  target.style.height = height + 'px'
  target.style.removeProperty('padding-top')
  target.style.removeProperty('padding-bottom')
  target.style.removeProperty('margin-top')
  target.style.removeProperty('margin-bottom')
  window.setTimeout(() => {
    target.style.removeProperty('height')
    target.style.removeProperty('overflow')
    target.style.removeProperty('transition-duration')
    target.style.removeProperty('transition-property')
  }, duration)
}

export const slideToggle = (target: HTMLElement | null, duration = 500) => {
  if (!target) return
  window.getComputedStyle(target).display === 'none' ? slideDown(target, duration) : slideUp(target, duration)
}
