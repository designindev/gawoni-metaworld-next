'use client'

import classNames from 'classnames'
import { PATH_MENU } from 'shared/lib'
import Navigationitem from './Navigationitem'
import { useSession, signIn, signOut } from 'next-auth/react'
import Link from 'next/link'

type Props = {
  navLinks: PATH_MENU[]
  visible: boolean
  closeMenu: () => void
}

export const Navigation = ({ navLinks, visible, closeMenu }: Props) => {
  const session = useSession()

  return (
    <nav
      className={classNames('navigation header__nav', {
        'navigation--active': visible,
      })}
    >
      <ul className='navigation__list'>
        {navLinks.map((el, i) => {
          return <Navigationitem el={el} key={i} closeMenu={closeMenu} />
        })}
      </ul>
      {/* {session && session.data ? (
        <>
          <Link href={'/profile'}>Profile</Link>
          <Link href={'#'} onClick={() => signOut({ callbackUrl: '/' })}>
            Sign out
          </Link>
        </>
      ) : (
        <Link href={'/signin'}>Sign In</Link>
      )} */}
    </nav>
  )
}
