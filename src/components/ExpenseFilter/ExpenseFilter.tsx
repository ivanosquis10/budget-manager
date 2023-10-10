import { SelectTrigger, SelectValue, SelectContent, SelectGroup, Select, SelectItem } from '../ui/Select'
import { Categories } from '../../constans'
import { useControl } from '../../hooks'
import type { CategoriesExpenses } from '../../interfaces'

export const ExpenseFilter = () => {
  const { filter, filterExpensesByCategory } = useControl()
  return (
    <Select defaultValue={filter} onValueChange={(data: CategoriesExpenses) => filterExpensesByCategory(data)}>
      <SelectTrigger className='w-full font-bold text-center' id='category' name='category'>
        <SelectValue placeholder='Filter by category' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem defaultValue='all' value='all'>All</SelectItem>
          {
            Categories.map(({ value, label }) => (
              <SelectItem key={value} value={value}>{label}</SelectItem>
            ))
          }
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
