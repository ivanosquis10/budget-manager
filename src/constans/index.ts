import { Color } from '@tremor/react'

export const colors: Color[] =
    ['red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose']

interface SelectOptions {
    value: string
    label: string
    color: string
}

export const Categories: SelectOptions[] = [
    {
        value: 'savings',
        label: 'Savings',
        color: 'text-green-600'
    },
    {
        value: 'food',
        label: 'Food',
        color: 'text-rose-600'
    },
    {
        value: 'house',
        label: 'House',
        color: 'text-blue-500'
    },
    { value: 'expenses', label: 'Other expenses', color: 'text-emerald-400' },
    { value: 'entertainment', label: 'Entertainment', color: 'text-pink-400' },
    { value: 'health', label: 'Health', color: 'text-purple-400' },
    { value: 'subscriptions', label: 'Subscriptions', color: 'text-sky-400' }
]
