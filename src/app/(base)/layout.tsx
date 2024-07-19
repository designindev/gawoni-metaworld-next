import { Footer, Header } from 'widgets'

export default function BaseLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Header />
      <div className='header-height'></div>
      <main className='main'>{children}</main>
      <Footer />
    </>
  )
}
