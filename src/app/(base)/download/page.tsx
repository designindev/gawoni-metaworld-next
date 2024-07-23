import Image from 'next/image'
import DownloadImage1 from './download-1.svg'
import DownloadImage2 from './download-2.svg'
import DownloadImage3 from './download-3.svg'
import { Button } from 'shared/ui/button/Button'

const items = [
  {
    image: DownloadImage1,
    title: 'PC Client version (windows)',
    btn: 'Download',
  },
  {
    image: DownloadImage2,
    title: 'Game Streaming',
    btn: 'Play',
  },
  {
    image: DownloadImage3,
    title: 'Mobile (android apk)',
    btn: 'Download',
  },
]

export default function Download() {
  return (
    <section className='section s-download'>
      <div className='container s-download__container'>
        <h2 className='h1 h1--fz-64 section__heading'>play k4 rally</h2>
        <div className='row items download__items'>
          {items.map((el, i) => {
            return (
              <div key={i} className='col-lg-4 col-sm-6 col-12 items__item item-bg item-bg--grid download__items-item'>
                <div className='item-bg__bg download__items-border'></div>
                <i className='items__icon download__items-icon'>
                  <Image src={el.image} alt='' />
                </i>
                <h3 className='items__title h4 text-title download__items-title'>{el.title}</h3>
                <div className='download__items-btn'>
                  <Button href='/' size='lg' maxWidth>
                    {el.btn}
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
