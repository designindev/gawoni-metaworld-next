import classNames from 'classnames'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import Soc1 from './discord.png'
import Soc2 from './x.png'
import Soc3 from './tg.png'
import Soc4 from './medium.png'

type SocialName = 'discord' | 'x' | 'tg' | 'medium'

type Props = {
  className?: string
  hidden?: Partial<Record<SocialName, boolean>>
}

const items: { image: StaticImageData; name: SocialName }[] = [
  { image: Soc1, name: 'discord' },
  { image: Soc2, name: 'x' },
  { image: Soc3, name: 'tg' },
  { image: Soc4, name: 'medium' },
]

export const Social = (props: Props) => {
  const { className, hidden = {} } = props

  return (
    <ul className={classNames('social footer__social', className)}>
      {items
        .filter((el) => !(hidden[el.name] === true))
        .map((el) => [
          <li key={el.name} className='social__item'>
            <Link href='#' className='social__link'>
              <Image src={el.image} alt='Logo' priority />
            </Link>
          </li>,
        ])}
    </ul>
  )
}
