import { useControl } from '../../hooks'
import { formatDate, formatMoney } from '../../utils'

import { Table, TableBody, TableCell, TableRow } from '../ui/Table'
import { Button } from '../ui/Button'
import { TrashIcon } from '@radix-ui/react-icons'

export const ExpensesList = () => {
  const { expenses, deleteExpense } = useControl()

  return (
    <Table>
      <TableBody>
        {expenses.map((expense) => (
          <TableRow key={expense.id}>
            <TableCell className='font-medium border md:w-28'>{formatDate(expense.date)}</TableCell>
            <TableCell className='font-bold tracking-wide'>{expense.name}</TableCell>
            <TableCell className=''>{expense.category}</TableCell>
            <TableCell className='text-right'>{formatMoney(expense.amount)}</TableCell>
            <TableCell className='flex items-center justify-end gap-2'>
              <Button variant='outline' size='icon' onClick={() => deleteExpense(expense.id)}>
                <TrashIcon />
              </Button>
              <Button variant='outline' size='icon' onClick={() => deleteExpense(expense.id)}>
                <TrashIcon />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
