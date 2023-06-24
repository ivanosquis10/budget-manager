import { useState, useEffect } from 'react'
import { useBudget } from '../hooks'

const Ejemplo = () => {
  const { percent } = useBudget()
  const [strokeDasharray, setStrokeDasharray] = useState('0 100')
  const [prevPercent, setPrevPercent] = useState(percent)

  useEffect(() => {
    if (prevPercent > percent) {
      setStrokeDasharray(`${percent},100`)
      setTimeout(() => {
        setStrokeDasharray(`${percent},${100 - percent}`)
        setPrevPercent(percent)
      }, 100)
    } else {
      setStrokeDasharray(`${percent},100`)
      setPrevPercent(percent)
    }
  }, [percent])

  return (
    <div className='flex flex-row'>
      <div className='w-1/3 justify-around'>
        <svg viewBox='0 0 36 36' className='circular-chart text-green-500'>
          <path
            className='circle-bg stroke-current text-gray-300'
            d='M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831'
          />
          <path
            className='circle stroke-current transition-all duration-500'
            strokeDasharray={strokeDasharray}
            d='M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831'
          />
          <text x='18' y='20.35' className='percentage text-gray-600 text-xs'>{percent}%</text>
        </svg>
      </div>
    </div>
  )
}

export default Ejemplo
