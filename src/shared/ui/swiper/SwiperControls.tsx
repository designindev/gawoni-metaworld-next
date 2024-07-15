import classNames from 'classnames'
import React, { PropsWithChildren } from 'react'
import './SwiperControls.scss'

type Props = PropsWithChildren<{
  className?: string
  bottom?: boolean
  paginationBottom?: boolean
}>

export const SwiperControls = (props: Props) => {
  const {
    className,
    children,
    paginationBottom = false,
    bottom = false,
  } = props

  return (
    <div
      className={classNames('swiper-controls items__controls', className, {
        'swiper-controls--bottom-pagination': paginationBottom,
        'swiper-controls--bottom': bottom,
      })}
    >
      {children}
    </div>
  )
}
