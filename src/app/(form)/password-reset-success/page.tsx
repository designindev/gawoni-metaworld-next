import { PATH_PAGE } from 'shared/lib'
import { Button } from 'shared/ui'

const PasswordResetSuccess = () => {
  return (
    <>
      <div className='password-reset-success text-center'>
        <h2 className='h1 h1--fz-48 section__heading'>Password reset successfully!</h2>
        <Button href={PATH_PAGE.login} lgWidth>
          Log In
        </Button>
      </div>
    </>
  )
}

export default PasswordResetSuccess
