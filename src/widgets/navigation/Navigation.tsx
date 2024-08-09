import { PATH_MENU } from 'shared/lib'
import Navigationitem from './Navigationitem'
import { Stack, Toolbar } from '@mui/material'

type Props = {
  navLinks: PATH_MENU[]
  visible: boolean
  closeMenu: () => void
}

export const Navigation = (props: Props) => {
  const { navLinks, visible, closeMenu } = props

  return (
    <>
      <Toolbar
        component={'nav'}
        sx={{
          maxWidth: 1000,
          marginX: 'auto',
          position: { lg: 'relative', xs: 'absolute' },
          top: { lg: 0, xs: 60 },
          right: 0,
          height: { lg: 'auto', xs: 'calc(100vh - 60px)' },
          width: { lg: 'auto', xs: 260 },
          justifyContent: { lg: 'center', xs: 'flex-end' },
          alignItems: 'flex-start',
          visibility: { lg: 'visible', xs: visible ? 'visible' : 'hidden' },
          transform: { lg: 'none', xs: visible ? 'translate(0, 0)' : 'translate(100%, 0)' },
          transition: 'transform .3s, visibility .3s',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'dark.main',
            zIndex: -1,
            clipPath: { lg: 'polygon(0 0, 100% 0, calc(100% - 90px) 100%, 90px 100%)', xs: 'none' },
          },
        }}
      >
        <Stack
          component={'ul'}
          direction={{ lg: 'row', xs: 'column' }}
          textAlign={{ lg: 'center', xs: 'right' }}
          justifyContent={'space-between'}
        >
          {navLinks.map((el, i) => {
            return <Navigationitem el={el} key={i} closeMenu={closeMenu} />
          })}
        </Stack>
      </Toolbar>
    </>
  )
}
