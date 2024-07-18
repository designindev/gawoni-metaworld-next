'use client'

import classNames from 'classnames'
import { usePathname } from 'next/navigation'
import { PATH_MENU } from 'shared/lib'
import Navigationitem from './Navigationitem'

type Props = {
  navLinks: PATH_MENU[]
  visible: boolean
}

export const Navigation = (props: Props) => {
  const { navLinks, visible } = props

  return (
    <nav
      className={classNames('nav header__nav', {
        'nav--active': visible,
      })}
    >
      <ul className='nav__list'>
        {navLinks.map((el, i) => {
          return <Navigationitem el={el} key={i} />
        })}
      </ul>
    </nav>
  )
}
