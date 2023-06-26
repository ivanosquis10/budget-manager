import { FC } from 'react'
import { useControl } from '../hooks'
import type { ExpensesType } from '../interfaces'

interface Props {
  expense: ExpensesType
}
export const Expense: FC<Props> = ({ expense }) => {
  const { deleteExpense, editExpense } = useControl()
  const { amount, category, name, id } = expense
  return (
    <div className='bg-shark-800 p-2 rounded flex items-center justify-between'>
      <div className='capitalize'>
        <h2 className='text-xl uppercase font-bold tracking-wider'>{name}</h2>
        <p className='text-gray-400 font-medium text-base'>amount: <span className='tracking-wide text-lg font-bold text-slate-200'>${amount}</span></p>
        <p className='text-gray-400 font-medium text-base'>category: <span className='tracking-wide text-lg font-bold text-slate-200'>{category}</span></p>
      </div>
      <div className='flex flex-col gap-2 [&>button]:px-3 [&>button]:py-1 [&>button]:uppercase [&>button]:font-bold [&>button]:rounded'>
        <button
          className='bg-green-700 duration-300 ease-in-out hover:bg-green-600'
          onClick={() => editExpense(expense)}
        >edit
        </button>
        <button className='bg-rose-700 duration-300 ease-in-out hover:bg-rose-600' onClick={() => deleteExpense(id)}>delete</button>
      </div>
    </div>
  )
}
