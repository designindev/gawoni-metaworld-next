'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { PATH_MENU } from 'shared/lib'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Box, BoxProps, Stack } from '@mui/material'

type Props = { el: PATH_MENU; closeMenu: () => void }

const Navigationitem = (props: Props) => {
  const { el, closeMenu } = props
  const { label, sub, auth, ...rest } = el

  const [visible, setVisible] = useState(false)

  const pathName = usePathname()

  const isActive = pathName === el.href
  const hasSub = Boolean(sub)

  const onToggleSubMenu = () => {
    setVisible((v) => !v)
  }

  const linkProps: BoxProps = {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    pl: { xl: 7, lg: 4, xs: 6 },
    pr: { xl: 7, lg: 4, xs: 6 },
    height: { lg: 65, xs: 45 },
    fontSize: { xl: 18, lg: 16, xs: 14 },
    sx: {
      cursor: 'pointer',
      color: isActive ? 'secondary.main' : '#fff',
      '&:hover': {
        color: 'secondary.main',
      },
    },
  }

  return (
    <Box
      component={'li'}
      position={'relative'}
      sx={{
        '&:hover ul': {
          opacity: 1,
          transform: 'translate(0, 0)',
          visibility: 'visible',
        },
      }}
    >
      {hasSub ? (
        <Box {...linkProps} onClick={onToggleSubMenu}>
          {label}
          <ExpandMoreIcon sx={{ display: { lg: 'none', xs: 'block' }, mr: -1.5 }} />
        </Box>
      ) : (
        <Box component={Link} {...rest} {...linkProps} onClick={() => closeMenu()}>
          {label}
        </Box>
      )}
      {el.sub && (
        <Stack
          component={'ul'}
          position={'absolute'}
          top={'100%'}
          left={0}
          borderRadius={'0 0 8px 8px'}
          sx={(theme) => ({
            [theme.breakpoints.up('lg')]: {
              bgcolor: 'dark.main',
              minWidth: '265px',
              transform: 'translate(0, 20px)',
              transition: 'all .3s',
              opacity: 0,
              visibility: 'hidden',
              padding: 4,
            },
            [theme.breakpoints.down('lg')]: {
              position: 'relative',
              display: visible ? 'none' : 'block',
              paddingLeft: 8,
              paddingRight: 8,
              textAlign: 'right',
            },
          })}
        >
          {el.sub.map((el, i) => {
            const { label, sub, ...rest } = el

            return (
              <Box component={'li'} key={i} textAlign={'left'}>
                <Box
                  component={Link}
                  sx={(theme) => ({
                    display: 'flex',
                    alignItems: 'center',
                    height: 40,
                    whiteSpace: 'nowrap',
                    transition: 'color .3s',
                    '&:hover': {
                      color: 'secondary.main',
                    },
                    [theme.breakpoints.down('lg')]: {
                      justifyContent: 'flex-end',
                      pr: 4,
                    },
                  })}
                  {...rest}
                  onClick={() => {
                    closeMenu()
                    onToggleSubMenu()
                  }}
                >
                  {el.label}
                </Box>
              </Box>
            )
          })}
        </Stack>
      )}
    </Box>
  )
}

export default Navigationitem
