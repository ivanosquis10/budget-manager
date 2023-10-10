/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { DrawerButtons } from '../'
import { Avatar, AvatarImage, AvatarFallback } from '../ui/Avatar'
import { Card } from '../ui/Card'
import { formatDate, colorCategory, formatMoney } from '../../utils'
import type { ExpensesType } from '../../interfaces'

type Props = {
  expense: ExpensesType
}

export const ExpenseCard = ({ expense }: Props) => {
  const { id, amount, category, name, date } = expense
  return (
    <Card key={id} className='flex items-center gap-2 p-2 md:p-1 md:flex-row my-blur bg-zinc-800/50'>
      <Avatar className='hidden h-9 w-9 md:block md:mr-3'>
        <AvatarImage className='text-red-500' src={`/categories/${category}.svg`} alt='Category logo' />
        <AvatarFallback>XD</AvatarFallback>
      </Avatar>
      <div className='flex items-center flex-1 gap-2 md:flex-row'>
        <div className='flex flex-col flex-1'>
          <p className='order-1 text-sm text-muted-foreground'>
            {formatDate(date)}
          </p>
          <p className='flex-1 text-base font-medium leading-none capitalize'>{name}</p>
        </div>
        <p className={`flex-1 capitalize ${colorCategory(category)} font-bold`}>
          {category}
        </p>
        <div className='flex-1 font-medium'>
          <p>-{formatMoney(amount)}</p>
        </div>
      </div>
      <div className='flex justify-end'>
        <DrawerButtons expense={expense} />
      </div>
    </Card>
  )
}
