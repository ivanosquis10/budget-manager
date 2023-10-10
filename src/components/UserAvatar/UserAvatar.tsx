import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from '../ui/DropdownMenu'
import { Button } from '../ui/Button'
import { useControl } from '../../hooks'

export const UserAvatar = ({ name }: { name: string }): JSX.Element => {
  const { resetApp } = useControl()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' size='icon' className=' h-7 w-7 md:h-9 md:w-9'>
          <img
            src='https://api.dicebear.com/7.x/notionists-neutral/svg?seed=Felix'
            alt='user logo'
            className='w-full h-full rounded-full'
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56' align='end' forceMount>
        <DropdownMenuLabel className='font-normal'>
          <p className='text-sm font-medium leading-none capitalize'>
            {name}
          </p>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Button variant='ghost' onClick={() => resetApp()}>
            Log out
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

  )
}
