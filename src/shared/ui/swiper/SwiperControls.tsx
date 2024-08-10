import { Box, BoxProps } from '@mui/material'
import { SwiperButton } from './SwiperButton'
import { SwiperPagination } from './SwiperPagination'

export const SwiperControls = ({
  swiperButtonProps,
  swiperPaginationProps,
  ...props
}: BoxProps & { swiperButtonProps?: BoxProps; swiperPaginationProps?: BoxProps }) => {
  return (
    <Box display={'flex'} justifyContent={'space-between'} {...props}>
      <SwiperButton className='swiper-button-prev' side='left' circle {...swiperButtonProps} />
      <SwiperPagination className='swiper-pagination' {...swiperPaginationProps} />
      <SwiperButton className='swiper-button-next' side='right' circle {...swiperButtonProps} />
    </Box>
  )
}
