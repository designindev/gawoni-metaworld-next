'use client'

import { Avatar, Box, Button, CircularProgress, IconButton, Menu, MenuItem, Stack, Tooltip } from '@mui/material'
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
  const handleClose = () => setAnchorEl(null)

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
          <Tooltip title='Open settings'>
            <Stack
              direction={'row'}
              display={'inline-flex'}
              alignItems={'center'}
              spacing={4}
              onClick={handleOpen}
              sx={{
                cursor: 'pointer',
                '&:hover': {
                  color: 'secondary.main',
                },
                '&:active div:last-child': {
                  textDecoration: 'underline',
                },
              }}
            >
              <IconButton sx={{ p: 0 }}>
                <Avatar sx={{ width: 50, height: 50, bgcolor: '#000', color: '#fff' }}>
                  <PermIdentityIcon sx={{ fontSize: 20 }} />
                </Avatar>
              </IconButton>
              <Box fontWeight={500}>{session.user?.name}</Box>
            </Stack>
          </Tooltip>
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose} keepMounted>
            <MenuItem onClick={() => handleMenuItem('/admin')}>Admin panel</MenuItem>
            <MenuItem onClick={() => signOut({ callbackUrl: '/' })}>Logout</MenuItem>
          </Menu>
        </>
      ) : (
        <Stack direction={'row'} spacing={2}>
          <Button component={Link} href={PATH_PAGE.register} size='small' color='white' variant='outlined'>
            Register
          </Button>
          <Button component={Link} href={PATH_PAGE.login} size='small'>
            Login
          </Button>
        </Stack>
      )}
    </Box>
  )
}
