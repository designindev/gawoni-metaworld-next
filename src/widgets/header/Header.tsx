'use client'

import Image from 'next/image'
import Logo from 'shared/images/logo.png'
import { Navigation } from '../navigation/Navigation'
import { PATH_MENU, PATH_PAGE } from 'shared/lib/paths'
import Link from 'next/link'
import { useState } from 'react'
import { Box, Container, IconButton, Stack } from '@mui/material'
import { Profile } from './Profile'
import MenuIcon from '@mui/icons-material/Menu'

export const Header = () => {
  const [activeMenu, setActiveMenu] = useState(false)

  const onClick = () => {
    setActiveMenu((v) => !v)
  }

  return (
    <Box component={'header'} position={'absolute'} top={0} left={0} right={0} zIndex={99}>
      <Box className='header-line header__line' sx={{ backgroundColor: 'dark.main' }}>
        <Container>
          <Stack flexDirection={'row'} justifyContent={'flex-end'} alignItems={'center'} height={{ xs: 60, lg: 85 }}>
            <Box
              position={'absolute'}
              top={0}
              left={0}
              right={0}
              textAlign={'center'}
              height={{ xs: 60, lg: 85 }}
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              zIndex={1}
            >
              <Link href={PATH_PAGE.root} className='logo'>
                <Image src={Logo} alt='Logo' priority />
              </Link>
            </Box>
            <Box position={'relative'} zIndex={2}>
              <Profile />
              <IconButton
                onClick={onClick}
                edge='start'
                sx={{ display: { lg: 'none' }, mr: -2, fontSize: '30px' }}
                color={'inherit'}
                aria-label='menu'
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Stack>
        </Container>
      </Box>
      <Container>
        <Navigation navLinks={PATH_MENU} visible={activeMenu} closeMenu={() => setActiveMenu(false)} />
      </Container>
    </Box>
  )
}
