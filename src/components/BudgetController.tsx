import { useControl } from '../hooks/useControl'
import { ExpenseDashboard, NewBudget } from '.'

export const BudgetController = () => {
  const { isValidBudget } = useControl()
  return (
    isValidBudget
      ? (
        <ExpenseDashboard />
      )
      : (
        <NewBudget />
      )
  )
}
