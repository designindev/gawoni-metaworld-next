import { z } from 'zod'

export const loginFormSchema = z.object({
  email: z.string({ message: 'Email is required' }).min(2),
  password: z.string({ message: 'Password is required' }).min(8),
})

export type LoginFormSchema = z.infer<typeof loginFormSchema>

export const defaultValues: LoginFormSchema = {
  email: 'user1@gmail.com',
  password: '12345678',
}
