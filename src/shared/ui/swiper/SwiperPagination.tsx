import classNames from 'classnames'
import './SwiperPagination.scss'

type Props = {
  className?: string
}

export const SwiperPagination = (props: Props) => {
  const { className } = props

  return <div className={classNames('swiper-pagination', className)}></div>
}
