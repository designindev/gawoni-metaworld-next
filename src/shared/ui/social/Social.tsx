import classNames from 'classnames'
import Soc1 from './soc-1.png'
import Soc2 from './soc-2.png'
import Soc3 from './soc-3.png'
import Soc4 from './soc-4.png'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  className?: string
}

export const Social = (props: Props) => {
  const { className } = props

  return (
    <ul className={classNames('social footer__social', className)}>
      <li className='social__item'>
        <Link href='#' className='social__link'>
          <Image src={Soc1} alt='Logo' priority />
        </Link>
      </li>
      <li className='social__item'>
        <Link href='#' className='social__link'>
          <Image src={Soc2} alt='Logo' priority />
        </Link>
      </li>
      <li className='social__item'>
        <Link href='#' className='social__link'>
          <Image src={Soc3} alt='Logo' priority />
        </Link>
      </li>
      <li className='social__item'>
        <Link href='#' className='social__link'>
          <Image src={Soc4} alt='Logo' priority />
        </Link>
      </li>
    </ul>
  )
}
