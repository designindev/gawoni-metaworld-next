import { getSession } from 'lib/actions/user.actions'
import { redirect } from 'next/navigation'
import { PATH_PAGE } from 'shared/lib'

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
