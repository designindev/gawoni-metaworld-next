import { z } from 'zod'

export const resetPasswordFormSchema = z.object({
  email: z.string().email(),
})

export type ResetPasswordformSchema = z.infer<typeof resetPasswordFormSchema>

export const defaultValues = { email: 'user@gmail.com' }
