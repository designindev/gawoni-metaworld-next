import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import Logo from 'shared/images/logo.png'
import Soc1 from './soc-1.png'
import Soc2 from './soc-2.png'
import Soc3 from './soc-3.png'
import Soc4 from './soc-4.png'

const navLinks = [
  { label: 'Disclaimer', href: '#' },
  { label: 'Terms of service', href: '#' },
  { label: 'Privacy policy', href: '#' },
]

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container footer__container'>
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
            <ul className='social footer__social'>
              <li className='social__item'>
                <a href='#' className='social__link'>
                  <Image src={Soc1} alt='Logo' width={40} height={40} priority />
                </a>
              </li>
              <li className='social__item'>
                <a href='#' className='social__link'>
                  <Image src={Soc2} alt='Logo' width={32} height={32} priority />
                </a>
              </li>
              <li className='social__item'>
                <a href='#' className='social__link'>
                  <Image src={Soc3} alt='Logo' width={40} height={40} priority />
                </a>
              </li>
              <li className='social__item'>
                <a href='#' className='social__link'>
                  <Image src={Soc4} alt='Logo' width={40} height={40} priority />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
