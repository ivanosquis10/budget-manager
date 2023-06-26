
import { useControl, useBudget } from '../hooks'
import { ExpenseFilter, Header, ProgressBar, AsideNavbar, MobileMenu, ExpensesList } from '.'
import { formatMoney } from '../utils'

export const ExpenseDashboard = () => {
  const { budget, menuOpen } = useControl()
  const { spent, available } = useBudget()
  return (
    <div className='h-screen w-full grid grid-cols-6'>
      <aside className='hidden bg-shark-950 px-2 py-5 lg:block lg:col-span-1'>
        <AsideNavbar />
      </aside>
      {menuOpen && <MobileMenu />}

      <section className='col-span-6 lg:col-span-5 bg-shark-900'>
        <Header />
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-2 p-5'>

          <div className='flex items-center gap-5 w-full lg:max-w-sm p-6 border-spacing-1 rounded-lg bg-shark-950 border-gray-700'>
            <img width={60} height={60} src='./budget.svg' alt='' />
            <div>
              <h5 className='mb-2 text-xl text-gray-400 tracking-wider font-normal'>Budget</h5>
              <p className='font-bold text-3xl text-white'>{formatMoney(budget.budget)}</p>
            </div>
          </div>

          <div className='flex items-center gap-5 w-full lg:max-w-sm p-6 border-spacing-1 rounded-lg bg-shark-950 border-gray-700'>
            <img width={60} height={60} src='./wallet.svg' alt='' />
            <div>
              <h5 className='mb-2 text-xl text-gray-400 tracking-wider font-normal'>Balance</h5>
              <p className='font-bold text-3xl text-white'>{formatMoney(available)}</p>
            </div>
          </div>

          <div className='flex items-center gap-5 w-full lg:max-w-sm p-6 border-spacing-1 rounded-lg bg-shark-950 border-gray-700'>
            <img width={60} height={60} src='./expenses.svg' alt='' />
            <div>
              <h5 className='mb-2 text-xl text-gray-400 tracking-wider font-normal'>Expense</h5>
              <p className='font-bold text-3xl text-white'>{formatMoney(spent)}</p>
            </div>
          </div>

        </div>

        <section className='grid grid-cols-1 lg:grid-cols-2 px-5'>
          <div className='p-1'>
            <h2 className='block mb-2 text-base font-medium text-white capitalize'>Your spending progress</h2>
            <ProgressBar />
          </div>
          <div className='space-y-3'>
            <ExpenseFilter />
            <ExpensesList />
          </div>
        </section>

      </section>
    </div>
  )
}
