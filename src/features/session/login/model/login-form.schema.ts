import { z } from 'zod'

export const loginFormSchema = z.object({
  emailOrLogin: z.string({ message: 'Email or login is required' }).min(2),
  password: z.string({ message: 'Password is required' }).min(8),
})

export type LoginFormSchema = z.infer<typeof loginFormSchema>
