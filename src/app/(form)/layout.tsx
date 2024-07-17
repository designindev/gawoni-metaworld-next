import Image from 'next/image'
import FormImage from './form-img.png'
import Link from 'next/link'
import Logo from 'shared/images/logo.png'
import { Footer } from 'widgets'

export default function FormLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <main>
        <section className='section s-form'>
          <div className='row'>
            <div className='col-lg-5 col-12'>{children}</div>
            <div className='col-lg-5 col-12 ml-auto'>
              <Link href='/' className='logo logo--lg s-form__logo'>
                <Image src={Logo} alt='Logo' priority />
              </Link>
              <Image src={FormImage} alt='' priority />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
