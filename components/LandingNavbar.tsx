'use client'

import { Montserrat } from 'next/font/google'
import Link from 'next/link'
import { Button } from './ui/button'
import Logo from '@/components/Logo'
import { cn } from '@/lib/utils'

const font = Montserrat ({
  weight: '600',
  subsets: ['latin']
})

const LandingNavbar = () => {
  return (
    <nav className="p-4 bg-transparent flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <Logo />
      </Link>
      <div className="flex items-center gap-x-2">
        <Link href={'/'}>
          <Button>
            Sign in
          </Button>
        </Link>
      </div>
    </nav>
  )
}

export default LandingNavbar