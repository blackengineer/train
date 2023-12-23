'use client'

import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'

interface SidebarItemProps {
  icon: LucideIcon
  label: string
  href: string
}

const SidebarItem = ({
  icon: Icon,
  label,
  href,
}: SidebarItemProps) => {
  const pathname = usePathname()
  const router = useRouter()

  const isActive = (pathname === '/' && href === '/') || pathname === href || pathname?.startsWith(`${href}/`)

  const onClick = () => {
    router.push(href)
  }

  return (
    <button
      onClick={onClick}
      className={cn(
        'flex items-center gap-x-2 text-zinc-600 text-sm pl-6 transition-all hover:bg-zinc-100 font-[500]',
        isActive && 'font-[600] text-zinc-700 bg-zinc-100'
      )}
    >
      <div className='flex items-center gap-x-2 py-4'>
        <Icon 
          size={22}
          className={cn(
            'text-zinc-600',
            isActive && 'font-[600] text-zinc-700'
          )}
        />
        {label}
      </div>
      <div 
         className={cn(
          'ml-auto opacity-0 border-2 border-zinc-700 h-full transition-all',
          isActive && 'opacity-100'
         )}
      />
    </button>
  )
}

export default SidebarItem