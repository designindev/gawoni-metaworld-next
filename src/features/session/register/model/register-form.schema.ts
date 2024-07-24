import { z } from 'zod'

export const registerFormSchema = z
  .object({
    username: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(8),
    passwordConfirm: z.string().min(8),
    country: z
      .object({ value: z.string(), label: z.string() }, { message: 'Select a country' })
      .refine((value) => value.value !== '', { message: 'Select a country' })
      .transform((v) => v.value),
  })
  .refine(({ password, passwordConfirm }) => password === passwordConfirm, {
    message: 'Passwords must match',
    path: ['passwordConfirm'],
  })

export type RegisterFormSchema = z.infer<typeof registerFormSchema>
