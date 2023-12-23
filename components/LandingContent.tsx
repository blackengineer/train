'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const testimonials = [
  {
    name: 'Dona',
    avatar: 'A',
    title: 'Runner',
    description: 'HTTF has helped me to run multiple marathons each year without getting injured.'
  }
]

const LandingContent = () => {
  return (
    <div className='px-10 pb-20'>
      <h2 className='text-center text-xl font-extrabold mb-10'>
        Testimonials
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {testimonials.map((item) => (
          <Card key={item.description}>
            <CardHeader>
              <CardTitle className='flex items-center gap-x-2'>
                <div>
                  <p className='text-xl'>
                    {item.name}
                  </p>
                  <p className='text-zinc-900 font-light text-sm'>
                    {item.title}
                  </p>
                </div>
              </CardTitle>
              <CardContent className='pt-4 px-0'>
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default LandingContent