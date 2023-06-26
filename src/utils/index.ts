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
    year: 'numeric',
    month: 'short',
    day: '2-digit'
  }

  const lenguage = 'en-EN'

  return newDate.toLocaleDateString(lenguage, options)
}
