import Image from 'next/image'
import Image1 from './game-1.jpg'
import Image2 from './game-2.jpg'
import Image3 from './game-3.jpg'
import Image4 from './game-4.jpg'
import { Button } from 'shared/ui/button/Button'
import { PATH_PAGE } from 'shared/lib'

const items = [
  {
    id: '1',
    src: Image1.src,
    title: 'K 4 rally',
    descr: 'The first Blockchain Rally Racing Game powered by real Rally Champions and Motosport Brands Release: Q2 2024',
  },
  {
    id: '2',
    src: Image2.src,
    title: 'tuk tuk rush',
    descr: 'The first game featuring Thailand and its iconic TUK TUK vehicle. Release Q4 2024.',
  },
  {
    id: '3',
    src: Image3.src,
    title: 'Racing game',
    descr: 'Another spectacular blockchain racing game is already in development. We will be announcing more on this shortly.',
  },
  {
    id: '4',
    src: Image4.src,
    title: 'Martial arts game',
    descr:
      "You want a spectacular martial arts blockchain game? We're already working on it. It will be the ultimate fighting game. We will be announcing more on this shortly.",
  },
]

export const Games = () => {
  return (
    <section className='section s-games'>
      <div className='section__bg' style={{ backgroundImage: `url(/images/bg/games.png)` }}></div>
      <div className='container s-games__container games'>
        <h2 className='h2 section__heading'>
          <span className='section__heading-icon'>our games</span>
        </h2>
        <div className='row items games__items'>
          {items.map((item, i) => {
            return (
              <div key={i} className='col-md-6 col-12 items__item item-bg item-bg--grid games__items-item'>
                <div className='item-bg__bg games__items-border'></div>
                <div className='games__items-border-line games__items-border-line--1'></div>
                <div className='games__items-border-line games__items-border-line--2'></div>
                <div className='games__items-border-line games__items-border-line--3'></div>
                <div className='games__items-border-line games__items-border-line--4'></div>
                <div className='items__img image image--cover games__items-img'>
                  <Image src={item.src} width={0} height={0} sizes='100vw' style={{ width: '100%', height: 'auto' }} alt='' />
                </div>
                <div className='items__text games__items-text'>
                  <h3 className='items__title h3 h3--fz-42 text-title games__items-title'>{item.title}</h3>
                  <div className='items__descr text-descr games__items-descr fz-18'>
                    <p>{item.descr}</p>
                  </div>
                </div>
                <div className='games__items-hover'>
                  <Button href={PATH_PAGE.games.slug(item.id)} className='games__items-hover-btn' color={'light'} border>
                    <i className='text-icon text-icon--left text-icon--info'></i>
                    Game Info
                  </Button>
                  <Button href={PATH_PAGE.shop.root} className='games__items-hover-btn' color={'light'} border>
                    <i className='text-icon text-icon--left text-icon--cart'></i>
                    Game Store
                  </Button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
