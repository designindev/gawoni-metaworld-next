'use client'

import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { SwiperControls } from '../../shared/ui/swiper/SwiperControls'
import { SwiperButton } from '../../shared/ui/swiper/SwiperButton'
import { SwiperPagination } from '../../shared/ui/swiper/SwiperPagination'
import { NftCard } from 'entities/nft'
import { mockItems } from 'entities/nft/api/items'
import { Button } from 'shared/ui/button/Button'
import { PATH_PAGE } from 'shared/lib'
import './Gallery.scss'

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
            <Button href={PATH_PAGE.shop.root}>Show all</Button>
          </div>
        </div>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{ clickable: true, el: '.swiper-pagination' }}
          watchSlidesProgress
          spaceBetween={16}
          breakpoints={{
            768: { slidesPerView: 2, slidesPerGroup: 2 },
            992: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 30 },
            1200: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 40 },
          }}
          className='swiper--visible items items--slider nfts__items'
          wrapperClass='items__slider nfts__items-slider'
          loop
        >
          {mockItems.map((item, i) => {
            return (
              <SwiperSlide key={i}>
                <NftCard nft={item} />
              </SwiperSlide>
            )
          })}
          <SwiperControls className='nfts__items-controls' bottom>
            <SwiperButton side='left' circle />
            <SwiperPagination />
            <SwiperButton side='right' circle />
          </SwiperControls>
        </Swiper>
      </div>
    </>
  )
}
