import { z } from 'zod'
import { country } from './country'

export const registerFormSchema = z
  .object({
    username: z.string({ message: 'Enter username' }).min(2),
    email: z.string({ message: 'Enter email' }).email(),
    password: z.string({ message: 'Enter password' }).min(8),
    passwordConfirm: z.string({ message: 'Confirm password' }).min(8),
    country: z.string().min(1, { message: 'Select a country' }),
    age: z
      .string()
      .min(1, { message: 'Enter age' })
      .refine((data) => Number(data) >= 18, { message: 'Age must be over 18' }),
  })
  .refine(({ password, passwordConfirm }) => password === passwordConfirm, {
    message: 'Passwords must match',
    path: ['passwordConfirm'],
  })

export type RegisterFormSchema = z.infer<typeof registerFormSchema>

export const defaultValues = {
  username: 'username',
  email: 'login@gmail.com',
  password: '12345678',
  passwordConfirm: '12345678',
  country: country[0].value,
  age: '18',
}
