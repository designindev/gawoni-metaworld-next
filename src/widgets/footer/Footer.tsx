import Image from 'next/image'
import Link from 'next/link'
import Logo from 'shared/images/logo.png'
import { Social } from 'shared/ui'
import { Container, Box, Stack } from '@mui/material'
import { PATH_PAGE } from 'shared/lib'

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
            <Box
              component={Link}
              href={PATH_PAGE.root}
              sx={{
                display: 'inline-block',
                width: { md: '350px', xs: '196px' },
                height: { md: '104px', xs: '58px' },
                position: 'relative',
              }}
            >
              <Image src={Logo} alt='Logo' priority />
            </Box>
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
