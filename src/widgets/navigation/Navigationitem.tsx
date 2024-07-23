import classNames from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { PATH_MENU } from 'shared/lib'

type Props = { el: PATH_MENU }

const Navigationitem = (props: Props) => {
  const { el } = props
  const { label, sub, ...rest } = el

  const [visible, setVisible] = useState(false)

  const pathName = usePathname()

  const isActive = pathName === el.href
  const hasSub = Boolean(sub)

  const className = classNames('nav__list-link', {
    'nav__list-link--active': isActive,
  })

  const onClick = () => {
    setVisible((v) => !v)
  }

  return (
    <li
      className={classNames('nav__list-item', {
        'nav__list-item--sub': hasSub,
      })}
    >
      {hasSub ? (
        <div className={className} onClick={onClick}>
          {label}
          <i className='text-icon text-icon--right text-icon--chevron-down'></i>
        </div>
      ) : (
        <Link {...rest} className={className}>
          {label}
        </Link>
      )}
      {el.sub && (
        <ul
          className={classNames('nav__list-sub', {
            'nav__list-sub--active': visible,
          })}
        >
          {el.sub.map((el, i) => {
            const { label, sub, ...rest } = el

            return (
              <li key={i} className='nav__list-item'>
                <Link {...rest} className={'nav__list-link'}>
                  {el.label}
                </Link>
              </li>
            )
          })}
        </ul>
      )}
    </li>
  )
}

export default Navigationitem
