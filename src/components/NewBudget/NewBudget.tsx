import { useControl } from '../../hooks/useControl'
import type { NewBudgetInt } from '../../interfaces'

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
    <div className='flex flex-col items-center justify-center flex-1 h-screen px-6 py-12 lg:px-8'>
      <div className='flex flex-col items-center sm:mx-auto sm:w-full sm:max-w-sm'>
        <Logo />
        <h2 className='mt-5 text-2xl font-bold leading-9 tracking-tight text-center '>
          Enter your name and manage
        </h2>
      </div>

      <div className='w-full p-1 mt-10 sm:mx-auto sm:max-w-lg'>
        <form onSubmit={handleSubmit} className='space-y-6'>
          <div>
            <label htmlFor='name' className='block font-medium leading-6 capitalize '>
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
              <label htmlFor='budge' className='block font-medium leading-6 capitalize '>
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

const Logo = ({ w = 70, h = 70 }: { w?: number, h?: number }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={w}
      height={h}
      className='icon'
      viewBox='0 0 1024 1024'
    >
      <g id='SVGRepo_iconCarrier'>
        <path
          fill='#86efac'
          d='M32 512a480 480 0 10960 0 480 480 0 10-960 0z'
        />
        <path
          fill='#4ade80'
          d='M467.2 332.8l230.4-83.2 44.8 83.2zm-83.2 0l96-83.2 38.4 51.2-64 32z'
        />
        <path
          fill='#22c55e'
          d='M300.8 755.2c-25.6 0-51.2-25.6-51.2-51.2V384c0-25.6 25.6-51.2 51.2-51.2h428.8c25.6 0 51.2 25.6 51.2 51.2v313.6c0 25.6-25.6 51.2-51.2 51.2l-428.8 6.4z'
        />
        <path
          fill='#4ade80'
          d='M761.6 608H704c-25.6 0-51.2-19.2-51.2-51.2v-19.2c0-25.6 25.6-51.2 51.2-51.2h57.6c25.6 0 51.2 19.2 51.2 51.2v25.6c0 25.6-19.2 44.8-51.2 44.8z'
        />
      </g>
    </svg>
  )
}
