import { useControl } from './hooks/useControl'
import { Header, NewBudget, BudgetController } from './components'

export const App = () => {
  const { isValidBudget } = useControl()
  return (
    <main>
      <Header />
      {isValidBudget ? <BudgetController /> : <NewBudget />}
    </main>
  )
}
