'use client'

import classNames from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { PATH_MENU } from 'shared/lib'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Box, BoxProps } from '@mui/material'

type Props = { el: PATH_MENU; closeMenu: () => void }

const Navigationitem = (props: Props) => {
  const { el, closeMenu } = props
  const { label, sub, ...rest } = el

  const [visible, setVisible] = useState(false)

  const pathName = usePathname()

  const isActive = pathName === el.href
  const hasSub = Boolean(sub)

  const className = classNames('navigation__list-link', {
    'navigation__list-link--active': isActive,
  })

  const onToggleSubMenu = () => {
    setVisible((v) => !v)
  }

  const boxProps: BoxProps = {
    display: 'flex',
    alignItems: 'center',
    pl: { xl: 7, lg: 4, xs: 6 },
    pr: { xl: 7, lg: 4, xs: 6 },
    height: 55,
    fontSize: { xl: 18, lg: 16, xs: 14 },
    sx: {
      cursor: 'pointer',
      color: isActive ? 'secondary.main' : '#fff',
      '&:hover': {
        color: 'secondary.main',
      },
    },
  }

  return (
    <Box
      component={'li'}
      position={'relative'}
      className={classNames('navigation__list-item', {
        'navigation__list-item--sub': hasSub,
      })}
    >
      {hasSub ? (
        <Box {...boxProps} onClick={onToggleSubMenu}>
          {label}
          <ExpandMoreIcon sx={{ display: { lg: 'none', xs: 'block' }, mr: -1.5 }} />
        </Box>
      ) : (
        <Box component={Link} {...rest} {...boxProps} onClick={() => closeMenu()}>
          {label}
        </Box>
      )}
      {el.sub && (
        <ul
          className={classNames('navigation__list-sub', {
            'navigation__list-sub--active': visible,
          })}
        >
          {el.sub.map((el, i) => {
            const { label, sub, ...rest } = el

            return (
              <li key={i} className='navigation__list-item'>
                <Link
                  {...rest}
                  className={'navigation__list-link'}
                  onClick={() => {
                    closeMenu()
                    onToggleSubMenu()
                  }}
                >
                  {el.label}
                </Link>
              </li>
            )
          })}
        </ul>
      )}
    </Box>
  )
}

export default Navigationitem
