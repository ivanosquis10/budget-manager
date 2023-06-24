import { FC, ReactNode, useEffect, useState } from 'react'
import { ControlContext } from './ControlContext'
import { NewBudgetInt } from '../interfaces'

interface Props {
  children: ReactNode
}

export interface ExpensesType {
  id?: string
  name: string
  amount: number
  category: string
  date?: number
}

export type CategoriesExpenses = 'all' | 'savings' | 'food' | 'house' | 'expenses' | 'entertainment' | 'health' | 'subscriptions'
export interface LinksNavType {
  id: string
  name: string
  icon: string
}

const linksNav: LinksNavType[] = [
  {
    id: crypto.randomUUID(),
    name: 'Dashboard',
    icon: 'dashboard.svg'
  },
  {
    id: crypto.randomUUID(),
    name: 'Wallet',
    icon: 'wallet.svg'
  },
  {
    id: crypto.randomUUID(),
    name: 'Analytics',
    icon: 'analytics.svg'
  },
  {
    id: crypto.randomUUID(),
    name: 'Personal',
    icon: 'personal.svg'
  },
  {
    id: crypto.randomUUID(),
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
  const [isEdit, setIsEdit] = useState(false)
  const [modal, setModal] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const [editingExpense, setEditingExpense] = useState<ExpensesType | null>({
    id: '',
    name: '',
    amount: 0,
    category: '',
    date: 0
  })

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
    if (filter !== 'all') {
      const expensesFiltred = expenses.filter(
        expense => expense.category === filter
      )
      setFilterExpenses(expensesFiltred)
    }
  }, [filter])

  const addBudget = (newBudget: NewBudgetInt) => {
    setBudget(newBudget)
    setIsValidBudget(true)
  }

  const addExpenses = (expense: ExpensesType) => {
    // validamos si ya hay un valor en el array
    // if (expense.id !== '') {
    //   const updatedExpenses = expenses.map(exp => exp.id === expense.id ? expense : exp)
    //   setExpenses(updatedExpenses)
    //   return setEditingExpense({ id: '', name: '', amount: '', category: '', date: 0 })
    // }

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
    const updateExpenses = expenses.filter(expense => expense.id !== id)
    setExpenses(updateExpenses)
  }

  const filterExpensesByCategory = (category: CategoriesExpenses) => {
    setFilter(category)
  }

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
  }

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen)
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
      handleMenuToggle
    }}
    >
      {children}
    </ControlContext.Provider>
  )
}
