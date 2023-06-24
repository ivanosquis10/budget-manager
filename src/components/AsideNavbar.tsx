import { AddGrid } from '.'
import { useControl } from '../hooks'

export const AsideNavbar = () => {
  const { handleOpenModal, linksNav } = useControl()
  return (
    <div className=''>
      <h2 className='text-center text-3xl font-medium'>Spend<span className='text-green-500 font-black'>Kool</span> </h2>

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
  )
}
