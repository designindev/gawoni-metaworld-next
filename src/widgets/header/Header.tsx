import Image from 'next/image'
import React from 'react'
import Logo from 'shared/images/logo.png'
import Link from 'next/link'
import { Navigation } from '../navigation/Navigation'
import { PATH_MENU } from 'shared/lib/paths'

export const Header = () => {
  const isAuth = false

  return (
    <header className='header'>
      <div className='header__top'>
        <div className='container header__top-container'>
          <div className='header__top-item header__top-item--left'></div>
          <div className='header__top-item header__top-item--center'>
            <Link href='/' className='logo header__logo'>
              <Image src={Logo} alt='Logo' width={213} height={64} priority />
            </Link>
          </div>
          <div className='header__top-item header__top-item--right'>
            {isAuth ? (
              <a href='' className='profile header__prifile'>
                <div className='profile__image'></div>
                <div className='profile__text'>John Doe</div>
              </a>
            ) : (
              <a href='' className='btn btn--primary'>
                Login
              </a>
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
