import { Button } from 'shared/ui/button/Button'
import Logo from './logo.png'
import Image from 'next/image'
import { Social } from 'shared/ui'
import { GameSlider } from './game-slider'
import Slide1 from './slide-1.jpg'
import Slide2 from './slide-2.jpg'
import Slide3 from './slide-3.jpg'
import Slide4 from './slide-4.jpg'
import { PATH_PAGE } from 'shared/lib'

const slides = [
  {
    image: Slide1,
  },
  {
    image: Slide2,
  },
  {
    image: Slide3,
  },
  {
    image: Slide4,
  },
  {
    image: Slide1,
  },
  {
    image: Slide2,
  },
  {
    image: Slide3,
  },
  {
    image: Slide4,
  },
]

const Games = () => {
  return (
    <section className='section'>
      <div className='section__bg section__bg--gradient'></div>
      <div className='container'>
        <div className='game-details'>
          <GameSlider slides={slides} className='game-details__slider' />
          <div className='game-details__heading'>
            <div className='game-details__heading-logo'>
              <Image src={Logo} alt='' />
            </div>
            <div className='game-details__heading-button'>
              <Button href={PATH_PAGE.download} maxWidth>
                Play
              </Button>
            </div>
          </div>
          <div className='game-details__info'>
            <div className='tags game-details__tags'>
              <div className='tags__item'>Racing</div>
              <div className='tags__item'>Blockchain game</div>
            </div>
            <ul className='short-info game-details__short-info'>
              <li className='short-info__item'>
                <h5 className='short-info__label'>developer</h5>
                <div className='short-info__value'>GAWOONI MetaLabs</div>
              </li>
              <li className='short-info__item'>
                <h5 className='short-info__label'>Release</h5>
                <div className='short-info__value'>02 2024</div>
              </li>
              <li className='short-info__item'>
                <h5 className='short-info__label'>platform</h5>
                <div className='short-info__value'>PC Client (Windows), Game Streaming, Mobile</div>
              </li>
            </ul>
          </div>
          <div className='row items game-details__features'>
            <div className='col-lg-6 items__item item-bg item-bg--grid game-details__features-item'>
              <div className='item-bg__bg game-details__features-border'></div>
              <h4 className='game-details__features-title h4'>game description</h4>
              <div className='game-details__features-descr text-descr'>
                <p>The first Blockchain Rally Racing Game powered by real Rally Champions and Motosport Brands Release: Q2 2024</p>
              </div>
            </div>
            <div className='col-lg-6 items__item item-bg item-bg--grid  game-details__features-item'>
              <div className='item-bg__bg game-details__features-border'></div>
              <h4 className='game-details__features-title h4'>game Features</h4>
              <ul className='game-details__features-list text-list'>
                <li>Lorem Ipsum dolor sit amet</li>
                <li>Lorem Ipsum dolor sit amet</li>
                <li>Lorem Ipsum dolor sit amet</li>
                <li>Lorem Ipsum dolor sit amet</li>
              </ul>
            </div>
          </div>
          <div className='banner game-details__banner'>
            <div className='banner__inner'>
              <h3 className='banner__title h3 h3--fz-28'>join our game community</h3>
              <div className='banner__descr text-descr'>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Tincidunt in ultrices pharetra massa in. Aliquam et scelerisque cursus etiam diam id aliquam. Gravida
                  quam sit et.
                </p>
              </div>
              <Social className='banner__social' hidden={{ tg: true }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Games
