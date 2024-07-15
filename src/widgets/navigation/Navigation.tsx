'use client'

import classNames from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type navLink = {
  label: string
  href: string
}

type Props = {
  navLinks: navLink[]
}

export const Navigation = ({ navLinks }: Props) => {
  const pathName = usePathname()

  return (
    <nav className='nav header__nav'>
      <ul className='nav__list'>
        {navLinks.map((el, i) => {
          const isActive = pathName === el.href

          const isGames = i === 2

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
              {isGames && (
                <ul className='nav__list-sub'>
                  <li key={i} className='nav__list-item'>
                    <Link href={el.href} className={'nav__list-link'}>
                      K4Rally
                    </Link>
                  </li>
                  <li key={i} className='nav__list-item'>
                    <Link href={el.href} className={'nav__list-link'}>
                      Tuk Tuk Rush
                    </Link>
                  </li>
                  <li key={i} className='nav__list-item'>
                    <Link href={el.href} className={'nav__list-link'}>
                      Racing Game
                    </Link>
                  </li>
                  <li key={i} className='nav__list-item'>
                    <Link href={el.href} className={'nav__list-link'}>
                      Martial Arts Game
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
