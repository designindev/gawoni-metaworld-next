'use client'

import classNames from 'classnames'
import { ReactNode, useRef, useState } from 'react'
import { slideToggle } from 'shared/lib'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Typography } from '@mui/material'

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
      <Typography
        variant='h6'
        component={'h4'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
        height={56}
        p={'5px 16px'}
        fontWeight={500}
        sx={{ cursor: 'pointer' }}
        onClick={onToggle}
        fontSize={16}
      >
        {title}
        <ExpandMoreIcon />
      </Typography>
      <div ref={ref} className='accordion__content' style={{ display: 'none' }}>
        {children}
      </div>
    </div>
  )
}
