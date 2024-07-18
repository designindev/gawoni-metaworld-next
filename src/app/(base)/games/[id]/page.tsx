import { Button } from 'shared/ui/button/Button'

const Games = () => {
  return (
    <section className='section'>
      <div className='container'>
        <div className='game-details'>
          <div className='game-details__heading'>
            <div className='details__heading-logo'></div>
            <div className='details__heading-button'>
              <Button>Play</Button>
            </div>
          </div>
          <div className='game-details__info'>
            <div className='tags game-details__info-tags'>
              <div className='tags__item'>Racing</div>
              <div className='tags__item'>Blockchain game</div>
            </div>
          </div>
          <div className='row items game-details__features'>
            <div className='items__item game-details__features-item'>
              <h4 className='game-details__features-label h4'>game description</h4>
              <div className='game-details__features-descrgit'>
                <p>The first Blockchain Rally Racing Game powered by real Rally Champions and Motosport Brands Release: Q2 2024</p>
              </div>
            </div>
          </div>
          <div className='game-details__banner'>
            <h3 className='game-details__banner-title'>join our game community</h3>
            <div className='game-details__banner-descr'>
              <p>
                Lorem ipsum dolor sit amet consectetur. Tincidunt in ultrices pharetra massa in. Aliquam et scelerisque cursus etiam diam id aliquam. Gravida
                quam sit et.
              </p>
            </div>
            <div className='game-details__banner-social'></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Games
