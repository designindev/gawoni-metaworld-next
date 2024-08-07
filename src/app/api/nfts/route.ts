import { NextResponse } from 'next/server'
import { doc, getDocs, limit, query, setDoc } from 'firebase/firestore'
import { nftsRef } from './db'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const lim = Number(searchParams.get('limit') ?? 4)
  const data = await getDocs(query(nftsRef, limit(lim)))

  return NextResponse.json(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
}
