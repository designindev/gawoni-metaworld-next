'use client'

import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import AdbIcon from '@mui/icons-material/Adb'
import { IconButton, Stack } from '@mui/material'
import { Profile } from './Profile'
import { PATH_MENU, PATH_PAGE } from 'shared/lib'
import { Navigation } from 'widgets/navigation/Navigation'
import MenuIcon from '@mui/icons-material/Menu'
import Link from 'next/link'
import Image from 'next/image'
import Logo from 'shared/images/logo.png'

const pages = ['Products', 'Pricing', 'Blog']

export function Header() {
  const [activeMenu, setActiveMenu] = React.useState(false)

  const onClick = () => {
    setActiveMenu((v) => !v)
  }

  return (
    <AppBar position='absolute' sx={{ background: 'none', bgcolor: 'transparent', boxShadow: 'none' }}>
      <Box bgcolor={'dark.main'}>
        <Container>
          <Toolbar disableGutters sx={{ justifyContent: 'flex-end', height: { lg: 85, xs: 60 } }}>
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
              <Box
                display={'inline-block'}
                component={Link}
                href={PATH_PAGE.root}
                sx={{
                  width: { md: '213px', xs: '64px' },
                  height: { md: '126', xs: '38px' },
                  position: 'relative',
                }}
              >
                <Image src={Logo} alt='Logo' priority />
              </Box>
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
          </Toolbar>
        </Container>
      </Box>
      <Container>
        <Navigation navLinks={PATH_MENU} visible={activeMenu} closeMenu={() => setActiveMenu(false)} />
      </Container>
    </AppBar>
  )
}
