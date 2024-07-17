import { NextResponse } from 'next/server'
import { nfts } from './items'

export async function GET(request: Request) {
  return NextResponse.json(nfts)
}
