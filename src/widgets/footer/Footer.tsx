import Image from 'next/image'
import Link from 'next/link'
import Logo from 'shared/images/logo.png'
import { Social } from 'shared/ui'
import { Container, Box } from '@mui/material'

const navLinks = [
  { label: 'Disclaimer', href: '#' },
  { label: 'Terms of service', href: '#' },
  { label: 'Privacy policy', href: '#' },
]

export const Footer = () => {
  return (
    <Box component={'footer'} className='footer'>
      <Container>
        <div className='footer__items'>
          <div className='footer__items-item footer__items-item--left'>
            <Link href='/' className='logo logo--lg footer__logo'>
              <Image src={Logo} alt='Logo' priority />
            </Link>
          </div>
          <div className='footer__items-item footer__items-item--center'>
            <div className='footer__center'>
              <div className='footer__copy'>Copyright 2024 - GAWOONI METALABS - ALL RIGHTS RESERVED</div>
              <nav className='footer__nav'>
                <ul className='footer__nav-list'>
                  {navLinks.map((el, i) => {
                    return (
                      <li key={i} className='footer__nav-item'>
                        <Link href={el.href} className={'footer__nav-link text-link'}>
                          {el.label}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </nav>
            </div>
          </div>
          <div className='footer__items-item footer__items-item--right'>
            <Social />
          </div>
        </div>
      </Container>
    </Box>
  )
}
