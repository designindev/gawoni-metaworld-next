'use client'

import 'swiper/css'
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { SwiperControls } from '../../shared/ui/swiper/SwiperControls'
import { SwiperButton } from '../../shared/ui/swiper/SwiperButton'
import { SwiperPagination } from '../../shared/ui/swiper/SwiperPagination'
import Image from 'next/image'
import { items } from './items'
import './Gallery.scss'
import classNames from 'classnames'

type Props = {
  title: string
}

export const Category = (props: Props) => {
  const { title } = props

  return (
    <>
      <div className='nfts__category'>
        <div className='nfts__category-head'>
          <h3 className='nfts__category-title h3 h3--fz-32'>{title}</h3>
          <div className='nfts__category-btn'>
            <a href='#' className='btn btn--primary'>
              Show all
            </a>
          </div>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={40}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{ clickable: true, el: '.swiper-pagination' }}
          watchSlidesProgress
          breakpoints={{
            480: { slidesPerView: 1 },
            576: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 4 },
            1200: { slidesPerView: 4 },
          }}
          className='swiper-container--visible items items--slider nfts__items'
          wrapperClass='items__slider nfts__items-slider'
          loop
        >
          {items.map((item, i) => {
            return (
              <SwiperSlide key={i}>
                <div className='items__item item-bg item-bg--p-0 nfts__items-item'>
                  <div className='items__img image image--cover nfts__items-img'>
                    <Image
                      src={item.src}
                      width={0}
                      height={0}
                      sizes='100vw'
                      style={{ width: '100%', height: 'auto' }}
                      alt=''
                    />
                  </div>
                  <div className='items__text nfts__items-text'>
                    <div className='nfts__items-top'>
                      <h4 className='items__title h4 text-title nfts__items-title'>
                        {item.title}
                      </h4>
                      <div className='nfts__items-price'>{item.price}</div>
                    </div>
                    <div className='nfts__items-rarity'>
                      <div className='nfts__items-rarity-label'>Rarity</div>
                      <div
                        className={classNames('nfts__items-rarity-value', {
                          [`nfts__items-rarity-value--${item.color}`]:
                            item.color,
                        })}
                      >
                        {item.rarity}
                      </div>
                    </div>
                    <div className='nfts__items-logos'>
                      <Image
                        src={item.logos}
                        width={0}
                        height={0}
                        sizes='100vw'
                        style={{ width: '100%', height: 'auto' }}
                        alt=''
                      />
                    </div>
                    <div className='nfts__items-buttons'>
                      <div className='nfts__items-button'>K 4 Rally</div>
                      <div className='nfts__items-button'>Car</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
          <SwiperControls className='nfts__items-controls' paginationBottom>
            <SwiperButton side='left' circle />
            <SwiperPagination />
            <SwiperButton side='right' circle />
          </SwiperControls>
        </Swiper>
      </div>
    </>
  )
}
