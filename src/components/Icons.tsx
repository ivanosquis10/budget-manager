export const Logo = ({ w = 60, h = 60 }: { w?: number, h?: number }) => {
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

export const NotificacionIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg' width='25'
      height='25' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor'
    >
      <path strokeLinecap='round' strokeLinejoin='round' d='M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0' />
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

export const Dashboard = () => {
  return (
    <svg width='24px' height='24px' strokeWidth='1.5' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' color='#ffffff'><path d='M14 20.4v-5.8a.6.6 0 01.6-.6h5.8a.6.6 0 01.6.6v5.8a.6.6 0 01-.6.6h-5.8a.6.6 0 01-.6-.6zM3 20.4v-5.8a.6.6 0 01.6-.6h5.8a.6.6 0 01.6.6v5.8a.6.6 0 01-.6.6H3.6a.6.6 0 01-.6-.6zM14 9.4V3.6a.6.6 0 01.6-.6h5.8a.6.6 0 01.6.6v5.8a.6.6 0 01-.6.6h-5.8a.6.6 0 01-.6-.6zM3 9.4V3.6a.6.6 0 01.6-.6h5.8a.6.6 0 01.6.6v5.8a.6.6 0 01-.6.6H3.6a.6.6 0 01-.6-.6z' stroke='#ffffff' strokeWidth='1.5' /></svg>
  )
}

export const Wallet = () => {
  return (
    <svg width='24px' strokeWidth='1.5' height='24px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' color='#ffffff'><path d='M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2z' stroke='#ffffff' strokeWidth='1.5' /><path d='M3 15h6.4c.331 0 .605.278.75.576.206.423.694.924 1.85.924 1.156 0 1.644-.5 1.85-.924.145-.298.419-.576.75-.576H21M3 7h18M3 11h18' stroke='#ffffff' strokeWidth='1.5' /></svg>
  )
}

export const Analytics = () => {
  return (
    <svg width='24px' height='24px' strokeWidth='1.5' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' color='#ffffff'><path d='M15 19H9V8.6a.6.6 0 01.6-.6h4.8a.6.6 0 01.6.6V19zM15 5H9M20.4 19H15v-3.9a.6.6 0 01.6-.6h4.8a.6.6 0 01.6.6v3.3a.6.6 0 01-.6.6zM9 19v-5.9a.6.6 0 00-.6-.6H3.6a.6.6 0 00-.6.6v5.3a.6.6 0 00.6.6H9z' stroke='#ffffff' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' /></svg>
  )
}

export const Personal = () => {
  return (
    <svg width='24px' height='24px' strokeWidth='1.5' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' color='#ffffff'><path d='M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z' stroke='#ffffff' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' /><path d='M4.271 18.346S6.5 15.5 12 15.5s7.73 2.846 7.73 2.846M12 12a3 3 0 100-6 3 3 0 000 6z' stroke='#ffffff' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' /></svg>
  )
}

export const Settings = () => {
  return (
    <svg width='24px' height='24px' strokeWidth='1.5' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' color='#ffffff'><path d='M12 15a3 3 0 100-6 3 3 0 000 6z' stroke='#ffffff' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' /><path d='M19.622 10.395l-1.097-2.65L20 6l-2-2-1.735 1.483-2.707-1.113L12.935 2h-1.954l-.632 2.401-2.645 1.115L6 4 4 6l1.453 1.789-1.08 2.657L2 11v2l2.401.655L5.516 16.3 4 18l2 2 1.791-1.46 2.606 1.072L11 22h2l.604-2.387 2.651-1.098C16.697 18.831 18 20 18 20l2-2-1.484-1.75 1.098-2.652 2.386-.62V11l-2.378-.605z' stroke='#ffffff' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' /></svg>
  )
}

export const MenuIcon = () => {
  return (
    <svg width='25px' height='25px' stroke-width='1.5' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' color='#ffffff'><path d='M3 5h18M3 12h18M3 19h18' stroke='#ffffff' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' /></svg>
  )
}
