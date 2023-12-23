import Logo from '@/components/Logo'
import Link from 'next/link'
import UserAuthForm from '@/components/UserAuthForm'

const SignUp = () => {
  return (
    <div className='container flex w-full flex-col justify-center space-y-6 sm:w-[400px]'>
      <div className='flex flex-col space-y-6 text-center'>
        <div className='mx-auto mb-3'>
          <Link href={'/'}>
            <Logo />
          </Link>
        </div>
        <h1 className='text-xl font-semibold tracking-tight'>
          Sign Up
        </h1>
        <p className='text-xs max-w-xs mx-auto'>
          By continuing, you are setting up a Fitoku account and agree to our User Agreement and Privacy Policy.
        </p>

        {/* sign up form */}
        <UserAuthForm />

        <p className='px-8 text-center text-xs text-zinc-700'>
          Already a member?{' '}
          <Link
            href='/sign-in'
            className='hover:text-zinc-800 text-xs underline underline-offset-4'
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignUp