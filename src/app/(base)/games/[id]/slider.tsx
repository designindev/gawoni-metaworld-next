'use client'

import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import Swiper2 from 'swiper'
import Image from 'next/image'
import Slide1 from './slide-1.jpg'
import Slide2 from './slide-2.jpg'
import Slide3 from './slide-3.jpg'
import Slide4 from './slide-3.jpg'

export function Carousel() {
  const [thumbsSwiper, setThumbsSwiper] = useState<Swiper2 | null>(null)

  return (
    <div className='row'>
      <div className='col-lg-10 col-4'>
        <Swiper
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className='mySwiper2'
        >
          <SwiperSlide>
            <Image src={Slide1} alt='' priority />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Slide2} alt='' priority />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Slide3} alt='' priority />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Slide4} alt='' priority />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className='col-lg-2 col-12'>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          // direction='vertical'
          slidesPerView={2}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Thumbs]}
          className='mySwiper'
        >
          <SwiperSlide>
            <Image src={Slide1} alt='' priority />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Slide2} alt='' priority />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Slide3} alt='' priority />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Slide4} alt='' priority />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}
