import { useControl } from './hooks/useControl'
import { Header, NewBudget, BudgetController, Footer } from './components'

export const App = () => {
  const { isValidBudget } = useControl()
  return (
    <main>
      <Header />
      {isValidBudget ? <BudgetController /> : <NewBudget />}
      <Footer />
    </main>
  )
}
