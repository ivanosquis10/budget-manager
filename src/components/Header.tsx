
import { LogoutIcon, MenuIcon } from '.'
import { useControl } from '../hooks'
export const Header = () => {
  const { budget, handleMenuToggle, resetApp } = useControl()
  return (
    <header className='bg-shark-950 px-5 lg:px-2 flex items-center justify-between h-20'>
      <div className='flex items-center gap-1'>
        <button onClick={handleMenuToggle} className='block lg:hidden rounded'>
          <MenuIcon />
        </button>
        <h2 className='text-lg lg:text-2xl font-semibold lg:flex-1'>Dashboard</h2>
      </div>
      <nav className='flex justify-end items-center gap-x-2 lg:flex-1 py-1 px-2'>
        <h4 className='text-base lg:text-xl capitalize'>hi, <span className='font-bold text-green-500'>{budget.name}</span></h4>
        <img src={`https://api.dicebear.com/6.x/pixel-art/svg?seed=${budget.name}`} className='p-1 rounded-full ring-2 ring-green-800' width={40} height={40} alt='image of a random user' />

        <button onClick={resetApp} type='button' title='button to reset app' className='py-2 px-1 rounded hover:bg-shark-800 duration-300 ease-in-out' tabIndex={0} aria-label='Resetear la aplicación'>
          <LogoutIcon aria-label='Logout' />
        </button>

      </nav>
    </header>
  )
}
