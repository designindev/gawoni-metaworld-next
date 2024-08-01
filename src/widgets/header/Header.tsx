'use client'

import Image from 'next/image'
import Logo from 'shared/images/logo.png'
import { Navigation } from '../navigation/Navigation'
import { PATH_MENU, PATH_PAGE } from 'shared/lib/paths'
import Link from 'next/link'
import { useState } from 'react'
import classNames from 'classnames'
import { Box, Container, Grid } from '@mui/material'
import { Profile } from './Profile'

export const Header = () => {
  const [activeMenu, setActiveMenu] = useState(false)

  const onClick = () => {
    setActiveMenu((v) => !v)
  }

  return (
    <header className='header'>
      <Box className='header-line header__line' sx={{ background: '#141414' }}>
        <Container className='header-line__container'>
          <Grid container sx={{ justifyContent: 'space-between', alignItems: 'center', height: 85 }}>
            <div className='header-line__item header-line__item--left'></div>
            <div className='header-line__item header-line__item--center'>
              <Link href={PATH_PAGE.root} className='logo header__logo'>
                <Image src={Logo} alt='Logo' priority />
              </Link>
            </div>
            <div className='header-line__item header-line__item--right'>
              <Profile />
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
            </div>
          </Grid>
        </Container>
      </Box>
      <Container>
        <Navigation navLinks={PATH_MENU} visible={activeMenu} closeMenu={() => setActiveMenu(false)} />
      </Container>
    </header>
  )
}
