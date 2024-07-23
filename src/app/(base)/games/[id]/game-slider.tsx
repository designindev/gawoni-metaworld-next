'use client'

import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Pagination, Thumbs } from 'swiper/modules'
import ISwiper from 'swiper'
import Image, { StaticImageData } from 'next/image'
import classNames from 'classnames'
import { SwiperButton, SwiperControls, SwiperPagination } from 'shared/ui'

type Slide = {
  image: StaticImageData
}

type Props = {
  slides: Slide[]
  className?: string
}

export const GameSlider = (props: Props) => {
  const { slides, className } = props

  const [thumbsSwiper, setThumbsSwiper] = useState<ISwiper | null>(null)
  const swiper = thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null

  return (
    <div className={classNames('row slider-with-thumbs', className)}>
      <div className='col-xxl-10 col-xl-9 col-lg-9 col-md-9 col-sm-8 col-12 slider-with-thumbs__left'>
        <Swiper
          loop={true}
          spaceBetween={30}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{ clickable: true, el: '.swiper-pagination' }}
          thumbs={{ swiper }}
          modules={[Navigation, Pagination, FreeMode, Thumbs]}
          className='slider-with-thumbs__slider slider-with-thumbs__slider--full'
          wrapperClass='slider-with-thumbs__slider-slider'
        >
          {slides.map((el, i) => (
            <SwiperSlide key={i} className='slider-with-thumbs__slide'>
              <div className='image image--cover slider-with-thumbs__image slider-with-thumbs__image--full'>
                <Image src={el.image} alt='' priority />
              </div>
            </SwiperSlide>
          ))}
          {/* <SwiperControls className='slider-with-thumbs__controls' bottom>
            <SwiperButton side='left' circle />
            <SwiperPagination />
            <SwiperButton side='right' circle />
          </SwiperControls> */}
        </Swiper>
      </div>
      <div className='col-xxl-2 col-xl-3 col-lg-3 col-md-3 col-sm-4 col-12 slider-with-thumbs__right'>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={8}
          direction='horizontal'
          breakpoints={{
            576: { direction: 'vertical' },
            768: { direction: 'vertical' },
            992: { direction: 'vertical' },
            1200: { direction: 'vertical' },
          }}
          slidesPerView={3}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Thumbs]}
          className='slider-with-thumbs__slider slider-with-thumbs__slider--thumb'
          wrapperClass='slider-with-thumbs__slider-slider'
        >
          {slides.map((el, i) => (
            <SwiperSlide key={i} className='slider-with-thumbs__slide slider-with-thumbs__slide--thumb'>
              <div className='image image--cover slider-with-thumbs__image slider-with-thumbs__image--thumb'>
                <Image src={el.image} alt='' priority />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
