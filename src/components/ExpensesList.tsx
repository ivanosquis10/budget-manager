/* eslint-disable @typescript-eslint/indent */
import { useControl } from '../hooks'
// import { formatDate } from '../utils'

import { Expense } from '.'

export const ExpensesList = () => {
  const { expenses, filter, filterExpenses } = useControl()
  return (
    <div className='h-80 overflow-y-scroll space-y-2'>
      {filter !== 'all'
        ? (
          <>
            <h2 className='text-base font-medium text-white uppercase text-center'>
              {filterExpenses?.length === 0 && 'No expenses for this category'}
            </h2>
            {filterExpenses?.map((expense) => (
              <Expense key={expense.id} expense={expense} />
            ))}
          </>
        )
        : (
          <>
            <h2 className='text-base font-medium text-white uppercase text-center'>
              {expenses.length === 0 && 'No expenses yet'}
            </h2>
            {expenses.map((expense) => (
              <Expense key={expense.id} expense={expense} />
            ))}
          </>
        )}
    </div>
  )
}
