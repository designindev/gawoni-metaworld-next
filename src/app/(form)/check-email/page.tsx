import { PATH_PAGE } from 'shared/lib'
import { Button } from 'shared/ui'
import Email from './Email'
import { Suspense } from 'react'

const CheckEmail = () => {
  return (
    <>
      <div className='w-560'>
        <h2 className='h1 h1--fz-48 section__heading'>Check your email</h2>
        <div className='section__descr'>
          <p>
            <Suspense fallback={<></>}>
              <Email />
            </Suspense>
          </p>
        </div>
        <div className='form'>
          <div className='form__buttons'>
            <Button href={PATH_PAGE.resetPassword} lgWidth>
              Resend email
            </Button>
            <Button href={PATH_PAGE.login} color={'light'} lgWidth border>
              Back to log in
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CheckEmail
