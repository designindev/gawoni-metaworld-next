import { getSession } from 'lib/actions/user.actions'
import { redirect } from 'next/navigation'
import { PATH_PAGE } from 'shared/lib'

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await getSession()

  if (!session) redirect(PATH_PAGE.login)

  return <>{children}</>
}
