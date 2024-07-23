import { NewPasswordForm } from 'features/session/new-password'

const NewPassword = () => {
  return (
    <>
      <div className='w-560'>
        <h2 className='h1 h1--fz-48 section__heading'>reset password</h2>
        <div className='section__descr'>
          <p>Create a new password for your account</p>
        </div>
        <NewPasswordForm />
      </div>
    </>
  )
}

export default NewPassword
