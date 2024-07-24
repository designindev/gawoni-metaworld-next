'use client'

import Image from 'next/image'
import Logo from 'shared/images/logo.png'
import { Navigation } from '../navigation/Navigation'
import { PATH_MENU, PATH_PAGE } from 'shared/lib/paths'
import { Button } from 'shared/ui/button/Button'
import Link from 'next/link'
import { useState } from 'react'
import classNames from 'classnames'

export const Header = () => {
  const isAuth = false
  const [activeMenu, setActiveMenu] = useState(false)

  const onClick = () => {
    setActiveMenu((v) => !v)
  }

  return (
    <header className='header'>
      <div className='header-line header__line'>
        <div className='container header-line__container'>
          <div className='header-line__item header-line__item--left'></div>
          <div className='header-line__item header-line__item--center'>
            <Link href={PATH_PAGE.root} className='logo header__logo'>
              <Image src={Logo} alt='Logo' priority />
            </Link>
          </div>
          <div className='header-line__item header-line__item--right'>
            <button
              className={classNames('menu-burger header__burger', {
                'menu-burger--active': activeMenu,
              })}
              onClick={onClick}
            >
              <span className='menu-burger__lines'>
                <span className='menu-burger__hamburger'>
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
                <span className='menu-burger__cross'>
                  <span></span>
                  <span></span>
                </span>
              </span>
            </button>

            {isAuth ? (
              <a href='' className='profile header__profile'>
                <div className='profile__image'></div>
                <div className='profile__text'>John Doe</div>
              </a>
            ) : (
              <Button href={PATH_PAGE.login}>Login</Button>
            )}
          </div>
        </div>
      </div>
      <div className='container'>
        <Navigation navLinks={PATH_MENU} visible={activeMenu} closeMenu={() => setActiveMenu(false)} />
      </div>
    </header>
  )
}
