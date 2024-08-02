import type { AuthOptions, User } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { users } from 'data/users'

export const authConfig: AuthOptions = {
  providers: [
    Credentials({
      credentials: {
        emailOrLogin: { label: 'Email or login', type: 'text', required: true },
        password: { label: 'Password', type: 'password', required: true },
      },
      authorize(credentials, req) {
        if (!credentials || !credentials.emailOrLogin || !credentials.password) return null

        const currentUser = users.find((user) => user.userOrLogin === credentials.emailOrLogin)

        if (currentUser && currentUser.password === credentials.password) {
          const { password, ...userWithoutPass } = currentUser

          return userWithoutPass as User
        }

        return null
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
}
