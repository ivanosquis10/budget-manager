import { Categories } from '../constans'

export const formatMoney = (cantidad: number | string) => {
  return cantidad.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  })
}

export const formatDate = (date?: number): string => {
  if (date === undefined) return ''

  const newDate = new Date(date)
  const options: Intl.DateTimeFormatOptions = {
    month: 'short',
    day: '2-digit'
  }

  const lenguage = 'en-EN'

  return newDate.toLocaleDateString(lenguage, options)
}

export const colorCategory = (category: string): string => {
    const categories = Categories.filter(({ value }) => value === category)
    const result = categories[0].color
    return result
}
