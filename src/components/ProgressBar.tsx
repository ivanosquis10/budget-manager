import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import { useBudget } from '../hooks'

export const ProgressBar = () => {
  const { percent } = useBudget()
  return (
    <div className='relative'>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden bg-slate-800/50 rounded px-1 backdrop-blur'>
        <p className={`capitalize font-bold text-3xl tracking-wide ${percent > 100 ? 'text-red-500/80' : 'text-green-500'}`}>{percent}% expended</p>
      </div>
      <CircularProgressbar
        value={percent}
        className='w-8/12 mx-auto'
        strokeWidth={4}
        background
        backgroundPadding={3}
        styles={buildStyles({
          pathColor: percent > 100 ? '#ef4444' : '#22c55e',
          trailColor: percent > 100 ? '#DC2626' : '#27272a',
          backgroundColor: '#18181b'

        })}
      />
    </div>

  )
}
