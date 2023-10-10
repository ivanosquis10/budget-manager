export interface NewBudgetInt {
  name: string
  budget: number
}

export type CategoriesExpenses = 'all' | 'savings' | 'food' | 'house' | 'expenses' | 'entertainment' | 'health' | 'subscriptions'

export interface LinksNavType {
  id: string | number
  name: string
  icon: string
}

export interface ExpensesType {
  id?: string
  name: string
  amount: number
  category: string
  date?: number
}
