import { NextResponse } from 'next/server'
import { nfts } from './items'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)

  const page = Number(searchParams.get('page')) - 1

  return NextResponse.json(nfts.slice(page * 4, page * 4 + 4))
}
