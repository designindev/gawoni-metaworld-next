'use client'

import classNames from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { PATH_MENU } from 'shared/lib'

type Props = {
  navLinks: PATH_MENU[]
}

export const Navigation = ({ navLinks }: Props) => {
  const pathName = usePathname()

  return (
    <nav className='nav header__nav'>
      <ul className='nav__list'>
        {navLinks.map((el, i) => {
          const isActive = pathName === el.href

          return (
            <li key={i} className='nav__list-item'>
              <Link
                href={el.href}
                className={classNames('nav__list-link', {
                  'nav__list-link--active': isActive,
                })}
              >
                {el.label}
              </Link>
              {el.sub && (
                <ul className='nav__list-sub'>
                  {el.sub.map((el, i) => {
                    return (
                      <li key={i} className='nav__list-item'>
                        <Link href={el.href} className={'nav__list-link'}>
                          {el.label}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
