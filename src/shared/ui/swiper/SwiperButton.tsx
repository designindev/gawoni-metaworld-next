import classNames from 'classnames'
import './SwiperButton.scss'

type SwiperButtonProps = {
  side: 'left' | 'right'
  circle?: boolean
}

export const SwiperButton = ({ side, circle = false }: SwiperButtonProps) => {
  return (
    <div
      className={classNames(
        `swiper-button-${side === 'left' ? 'prev' : 'next'}`,
        { 'swiper-button-circle': circle }
      )}
    ></div>
  )
}
