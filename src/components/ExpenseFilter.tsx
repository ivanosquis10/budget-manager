import { useControl } from '../hooks'
import type { CategoriesExpenses } from '../interfaces'

export const ExpenseFilter = () => {
  const { filter, filterExpensesByCategory } = useControl()
  return (
    <form className=''>
      <label htmlFor='filter' className='block mb-2 text-base font-medium text-white capitalize'>filter your expenses</label>
      <select value={filter} onChange={(e) => filterExpensesByCategory(e.target.value as CategoriesExpenses)} id='category' name='category' className='outline-none border  text-sm rounded-lg block w-full p-2.5 bg-shark-800 border-gray-600 placeholder-gray-400 text-white uppercase font-medium'>
        <option value='all'>all</option>
        <option value='savings'>savings</option>
        <option value='food'>food</option>
        <option value='house'>house</option>
        <option value='expenses'>other expenses</option>
        <option value='entertainment'>entertainment</option>
        <option value='health'>health</option>
        <option value='subscriptions'>subscriptions</option>
      </select>
    </form>
  )
}
