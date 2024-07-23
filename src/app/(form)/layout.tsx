import Image from 'next/image'
import FormImage from './form-img.png'
import Logo from 'shared/images/logo.png'
import { Footer, Header } from 'widgets'

export default function FormLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Header />
      <div className='header-height'></div>
      <main className='wrapper'>
        <section className='section s-form'>
          <div className='container'>
            <div className='row s-form__row'>
              <div className='col-md-6 col-12 s-form__left'>{children}</div>
              <div className='col-md-6 col-12 s-form__right'>
                <div className='logo logo--xl s-form__logo'>
                  <Image src={Logo} alt='Logo' priority />
                </div>
                <div className='s-form__image'>
                  <Image src={FormImage} alt='' priority />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
