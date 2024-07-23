import { z } from 'zod'

export const newPasswordFormSchema = z.object({
  password: z.string().min(8),
  passwordConfirm: z.string().min(8),
})

export type NewPasswordFormSchema = z.infer<typeof newPasswordFormSchema>
