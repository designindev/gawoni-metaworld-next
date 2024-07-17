import Image from 'next/image'
import React from 'react'
import Logo from 'shared/images/logo.png'
import { Navigation } from '../navigation/Navigation'
import { PATH_MENU, PATH_PAGE } from 'shared/lib/paths'
import { Button } from 'shared/ui/button/Button'
import Link from 'next/link'

export const Header = () => {
  const isAuth = false

  return (
    <header className='header'>
      <div className='header__top'>
        <div className='container header__top-container'>
          <div className='header__top-item header__top-item--left'></div>
          <div className='header__top-item header__top-item--center'>
            <Link href={PATH_PAGE.root} className='logo header__logo'>
              <Image src={Logo} alt='Logo' priority />
            </Link>
          </div>
          <div className='header__top-item header__top-item--right'>
            {isAuth ? (
              <a href='' className='profile header__prifile'>
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
        <Navigation navLinks={PATH_MENU} />
      </div>
    </header>
  )
}
