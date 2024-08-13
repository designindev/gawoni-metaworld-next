'use server'

import { cookies } from 'next/headers'
import { JWTPayload, jwtVerify, SignJWT } from 'jose'
import { NextRequest, NextResponse } from 'next/server'

const secretKey = 'secret'
const key = new TextEncoder().encode(secretKey)

type User = {
  email: string
}

export type Payload = {
  user: User
  expires: Date
}

export async function encrypt(payload: Payload) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('10 sec from now')
    .sign(key)
}

export async function decrypt(input: string): Promise<Payload & JWTPayload> {
  const { payload } = await jwtVerify<Payload>(input, key, {
    algorithms: ['HS256'],
  })
  return payload
}

export const login = async (user: signInProps) => {
  try {
    // Create the session
    const expires = new Date(Date.now() + 10 * 1000)
    const session = await encrypt({ user, expires })

    // Save the session in a cookie
    cookies().set('game-session', session, { expires, path: '/', httpOnly: true, sameSite: 'strict', secure: true })

    return { userId: 1 }
  } catch (error) {
    console.error('Error', error)
  }
}

export async function logout() {
  cookies().set('game-session', '', { expires: new Date(0) })
}

export async function getSession() {
  const session = cookies().get('game-session')?.value
  if (!session) return null
  return await decrypt(session)
}

export async function updateSession(request: NextRequest) {
  const session = request.cookies.get('game-session')?.value
  if (!session) return

  // Refresh the session so it doesn't expire
  const parsed = await decrypt(session)
  parsed.expires = new Date(Date.now() + 10 * 1000)
  const res = NextResponse.next()

  res.cookies.set({
    name: 'game-session',
    value: await encrypt(parsed),
    httpOnly: true,
    expires: parsed.expires,
  })
  return res
}
