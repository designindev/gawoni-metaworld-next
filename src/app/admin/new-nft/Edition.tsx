'use client'

import { Box, Grid, Typography, IconButton, Stack } from '@mui/material'
import { COLORS } from 'shared/const'
import { useState } from 'react'
import AddIcon from '@mui/icons-material/Add'
import { CreateNewEditionModal } from './CreateNewEditionModal'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const items = [
  {
    color: COLORS.primary,
    name: 'Race edition',
  },
  {
    color: '#415AFF',
    name: 'Race edition',
  },
  {
    color: '#EADF65',
    name: '#EADF65',
  },
  {
    color: COLORS.primary,
    name: 'Race edition',
  },
  {
    color: '#415AFF',
    name: 'Race edition',
  },
  {
    color: '#EADF65',
    name: 'Race edition',
  },
]

export const Edition = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const [active, setActive] = useState<null | number>(null)

  return (
    <>
      <Typography variant={'h5'} component={'h3'} fontFamily={'Whyte'} fontWeight={'700'} mb={5}>
        Choose edition
      </Typography>
      <Box
        sx={{
          '& .swiper-button-prev': {
            display: 'none',
          },
        }}
        style={{ overflow: 'visible' }}
        component={Swiper}
        modules={[Navigation, Pagination]}
        navigation={true}
        pagination={false}
        watchSlidesProgress
        spaceBetween={16}
        breakpoints={{
          768: { slidesPerView: 2 },
          992: { slidesPerView: 3, spaceBetween: 32 },
          1200: { slidesPerView: 4, spaceBetween: 32 },
        }}
      >
        <SwiperSlide>
          <Stack
            onClick={handleOpen}
            border={'3px solid #777'}
            py={8}
            px={8}
            height={155}
            justifyContent={'center'}
            sx={{
              cursor: 'pointer',
              transition: 'all .3s',
              '&:hover': {
                borderColor: 'primary.main',
                color: 'primary.main',
              },
              '&:hover .MuiIconButton-root': {
                backgroundColor: 'primary.main',
              },
            }}
          >
            <IconButton
              aria-label='Create new edition'
              sx={{ backgroundColor: 'dark.main', color: '#fff', mb: 4, width: 46, height: 46 }}
            >
              <AddIcon />
            </IconButton>
            <Typography variant='h3' fontSize={26} fontFamily={'Whyte'} fontWeight={900}>
              Create new edition
            </Typography>
          </Stack>
          <CreateNewEditionModal open={open} handleClose={handleClose} />
        </SwiperSlide>
        {items.map((el, i) => {
          return (
            <SwiperSlide key={i}>
              <Stack
                border={'3px solid'}
                borderColor={active === i ? 'white' : '#777'}
                py={8}
                px={8}
                height={155}
                justifyContent={'center'}
                sx={{
                  cursor: 'pointer',
                  transition: 'all .3s',
                  '&:hover': {
                    borderColor: 'primary.main',
                  },
                }}
                onClick={() => setActive(i)}
              >
                <Box sx={{ width: 24, height: 24, backgroundColor: el.color, borderRadius: '50%', mb: 6 }}></Box>
                <Typography variant='h3' fontSize={26} fontFamily={'Whyte'} fontWeight={900} color={el.color}>
                  {el.name}
                </Typography>
              </Stack>
            </SwiperSlide>
          )
        })}
        <Box
          position={'absolute'}
          top={0}
          right={-210}
          height={'100%'}
          width={504}
          sx={{ background: 'linear-gradient(270deg, #000000 0%, rgba(0, 0, 0, 0) 100%)', pointerEvents: 'none' }}
          zIndex={3}
        ></Box>
      </Box>
    </>
  )
}
