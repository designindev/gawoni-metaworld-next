'use client'

import { Box, Button, CircularProgress, Menu, MenuItem, Stack } from '@mui/material'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'
import { PATH_PAGE } from 'shared/lib'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import { useRouter } from 'next/navigation'

export const Profile = () => {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleOpen = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleMenuItem = (href: string) => {
    handleClose()
    router.push(href)
  }

  return (
    <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
      {status === 'loading' ? (
        <CircularProgress />
      ) : session ? (
        <>
          <Stack
            display={'inline-flex'}
            direction={'row'}
            spacing={4}
            onClick={handleOpen}
            alignItems={'center'}
            sx={{
              cursor: 'pointer',
              '&:hover': {
                color: 'secondary.main',
              },
              '&:active .profile__text': {
                textDecoration: 'underline',
              },
            }}
          >
            <Box
              width={50}
              height={50}
              display={'flex'}
              alignItems={'center'}
              justifyContent={'center'}
              borderRadius={'50%'}
              sx={{ backgroundColor: '#000' }}
            >
              <PermIdentityIcon />
            </Box>
            <Box fontWeight={500}>{session.user?.name}</Box>
          </Stack>
          <Menu
            id='basic-menu'
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{ 'aria-labelledby': 'basic-button' }}
          >
            <MenuItem onClick={() => handleMenuItem('/admin')}>Admin panel</MenuItem>
            <MenuItem onClick={() => signOut({ callbackUrl: '/' })}>Logout</MenuItem>
          </Menu>
        </>
      ) : (
        <Button component={Link} href={PATH_PAGE.login}>
          Login
        </Button>
      )}
    </Box>
  )
}
