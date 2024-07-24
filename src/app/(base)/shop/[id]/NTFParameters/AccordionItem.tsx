'use client'

import classNames from 'classnames'
import { ReactNode, useRef, useState } from 'react'
import { slideToggle } from 'shared/lib'

type Props = {
  title: string
  children: ReactNode
}

export const AccordionItem = (props: Props) => {
  const { title, children } = props
  const ref = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)

  const onToggle = () => {
    slideToggle(ref.current)
    setOpen((o) => !o)
  }

  return (
    <div
      className={classNames('accordion', {
        'accordion--active': open,
      })}
    >
      <h4 className='accordion__title h6' onClick={onToggle}>
        {title}
        <i className='text-icon text-icon--chevron-down text-icon--md'></i>
      </h4>
      <div ref={ref} className='accordion__content' style={{ display: 'none' }}>
        {children}
      </div>
    </div>
  )
}
