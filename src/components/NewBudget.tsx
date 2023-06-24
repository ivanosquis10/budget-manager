import { useControl } from '../hooks/useControl'
import { NewBudgetInt } from '../interfaces'
import { Logo } from '.'

export const NewBudget = () => {
  const { addBudget } = useControl()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.target as HTMLFormElement
    const formData = new FormData(form)

    const name = formData.get('name') as string
    const budget = formData.get('budget')

    if ([name, budget].includes('')) {
      alert('All fields are required')
      return form.reset()
    }
    const newBudget: NewBudgetInt = {
      name,
      budget: Number(budget)
    }

    addBudget(newBudget)
  }

  return (
    <div className='h-screen flex flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-sm flex flex-col items-center'>
        <Logo />
        <h2 className='mt-5 text-center text-2xl font-bold leading-9 tracking-tight '>
          Enter your name and manage
        </h2>
      </div>

      <div className='mt-10 sm:mx-auto w-full sm:max-w-lg p-1'>
        <form onSubmit={handleSubmit} className='space-y-6'>
          <div>
            <label htmlFor='name' className='capitalize block font-medium leading-6 '>
              name
            </label>
            <div className='mt-2'>
              <input
                name='name'
                type='text'
                autoComplete='off'
                className='block w-full bg-zinc-800 px-2 rounded-md border-0 py-1.5  shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none'
              />
            </div>
          </div>

          <div>
            <div className='flex items-center justify-between'>
              <label htmlFor='budge' className='block capitalize font-medium leading-6 '>
                your budget
              </label>
            </div>
            <div className='mt-2'>
              <input
                name='budget'
                type='number'
                min={0}
                className='block w-full bg-zinc-800 px-2 rounded-md border-0 py-1.5  shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none'
              />
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='capitalize flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-700'
            >
              Add budget
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
