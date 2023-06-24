import { useControl } from '../hooks'
import { AddGrid } from '.'
import { useState, useEffect } from 'react'

export const Drawer = () => {
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

      <div id='drawer-example' className={`w-full fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} bg-gray-800/50 backdrop-blur-2xl`} tabIndex={-1} aria-labelledby='drawer-label'>

        <div className=''>
          <h2 className='text-center text-3xl font-medium'>Spend<span className='text-green-500 font-black'>Kool</span> </h2>
          <button type='button' onClick={handleMenuToggle} className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'>
            <svg aria-hidden='true' className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z' clip-rule='evenodd' /></svg>
            <span className='sr-only'>Close menu</span>
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
