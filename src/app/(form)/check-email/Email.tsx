'use client'

import { useSearchParams } from 'next/navigation'

const Email = () => {
  const searchParams = useSearchParams()

  return <>We have sent an email with a password reset information to {searchParams.get('email')}</>
}

export default Email
