import { useState, useEffect } from 'react'
import { useControl } from '../../hooks'
import { Button } from '../ui/Button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '../ui/Drawer'
import { Input } from '../ui/Input'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/Select'
import { Categories } from '../../constans'

export const DrawerExpense = () => {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState('')

  const { modal, handleCloseModal, addExpenses, isEdit, editingExpense } = useControl()

  useEffect(() => {
    if (isEdit && editingExpense != null) {
      setName(editingExpense.name)
      setAmount(editingExpense.amount)
      setCategory(editingExpense.category)
    }
  }, [isEdit, editingExpense])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if ([name, amount, category].includes('')) return alert('all fields are required')
    if (amount <= 0) return alert('The amount must be greater than 0')
    if (category === '') return alert('Select a category')

    const newExpense = {
      name,
      amount,
      category
    }

    addExpenses(newExpense)
    return handleOpenChange()
  }

  const handleOpenChange = () => {
    setName('')
    setAmount(0)
    setCategory('')
    handleCloseModal()
  }

  return (
    <Sheet
      open={modal} onOpenChange={handleOpenChange}
    >
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            {isEdit ? 'Edit expense' : 'Add expense'}
          </SheetTitle>
          <SheetDescription>
            Add your expenses and keep track of your money
          </SheetDescription>
        </SheetHeader>
        <form onSubmit={handleSubmit} className='grid gap-4 py-4'>
          <div className='w-full max-w-sm items-center gap-1.5 space-y-1'>
            <label className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70' htmlFor='name'>Expense name</label>
            <Input
              type='text'
              id='name'
              name='name'
              className='bg-zinc-900/50'
              placeholder='Netflix, food, cinema...'
              autoComplete='off'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className='w-full max-w-sm items-center gap-1.5 space-y-1'>
            <label className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70' htmlFor='amount'>Expense amount</label>
            <Input
              type='number'
              id='amount'
              name='amount'
              className='bg-zinc-900/50'
              placeholder='how much did you spend?'
              autoComplete='off'
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
          </div>

          <div className='items-center w-full max-w-sm space-y-1'>
            <label className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70' htmlFor='category'>Category</label>
            <Select onValueChange={(data) => setCategory(data)} defaultValue={category}>
              <SelectTrigger className='w-full bg-zinc-900/50' id='category' name='category'>
                <SelectValue placeholder='Select a category' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {
                    Categories.map(({ value, label }) => (
                      <SelectItem key={value} value={value}>{label}</SelectItem>
                    ))
                  }
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <Button type='submit'>{isEdit ? 'Save changes' : 'Add expense'}</Button>
        </form>
      </SheetContent>
    </Sheet>
  )
}
