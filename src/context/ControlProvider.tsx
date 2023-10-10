import { FC, ReactNode, useCallback, useEffect, useState } from 'react'
import { ControlContext } from './ControlContext'
import type { NewBudgetInt, ExpensesType, LinksNavType, CategoriesExpenses } from '../interfaces'

interface Props {
  children: ReactNode
}

const linksNav: LinksNavType[] = [
  {
    id: 1,
    name: 'Dashboard',
    icon: 'dashboard.svg'
  },
  {
    id: 2,
    name: 'Wallet',
    icon: 'wallet.svg'
  },
  {
    id: 3,
    name: 'Analytics',
    icon: 'analytics.svg'
  },
  {
    id: 4,
    name: 'Personal',
    icon: 'personal.svg'
  },
  {
    id: 5,
    name: 'Settings',
    icon: 'settings.svg'
  }
]

export const ControlProvider: FC<Props> = ({ children }) => {
  const [budget, setBudget] = useState<NewBudgetInt>(
    JSON.parse(localStorage.getItem('budget') ?? '{}')
  )
  const [expenses, setExpenses] = useState<ExpensesType[]>(
    JSON.parse(localStorage.getItem('expenses') ?? '[]')
  )

  const [filter, setFilter] = useState<CategoriesExpenses>('all')
  const [filterExpenses, setFilterExpenses] = useState<ExpensesType[]>([])

  const [isValidBudget, setIsValidBudget] = useState(false)
  const [modal, setModal] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const [isEdit, setIsEdit] = useState(false)
  const [editingExpense, setEditingExpense] = useState<ExpensesType>(
    {
      id: '',
      name: '',
      amount: 0,
      category: '',
      date: 0
    }
  )

  // encarcado de ver si hay algo en el objeti de editar para abrir el modal
  useEffect(() => {
    if (![editingExpense?.name].includes('')) {
      setModal(true)
      setIsEdit(true)
    }
  }, [editingExpense])

  // encargada de meter el budget en el LS
  useEffect(() => {
    localStorage.setItem('budget', JSON.stringify(budget))
  }, [budget])

  // encargada de mter los expenses en el LS
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses))
  })

  // encargada de ver si hay un amount en el budget y asi carga la pantalla del dashboard
  useEffect(() => {
    const budgetLS: NewBudgetInt = JSON.parse(localStorage.getItem('budget') ?? '{}')
    if (budgetLS.budget > 0) {
      setIsValidBudget(true)
    }
  }, [])

  // encargada de filtrar por categoria
  useEffect(() => {
    if (filter === 'all') {
      setFilterExpenses(expenses)
    } else {
      const filteredExpenses = expenses.filter(
        expense => expense.category === filter
      )
      setFilterExpenses(filteredExpenses)
    }
  }, [filter, expenses])

  const addBudget = (newBudget: NewBudgetInt) => {
    setBudget(newBudget)
    setIsValidBudget(true)
  }

  const addExpenses = (expense: ExpensesType) => {
    // validamos si ya hay un valor en el array
    if (isEdit) {
      const updatedExpenses = expenses.map(existingExp => {
        if (existingExp.id === editingExpense?.id) {
          return {
            ...existingExp, ...expense
          }
        }
        return existingExp
      })
      setExpenses(updatedExpenses)
      return setIsEdit(false)
    }

    const newExpense: ExpensesType = {
      id: crypto.randomUUID(),
      date: Date.now(),
      ...expense
    }

    setExpenses(prevExpenses => [...prevExpenses, newExpense])
  }

  const editExpense = (expense: ExpensesType) => {
    setEditingExpense(expense)
  }

  const deleteExpense = (id?: string) => {
    const areYouSure = confirm('Are you sure you want to delete this expense?')
    if (!areYouSure) {
      return
    }

    const updateExpenses = expenses.filter(expense => expense.id !== id)
    setExpenses(updateExpenses)
  }

  const filterExpensesByCategory = useCallback((category: CategoriesExpenses) => {
    setFilter(category)
  }, [])

  const handleCloseModal = () => {
    setModal(false)
    setIsEdit(false)
    setEditingExpense({
      id: '',
      name: '',
      amount: 0,
      category: '',
      date: 0
    })
  }

  const handleOpenModal = () => {
    setModal(true)
    setMenuOpen(false)
  }

  const handleModal = () => {
    setModal(!modal)
  }

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen)
    setIsEdit(false)
    setEditingExpense({
      id: '',
      name: '',
      amount: 0,
      category: '',
      date: 0
    })
  }

  const resetApp = () => {
    const areYouSure = confirm('Are you sure you want to restart everything?')
    if (areYouSure) {
      setBudget({ name: '', budget: 0 })
      setExpenses([])
      setIsValidBudget(false)
    }
  }

  return (
    <ControlContext.Provider value={{
      // properties
      budget,
      isValidBudget,
      modal,
      expenses,
      editingExpense,
      isEdit,
      filter,
      filterExpenses,
      menuOpen,
      linksNav,

      // methods
      addBudget,
      addExpenses,
      handleCloseModal,
      handleOpenModal,
      deleteExpense,
      editExpense,
      filterExpensesByCategory,
      handleMenuToggle,
      resetApp,
      handleModal
    }}
    >
      {children}
    </ControlContext.Provider>
  )
}
