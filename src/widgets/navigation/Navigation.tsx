'use client'

import classNames from 'classnames'
import { PATH_MENU } from 'shared/lib'
import Navigationitem from './Navigationitem'

type Props = {
  navLinks: PATH_MENU[]
  visible: boolean
  closeMenu: () => void
}

export const Navigation = (props: Props) => {
  const { navLinks, visible, closeMenu } = props

  return (
    <nav
      className={classNames('nav header__nav', {
        'nav--active': visible,
      })}
    >
      <ul className='nav__list'>
        {navLinks.map((el, i) => {
          return <Navigationitem el={el} key={i} closeMenu={closeMenu} />
        })}
      </ul>
    </nav>
  )
}
