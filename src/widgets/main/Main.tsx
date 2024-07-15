'use client'

import 'swiper/css'
import React from 'react'
import Image1 from './slide1.jpg'
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { SwiperControls } from '@/shared/ui/swiper/SwiperControls'
import { SwiperButton } from '@/shared/ui/swiper/SwiperButton'
import { SwiperPagination } from '@/shared/ui/swiper/SwiperPagination'

const items = [
  {
    title: 'GAWOONI MetaWorld -',
    titleSecond: 'blockchain gaming portal',
    content:
      'Lorem ipsum dolor sit amet consectetur. Feugiat ullamcorper quis porta pharetra nullam semper. Pellentesque egestas sed morbi magna nunc ornare nulla vivamus. Aenean egestas',
  },
  {
    title: 'GAWOONI MetaWorld -',
    titleSecond: 'blockchain gaming portal',
    content:
      'Lorem ipsum dolor sit amet consectetur. Feugiat ullamcorper quis porta pharetra nullam semper. Pellentesque egestas sed morbi magna nunc ornare nulla vivamus. Aenean egestas',
  },
  {
    title: 'GAWOONI MetaWorld -',
    titleSecond: 'blockchain gaming portal',
    content:
      'Lorem ipsum dolor sit amet consectetur. Feugiat ullamcorper quis porta pharetra nullam semper. Pellentesque egestas sed morbi magna nunc ornare nulla vivamus. Aenean egestas',
  },
  {
    title: 'GAWOONI MetaWorld -',
    titleSecond: 'blockchain gaming portal',
    content:
      'Lorem ipsum dolor sit amet consectetur. Feugiat ullamcorper quis porta pharetra nullam semper. Pellentesque egestas sed morbi magna nunc ornare nulla vivamus. Aenean egestas',
  },
]

export const Main = () => {
  return (
    <section className='section s-main'>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
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
            <SwiperSlide key={i}>
              <div className='main__items-item'>
                <div
                  className='main__items-image'
                  style={{ backgroundImage: `url(${Image1.src})` }}
                ></div>
                <div className='container main__items-container'>
                  <h1 className='h1 main__items-title'>
                    <span className='main__items-title-first text-primary'>
                      GAWOONI MetaWorld -
                    </span>
                    <span className='main__items-title-second'>
                      blockchain gaming portal
                    </span>
                  </h1>
                  <div className='main__items-content'>
                    <div className='main__items-content-left'>
                      <p>
                        Lorem ipsum dolor sit amet consectetur. Feugiat
                        ullamcorper quis porta pharetra nullam semper.
                        Pellentesque egestas sed morbi magna nunc ornare nulla
                        vivamus. Aenean egestas
                      </p>
                    </div>
                    <div className='main__items-content-right'>
                      <a
                        href='#'
                        className='btn btn--white btn--border btn--w-max'
                      >
                        Learn more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
        <SwiperControls className='main__items-controls'>
          <SwiperButton side='left' circle />
          <SwiperPagination />
          <SwiperButton side='right' circle />
        </SwiperControls>
      </Swiper>
    </section>
  )
}
