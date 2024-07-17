import Image from 'next/image'
import Link from 'next/link'
import DownloadImage1 from './download-1.svg'
import DownloadImage2 from './download-2.svg'
import DownloadImage3 from './download-3.svg'

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

const Download = () => {
  return (
    <section className='section s-download'>
      <div className='container s-download__container'>
        <h2 className='h1 section__heading'>play k4 rally</h2>
        <div className='row items download__items'>
          {items.map((el, i) => {
            return (
              <div
                key={i}
                className='col-lg-4 col-sm-6 col-12 items__item item-bg item-bg--grid download__items-item'
              >
                <div className='item-bg__bg download__items-border'></div>
                <i className='items__icon download__items-icon'>
                  <Image src={el.image} alt='' />
                </i>
                <div className='items__text download__items-text'>
                  <i className='download__items-icon'></i>
                  <h3 className='items__title h4 text-title download__items-title'>
                    {el.title}
                  </h3>
                  <div className='download__items-btn'>
                    <Link
                      href='/'
                      className='btn btn--primary btn--lg btn--w-max'
                    >
                      {el.btn}
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Download
