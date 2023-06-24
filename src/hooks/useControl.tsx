import { useContext } from 'react'
import { ControlContext } from '../context'

export const useControl = () => useContext(ControlContext)
