export const Logo = ({ w = 70, h = 70 }: { w?: number, h?: number }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={w}
      height={h}
      className='icon'
      viewBox='0 0 1024 1024'
    >
      <g id='SVGRepo_iconCarrier'>
        <path
          fill='#86efac'
          d='M32 512a480 480 0 10960 0 480 480 0 10-960 0z'
        />
        <path
          fill='#4ade80'
          d='M467.2 332.8l230.4-83.2 44.8 83.2zm-83.2 0l96-83.2 38.4 51.2-64 32z'
        />
        <path
          fill='#22c55e'
          d='M300.8 755.2c-25.6 0-51.2-25.6-51.2-51.2V384c0-25.6 25.6-51.2 51.2-51.2h428.8c25.6 0 51.2 25.6 51.2 51.2v313.6c0 25.6-25.6 51.2-51.2 51.2l-428.8 6.4z'
        />
        <path
          fill='#4ade80'
          d='M761.6 608H704c-25.6 0-51.2-19.2-51.2-51.2v-19.2c0-25.6 25.6-51.2 51.2-51.2h57.6c25.6 0 51.2 19.2 51.2 51.2v25.6c0 25.6-19.2 44.8-51.2 44.8z'
        />
      </g>
    </svg>
  )
}

export const AddExpensesIcon = () => {
  return (
    <svg width='28px' height='28px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><g id='SVGRepo_bgCarrier' strokeWidth='0' /><g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round' /><g id='SVGRepo_iconCarrier'> <path d='M8 12H16' stroke='#ffffff' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' /> <path d='M12 16V8' stroke='#ffffff' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' /> <path d='M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z' stroke='#ffffff' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' /> </g></svg>
  )
}

export const AddGrid = () => {
  return (
    <svg width='24px' height='24px' strokeWidth='1.5' viewBox='0 0 24 24' fill='#ffffff' xmlns='http://www.w3.org/2000/svg' color='#ffffff'><path d='M13.992 17h3m3 0h-3m0 0v-3m0 3v3' stroke='#ffffff' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' /><path d='M4 9.4V4.6a.6.6 0 01.6-.6h4.8a.6.6 0 01.6.6v4.8a.6.6 0 01-.6.6H4.6a.6.6 0 01-.6-.6zM4 19.4v-4.8a.6.6 0 01.6-.6h4.8a.6.6 0 01.6.6v4.8a.6.6 0 01-.6.6H4.6a.6.6 0 01-.6-.6zM14 9.4V4.6a.6.6 0 01.6-.6h4.8a.6.6 0 01.6.6v4.8a.6.6 0 01-.6.6h-4.8a.6.6 0 01-.6-.6z' stroke='#ffffff' strokeWidth='1.5' /></svg>
  )
}

export const MenuIcon = () => {
  return (
    <svg width='25px' height='25px' strokeWidth='1.5' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' color='#ffffff'><path d='M3 5h18M3 12h18M3 19h18' stroke='#ffffff' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' /></svg>
  )
}

export const LogoutIcon = () => {
  return (
    <svg width='28px' height='28px' strokeWidth='1.5' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' color='#ffffff'><path d='M12 12h7m0 0l-3 3m3-3l-3-3M19 6V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2v-1' stroke='#ffffff' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' /></svg>
  )
}

export const MenuCloseIcon = () => {
  return (
    <>
      <svg aria-hidden='true' className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z' clipRule='evenodd' /></svg>
      <span className='sr-only'>Close menu</span>
    </>
  )
}
