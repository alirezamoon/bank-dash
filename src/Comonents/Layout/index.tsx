import { useState } from 'react'
import Header from './Header'
import SideBar from './SideBar'

type LayoutProps = {
  children: JSX.Element
}

const Layout = ({ children }: LayoutProps) => {
  const [sideBarOpen, setSideBarOpen] = useState<boolean>(false)

  const handleToggleMenu = () => {
    setSideBarOpen((prev) => !prev)
  }

  return (
    <div className='h-full flex'>
      <SideBar open={sideBarOpen} onToggleMenu={handleToggleMenu} />
      <div className='grow flex flex-col max-w-full'>
        <Header onToggleMenu={handleToggleMenu} />
        <div className='grow bg-gray-100 px-6 md:px-10 pt-6 max-w-full'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout
