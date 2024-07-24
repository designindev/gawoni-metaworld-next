import { RegisterForm } from 'features/session/register'

const Register = () => {
  return (
    <>
      <h2 className='h1 h1--fz-48 section__heading'>welcome!</h2>
      <div className='section__descr'>If you’re here for the first time, please create your account below</div>

      <RegisterForm />
    </>
  )
}

export default Register
