import { useControl } from '../../hooks'
import { ExpenseFilter } from '../ExpenseFilter/ExpenseFilter'
import { ExpenseCard } from '../ExpenseCard/ExpenseCard'

export const CardList = () => {
  const { filterExpenses } = useControl()

  return (
    <section className='relative flex flex-col w-full h-full gap-2 p-1'>
      <ExpenseFilter />
      {filterExpenses.length === 0 && <p className='text-lg font-medium leading-none text-center opacity-70'>No expenses for this category</p>}

      {filterExpenses.map((item) => (
        <ExpenseCard key={item.id} expense={item} />
      ))}
    </section>
  )
}
