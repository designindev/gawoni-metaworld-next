'use client'

import React from 'react'
import { A11y, EffectFade, Navigation, Pagination, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { SwiperControls } from 'shared/ui/swiper/SwiperControls'
import { SwiperButton } from 'shared/ui/swiper/SwiperButton'
import { SwiperPagination } from 'shared/ui/swiper/SwiperPagination'
import { Button } from 'shared/ui/button/Button'
import Image1 from './slide-1.jpg'
import Image2 from './slide-2.jpg'

const items = [
  {
    image: Image1,
    title: 'GAWOONI MetaWorld -',
    titleSecond: 'blockchain gaming portal',
    content:
      'Lorem ipsum dolor sit amet consectetur. Feugiat ullamcorper quis porta pharetra nullam semper. Pellentesque egestas sed morbi magna nunc ornare nulla vivamus. Aenean egestas',
  },
  {
    image: Image2,
    title: '2GAWOONI MetaWorld -',
    titleSecond: 'blockchain gaming portal',
    content:
      'Lorem ipsum dolor sit amet consectetur. Feugiat ullamcorper quis porta pharetra nullam semper. Pellentesque egestas sed morbi magna nunc ornare nulla vivamus. Aenean egestas',
  },
]

export const Main = () => {
  return (
    <section className='section section--reset-header-height s-main'>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
        effect={'fade'}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{ clickable: true, el: '.swiper-pagination' }}
        watchSlidesProgress
        className='items items--slider main__items'
        wrapperClass='items__slider main__items-slider'
        loop
      >
        {items.map((el, i) => {
          return (
            <SwiperSlide key={i} className='main__items-slide'>
              <div className='items__item main__items-item'>
                <div className='main__items-image' style={{ backgroundImage: `url(${el.image.src})` }}></div>
                <div className='container main__items-container'>
                  <div className='header-height'></div>
                  <h1 className='h1 main__items-title'>
                    <span className='main__items-title-first text-primary'>{el.title}</span>
                    <span className='main__items-title-second'>{el.titleSecond}</span>
                  </h1>
                  <div className='main__items-content'>
                    <div className='main__items-content-left fz-18'>
                      <p>{el.content}</p>
                    </div>
                    <div className='main__items-content-right'>
                      <Button href='#' color='white' border maxWidth>
                        Learn more
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
        <SwiperControls className='main__items-controls' bottom>
          <SwiperButton side='left' circle />
          <SwiperPagination />
          <SwiperButton side='right' circle />
        </SwiperControls>
      </Swiper>
    </section>
  )
}
