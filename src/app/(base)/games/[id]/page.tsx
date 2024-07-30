import { Button } from 'shared/ui/button/Button'
import Image from 'next/image'
import { Social } from 'shared/ui'
import { GameSlider, Slide } from './game-slider'
import Logo from 'shared/images/games/logo.png'
import { PATH_PAGE } from 'shared/lib'
import { slides } from './slides'
import { Box, Grid } from '@mui/material'

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
          <Grid container spacing={4} className='game-details__features'>
            <Grid item md={6}>
              <Box className='game-details__features-item' sx={{ border: '1px solid #fff', borderRadius: 2, p: 5, height: '100%' }}>
                <h4 className='game-details__features-title h4'>game description</h4>
                <div className='game-details__features-descr text-descr'>
                  <p>The first Blockchain Rally Racing Game powered by real Rally Champions and Motosport Brands Release: Q2 2024</p>
                </div>
              </Box>
            </Grid>
            <Grid item md={6}>
              <Box className='game-details__features-item' sx={{ border: '1px solid #fff', borderRadius: 2, p: 5, height: '100%' }}>
                <h4 className='game-details__features-title h4'>game Features</h4>
                <ul className='game-details__features-list text-list'>
                  <li>Lorem Ipsum dolor sit amet</li>
                  <li>Lorem Ipsum dolor sit amet</li>
                  <li>Lorem Ipsum dolor sit amet</li>
                  <li>Lorem Ipsum dolor sit amet</li>
                </ul>
              </Box>
            </Grid>
          </Grid>
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
