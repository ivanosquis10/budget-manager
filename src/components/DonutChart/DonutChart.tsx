import { DonutChart } from '@tremor/react'
import { Card } from '../ui/Card'
import { useControl } from '../../hooks'
import { colors } from '../../constans'

export const DonutChartt = () => {
  const { filterExpenses } = useControl()

  const data = filterExpenses.map(expense => {
    return {
      name: expense.name,
      sales: expense.amount
    }
  })

  const valueFormatter = (number: number) => `$ ${Intl.NumberFormat('us').format(number).toString()}`
  return (
    <Card className='flex items-center justify-center w-full h-full rounded-xl bg-zinc-900'>
      <DonutChart
        variant='pie'
        className='h-80'
        data={data}
        category='sales'
        index='name'
        valueFormatter={valueFormatter}
        colors={colors}
        noDataText='No values for this category :('
      />

    </Card>
  )
}
