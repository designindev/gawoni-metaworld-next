import { RegisterForm } from 'features/session/register'
import { ResetPasswordForm } from 'features/session/reset-password'

const ResetPassword = () => {
  return (
    <>
      <div className='w-560'>
        <h2 className='h1 h1--fz-48 section__heading'>Password reset</h2>
        <div className='section__descr'>
          <p>Enter the email you used to create your account so we can send you a link for resetting your password</p>
        </div>
        <ResetPasswordForm />
      </div>
    </>
  )
}

export default ResetPassword
