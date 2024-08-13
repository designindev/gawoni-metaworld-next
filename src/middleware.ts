import { updateSession } from 'lib/actions/user.actions'
import { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  return await updateSession(request)
}
