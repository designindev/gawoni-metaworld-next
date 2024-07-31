import { Box, Button } from '@mui/material'
import { authConfig } from 'configs/auth'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import React from 'react'
import { PATH_PAGE } from 'shared/lib'

export const Profile = async () => {
  const session = await getServerSession(authConfig)

  return (
    <>
      {session ? (
        <Box
          component={Link}
          href='/admin'
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            '&:hover .profile__text': {
              color: 'primary.main',
            },
            '&:active .profile__text': {
              textDecoration: 'underline',
            },
          }}
        >
          <div className='profile__image'></div>
          <div className='profile__text'>{session.user?.name}</div>
        </Box>
      ) : (
        <Button component={Link} href={PATH_PAGE.login}>
          Login
        </Button>
      )}
    </>
  )
}
