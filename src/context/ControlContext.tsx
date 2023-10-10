import { createContext } from 'react'
import type { CategoriesExpenses, ExpensesType, LinksNavType, NewBudgetInt } from '../interfaces'

interface BudgetContextProps {
  budget: NewBudgetInt
  isValidBudget: boolean
  modal: boolean
  expenses: ExpensesType[]
  editingExpense?: ExpensesType | null
  isEdit: boolean
  filter: CategoriesExpenses
  filterExpenses: ExpensesType[]
  menuOpen: boolean
  linksNav: LinksNavType[]

  // methods
  addBudget: (newBudget: NewBudgetInt) => void
  addExpenses: (expense: ExpensesType) => void
  editExpense: (expense: ExpensesType) => void
  deleteExpense: (id?: string) => void
  handleCloseModal: () => void
  handleOpenModal: () => void
  filterExpensesByCategory: (category: CategoriesExpenses) => void
  handleMenuToggle: () => void
  resetApp: () => void
  handleModal: () => void
}

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export const ControlContext = createContext({} as BudgetContextProps)
