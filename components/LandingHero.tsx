'use client'

import Link from 'next/link'
import TypewriterComponent from 'typewriter-effect'
import { Button } from '@/components/ui/Button'

const LandingHero = () => {
  return (
    <div className='font-bold py-36 text-center space-y-5'>
      <div className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold'>
        <h1>
          how to train for
        </h1>
        <div className='text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600'>
          <TypewriterComponent 
            options={{
              strings: [
                '5k',
                'basketball',
                '10k',
                'baseball',
                'half-marathon',
                'football',
                'marathon',
                'HYROX',
                'soccer',
                'pickleball',
              ],
              autoStart: true,
              loop: true
            }}
          />
        </div>
      </div>
      <div className='text-sm md:text-base font-light text-zinc-900'>
        Compete with confidence.
      </div>
      <div>
        <Link
          href={'/sign-up'}
        >
          <Button variant='premium'>
            Start training
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default LandingHero