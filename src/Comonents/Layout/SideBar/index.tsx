import { Cards } from 'iconsax-react'
import cn from 'Utility/cn'
import Menu from './menu'

type SideBarProps = {
  open: boolean
  onToggleMenu: () => void
}

const SideBar = ({ open, onToggleMenu }: SideBarProps) => {
  return (
    <div className='md:w-64 h-full'>
      <div
        className={cn(
          'fixed h-full w-full bg-black z-40 duration-300',
          'md:hidden',
          open ? 'opacity-50' : 'opacity-0 invisible'
        )}
        onClick={onToggleMenu}
      />
      <div
        className={cn(
          'fixed duration-300 w-64 h-full z-50 border-r border-sky-100 bg-white',
          'md:translate-x-0 md:duration-0',
          !open && '-translate-x-64'
        )}
      >
        <div className='flex items-center gap-2 justify-center h-36 md:h-20 lg:h-24'>
          <Cards className='w-9 h-9 text-blue-900' />
          <h1 className='text-indigo-900 font-bold text-2xl'>BankDash.</h1>
        </div>
        <Menu onToggleMenu={onToggleMenu} />
      </div>
    </div>
  )
}

export default SideBar
