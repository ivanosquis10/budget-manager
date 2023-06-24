import { useControl } from '../hooks'

export const ModalExpense = () => {
  const { handleCloseModal, addExpenses, isEdit } = useControl()

  // useEffect(() => {
  //   if (editingExpense != null) {
  //     if (Object.keys(editingExpense).length > 0) {
  //       const { name, amount, category } = editingExpense

  //       // Establecer los valores de los campos del formulario
  //       const nameInput = document.getElementById('name') as HTMLInputElement
  //       nameInput.setAttribute('value', name)

  //       const amountInput = document.getElementById('amount') as HTMLInputElement
  //       amountInput.setAttribute('value', amount)

  //       const categorySelect = document.getElementById('category') as HTMLSelectElement
  //       categorySelect.value = category
  //     }
  //   }
  // }, [editingExpense])

  // vamos a validar y obtener los datos del formulario
  const handleSubmitAdd = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    // const { id, date } = editingExpense!

    const form = event.target as HTMLFormElement
    const formData = new FormData(form)

    const name = formData.get('name') as string
    const amount = Number(formData.get('amount'))
    const categorySelect = form.elements.namedItem('category') as HTMLSelectElement
    const category = categorySelect.value

    if ([name, amount, category].includes('') || Number(amount) <= 0) {
      return alert('todos los campos son obligatorios')
    }

    addExpenses({ name, amount, category })
    setTimeout(() => {
      handleCloseModal()
      form.reset()
    }, 500)
  }

  return (
    <div className='flex items-center justify-center fixed z-50 top-0 left-0 w-full h-screen bg-slate-900/20 p-10 backdrop-blur'>
      <form onSubmit={handleSubmitAdd} className='overflow-hidden w-full md:w-1/2 bg-shark-950 shadow shadow-shark-500/50 p-5 rounded'>
        <h3 className='text-3xl font-bold mb-5 uppercase text-center'>{!isEdit ? 'Add an expense' : 'Edit an expense'} </h3>
        <div className='mb-6'>
          <label htmlFor='name' className='block mb-2 text-sm font-medium text-white capitalize'>name</label>
          <input type='text' id='name' name='name' className='outline-none border  text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white' placeholder='A netflix subscription' autoComplete='off' />
        </div>

        <div className='mb-6'>
          <label htmlFor='amount' className='block mb-2 text-sm font-medium text-white capitalize'>amount</label>
          <input type='number' id='amount' name='amount' min={0} className='outline-none border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white' placeholder='How much did you spend?' />
        </div>

        <div className='mb-6'>
          <label htmlFor='category' className='block mb-2 text-sm font-medium text-white capitalize'>category</label>
          <select id='category' className='outline-none border  text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white'>
            <option value='' disabled>-- Select --</option>
            <option value='savings'>savings</option>
            <option value='food'>food</option>
            <option value='house'>house</option>
            <option value='expenses'>other expenses</option>
            <option value='entertainment'>entertainment</option>
            <option value='health'>health</option>
            <option value='subscriptions'>subscriptions</option>
          </select>

        </div>
        <div className='flex items-center gap-2 justify-between'>
          <button type='submit' className='text-white font-medium rounded-lg text-base capitalize w-full px-5 py-2.5 text-center bg-zinc-900 hover:bg-zinc-950/50 duration-300 ease-in-out'>{!isEdit ? 'Add' : 'Edit'}</button>
          <button
            type='submit' className='text-white font-medium rounded-lg text-base capitalize w-full px-5 py-2.5 text-center bg-zinc-900 hover:bg-zinc-950/50 duration-300 ease-in-out'
            onClick={handleCloseModal}
          >close
          </button>
        </div>
      </form>
    </div>
  )
}
