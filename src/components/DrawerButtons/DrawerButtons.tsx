import { useControl } from '../../hooks'
import { Button } from '../ui/Button'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem
} from '../ui/DropdownMenu'
import { DotsHorizontalIcon } from '@radix-ui/react-icons'
import type { ExpensesType } from '../../interfaces'

export const DrawerButtons = ({ expense }: { expense: ExpensesType }) => {
  const { deleteExpense, editExpense } = useControl()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='ghost'
          className='flex h-8 w-8 p-0 data-[state=open]:bg-muted'
        >
          <DotsHorizontalIcon className='w-4 h-4' />
          <span className='sr-only'>Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56' align='end'>
        <DropdownMenuLabel className='font-normal'>
          <p className='text-sm font-medium leading-none capitalize'>
            actions
          </p>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => editExpense(expense)}>Edit</DropdownMenuItem>
        <DropdownMenuItem onClick={() => deleteExpense(expense.id)}>Delete</DropdownMenuItem>

      </DropdownMenuContent>
    </DropdownMenu>
  )
}
