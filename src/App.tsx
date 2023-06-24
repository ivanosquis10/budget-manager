import { useControl } from './hooks'
import { ModalExpense } from './components'
import { BudgetController } from './components/BudgetController'

export const App = () => {
  const { modal } = useControl()
  return (
    <>
      <BudgetController />
      {modal && <ModalExpense />}
    </>
  )
}
