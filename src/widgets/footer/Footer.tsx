import Image from 'next/image'
import Link from 'next/link'
import Logo from 'shared/images/logo.png'
import { Social } from 'shared/ui'
import { Container, Box, Stack } from '@mui/material'

const navLinks = [
  { label: 'Disclaimer', href: '#' },
  { label: 'Terms of service', href: '#' },
  { label: 'Privacy policy', href: '#' },
]

export const Footer = () => {
  return (
    <Box component={'footer'} py={12} borderTop={'2px solid'} borderColor={'primary.main'}>
      <Container>
        <Stack direction={'row'} flexWrap={'wrap'} justifyContent={'space-between'} rowGap={10} columnGap={4}>
          <Box width={{ md: 'auto', xs: '100%' }}>
            <Link href='/' className='logo logo--lg'>
              <Image src={Logo} alt='Logo' priority />
            </Link>
          </Box>
          <Box>
            <Box mb={11} fontSize={{ sm: 16, xs: 14 }}>
              Copyright 2024 - GAWOONI METALABS - ALL RIGHTS RESERVED
            </Box>
            <Box component={'nav'}>
              <Stack
                component={'ul'}
                direction={{ sm: 'row', xs: 'column' }}
                rowGap={10}
                columnGap={20}
                justifyContent={'space-between'}
              >
                {navLinks.map((el, i) => {
                  return (
                    <Box component={'li'} key={i}>
                      <Box
                        component={Link}
                        href={el.href}
                        textTransform={'uppercase'}
                        sx={{ textDecoration: 'underline' }}
                      >
                        {el.label}
                      </Box>
                    </Box>
                  )
                })}
              </Stack>
            </Box>
          </Box>
          <Box display={{ lg: 'block', xs: 'flex' }} justifyContent={'space-between'}>
            <Social />
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
