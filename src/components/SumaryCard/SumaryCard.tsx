/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card'
import { formatMoney } from '../../utils'

type Props = {
  title: string
  amount: number
  icon: string
}

export const SumaryCard = ({ title, amount, icon }: Props) => {
  return (
    <Card className='relative transition-all shadow bg-zinc-900 hover:ring-1 hover:ring-green-600'>
      <CardHeader className='flex flex-row items-center justify-between'>
        <CardTitle className='text-xl font-medium'>
          {title}
        </CardTitle>
        <div className='bg-zinc-800 rounded-full p-0.5 relative'>
          <div className='absolute rounded-full shadow blur shadow-green-600 h-9 w-9' />
          <img
            className='text-green-500'
            src={`/${icon}.svg`}
            alt={title}
            width={35}
            height={35}
          />
        </div>
      </CardHeader>
      <CardContent>
        <p className='text-2xl font-bold'>{formatMoney(amount)}</p>
      </CardContent>
    </Card>
  )
}
