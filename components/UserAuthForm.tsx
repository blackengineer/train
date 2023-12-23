'use client'

import { cn } from '@/lib/utils'
import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { Icons } from '@/components/Icons'
import { Button } from '@/components/ui/Button'
import toast from 'react-hot-toast'

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const UserAuthForm = ({
  className,
  ...props
}: UserAuthFormProps) => {

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const loginWithGoogle = async () => {
    setIsLoading(true)

    try {
      await signIn('google')
    } catch (error) {
      toast.error('There was a problem logging in.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={cn(
      'flex justify-center',
      className
    )} {...props}>
      <Button
        isLoading={isLoading}
        type='button'
        size='sm'
        className='w-full'
        onClick={loginWithGoogle}
        disabled={isLoading}
      >
        {isLoading ? null : <Icons.google className='h-4 w-4 mr-2' />}
        Google
      </Button>
    </div>
  )
}

export default UserAuthForm