import Image from 'next/image'
import FormImage from 'shared/images/bg/form-img.png'
import Logo from 'shared/images/logo.png'

export default function FormLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <section className='section s-form'>
        <div className='container'>
          <div className='row s-form__row'>
            <div className='col-md-6 col-12 s-form__left text-center'>{children}</div>
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
    </>
  )
}
