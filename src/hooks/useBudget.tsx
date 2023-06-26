import { useState, useEffect } from 'react'
import { useControl } from './'

export const useBudget = () => {
  const { budget, expenses } = useControl()
  const [percent, setPercent] = useState(0)
  const [available, setAvailable] = useState(0)
  const [spent, setSpent] = useState(0)

  // usaremos un reducer para llevar todo el calculo necesario
  useEffect(() => {
    const totalSpent = expenses.reduce((total, spent) => spent.amount + total, 0)

    const totalAvailable = budget.budget - totalSpent

    // calculo de la grafica
    const newPercent = (((budget.budget - totalAvailable) / budget.budget) * 100).toFixed(2)

    setAvailable(totalAvailable)
    setSpent(totalSpent)
    setPercent(Number(newPercent))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expenses])

  return {
    spent,
    available,
    percent
  }
}
