import { useControl } from '../hooks'
import { AddGrid, MenuCloseIcon } from '.'
import { useState, useEffect } from 'react'

export const MobileMenu = () => {
  const { menuOpen, handleMenuToggle, handleOpenModal, linksNav } = useControl()
  const [isLargeScreen, setIsLargeScreen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) handleMenuToggle()
      setIsLargeScreen(window.innerWidth >= 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [handleMenuToggle])

  useEffect(() => {
    if (isLargeScreen && menuOpen) {
      handleMenuToggle()
    }
  }, [isLargeScreen, menuOpen, handleMenuToggle])
  return (
    <>
      <div id='mobile-menu' className={`w-full fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} bg-gray-800/50 backdrop-blur-2xl`} tabIndex={-1} aria-labelledby='mobile-menu-label'>
        <div>
          <h2 className='text-center text-3xl font-medium'>Spend<span className='text-green-500 font-black'>Kool</span> </h2>
          <button type='button' onClick={handleMenuToggle} className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'>
            <MenuCloseIcon />
          </button>

          <nav className='mt-10 flex flex-col gap-5'>
            <button onClick={handleOpenModal} className='hover:bg-green-400/50 duration-300 px-1 ease-in-out text-start py-2 font-thin rounded capitalize tracking-wider text-xl flex items-center gap-2'>
              <AddGrid />
              Add Expenses
            </button>
            <ul className='flex flex-col gap-5'>
              {
                linksNav.map(link => (
                  <li key={link.id} className='hover:bg-green-400/50 duration-300 px-1 ease-in-out text-start py-2 font-thin rounded capitalize tracking-wider text-xl flex items-center gap-2'>
                    <img src={`/navIcons/${link.icon}`} alt={`Icon of ${link.name}`} width={24} height={24} />
                    <a href='#'> {link.name}</a>
                  </li>
                ))
              }
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}
