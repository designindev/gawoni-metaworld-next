import { z } from 'zod'

const envVariables = z.object({
  SITE_ENDPOINT: z.string().url(),
  API_ENDPOINT: z.string().url(),
})

const env = envVariables.parse({
  API_ENDPOINT: process.env.NEXT_PUBLIC_SITE_ENDPOINT,
  SITE_ENDPOINT: process.env.NEXT_PUBLIC_API_ENDPOINT,
})

export const config = {
  API_ENDPOINT: env.API_ENDPOINT,
  SITE_ENDPOINT: env.SITE_ENDPOINT,
  API_DELAY: 0,
} as const
