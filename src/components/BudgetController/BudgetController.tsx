
import { useBudget, useControl } from '../../hooks'
import { CardList, SumaryCard, DonutChartt, DrawerExpense } from '../'
import { Button } from '../ui/Button'

export const BudgetController = () => {
  const { handleModal, budget } = useControl()
  const { spent, available } = useBudget()

  return (
    <main className='my-2 overflow-hidden md:my-0'>

      <section className='px-4 mx-auto mt-4 md:container'>
        <div className='flex flex-col justify-between gap-2 sm:flex-row md:items-center md:gap-2'>
          <h1 className='text-3xl font-bold leading-none tracking-tight lg:text-4xl'>Overwiew</h1>

          <Button className='flex items-center gap-x-2' onClick={handleModal}>
            Add expense
            <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-plus' width='24' height='24' viewBox='0 0 24 24' stroke-width='1' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'>
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <path d='M12 5l0 14' />
              <path d='M5 12l14 0' />
            </svg>
          </Button>
        </div>

        <div className='grid grid-cols-1 gap-5 my-5 md:grid-cols-3'>
          <SumaryCard title='Budget' amount={budget.budget} icon='budget' />
          <SumaryCard title='Balance' amount={available} icon='wallet' />
          <SumaryCard title='Expenses' amount={spent} icon='expenses' />
        </div>

        <DrawerExpense />

      </section>

      <section className='grid grid-cols-1 gap-5 px-4 mx-auto mt-4 md:grid-cols-12 md:items-center md:container'>
        <div className='h-full md:col-span-4'>
          <DonutChartt />
        </div>
        <div className=' md:col-span-8 h-[50svh] md:h-[380px] bg-zinc-900 w-full rounded-xl md:overflow-y-scroll border border-zinc-800'>
          <CardList />
        </div>

      </section>
    </main>
  )
}
