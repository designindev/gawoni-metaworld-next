import Image from 'next/image'
import Link from 'next/link'
import { Button } from 'shared/ui/button/Button'

const findImage = (body: string) => {
  const imgRegex = /<img.*?src="(.*?)"/
  const imgSrc = body.match(imgRegex)
  return imgSrc ? imgSrc[1] : ''
}

const readAllLink = 'https://medium.com/@gawooni'

export const News = async () => {
  const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@gawooni', {})
  const data = await response.json()
  const items = data.items.slice(0, 3) as any[]

  return (
    <section className='section s-news' id='news'>
      <div className='section__bg' style={{ backgroundImage: `url(/images/bg/news.png)` }}></div>
      <div className='container s-news__container news'>
        <div className='section__heading-wrapper s-news__heading-wrapper'>
          <h2 className='h2 section__heading'>
            <span className='section__heading-icon section__heading-icon--right'>latest News</span>
          </h2>
          <div className='section__heading-btn'>
            <Button href={readAllLink} target='_blank'>
              Read all news
            </Button>
          </div>
        </div>
        <div className='row items news__items'>
          {items.map((item, i) => {
            const image = findImage(item.content)

            return (
              <div key={i} className='col-lg-4 col-md-6 col-12 items__item item-bg item-bg--grid news__items-item'>
                <div className='item-bg__bg news__items-bg'></div>
                <div className='items__img image image--cover news__items-img'>
                  <Image src={image} width={0} height={0} sizes='100vw' style={{ width: '100%', height: 'auto' }} alt='' />
                </div>
                <div className='items__text news__items-text'>
                  <div className='news__items-date'>
                    <div className='text-icon text-icon--date text-icon--left'></div>
                    {item.pubDate}
                  </div>
                  <h3 className='items__title h3 h3--fz-28 text-title news__items-title'>{item.title}</h3>
                  <div className='items__descr news__items-descr'>
                    <p>{item.descr}</p>
                  </div>
                  <div className='items__descr news__items-link'>
                    <Link href={readAllLink} target='_blank' className='text-link text-link--arrow text-secondary'>
                      READ MORE
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className='mt-40 text-center'>
          <Link href={readAllLink} className='text-link text-primary fz-20'>
            Read all news
          </Link>
        </div>
      </div>
    </section>
  )
}
