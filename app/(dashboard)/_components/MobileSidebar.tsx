import { Menu } from 'lucide-react'


import Sidebar from './Sidebar'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger className='lg:hidden pr-4 hover:opacity-75 transition'>
        <Menu />
      </SheetTrigger>
      <SheetContent side='left' className='p-0'>
        <Sidebar />
      </SheetContent>
    </Sheet>
    
  )
}

export default MobileSidebar