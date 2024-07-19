'use client'

import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import ISwiper from 'swiper'
import Image, { StaticImageData } from 'next/image'
import classNames from 'classnames'

type Slide = {
  image: StaticImageData
}

type Props = {
  slides: Slide[]
  className?: string
}

export const SliderWithThumb = (props: Props) => {
  const { slides, className } = props

  const [thumbsSwiper, setThumbsSwiper] = useState<ISwiper | null>(null)

  return (
    <div className={classNames('row slider-with-thumbs', className)}>
      <div className='col-lg-10 col-4 slider-with-thumbs__left'>
        <Swiper
          loop={true}
          spaceBetween={30}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Thumbs]}
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
        </Swiper>
      </div>
      <div className='col-lg-2 col-12 slider-with-thumbs__right'>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={8}
          direction='vertical'
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
