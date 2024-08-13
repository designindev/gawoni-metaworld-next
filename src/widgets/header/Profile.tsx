'use client'

import { Avatar, Box, Button, IconButton, Menu, MenuItem, Stack, Tooltip } from '@mui/material'
import React from 'react'
import { PATH_PAGE } from 'shared/lib'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import { useRouter } from 'next/navigation'
import { logout, Payload } from 'lib/actions/user.actions'
import Link from 'next/link'

export const Profile = ({ session }: { session: Payload | null }) => {
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
      {session?.user ? (
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
              <Box fontWeight={500}>{session.user.email}</Box>
            </Stack>
          </Tooltip>
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose} keepMounted>
            <MenuItem onClick={() => handleMenuItem(PATH_PAGE.adminPanel.root)}>Admin panel</MenuItem>
            <MenuItem
              onClick={async () => {
                await logout()
                router.refresh()
              }}
            >
              Logout
            </MenuItem>
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
