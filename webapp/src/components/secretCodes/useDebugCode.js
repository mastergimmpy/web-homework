import { useInputEvent } from './useInputEvent'
import { useEffect, useState } from 'react'

const debugCode = [
  'ArrowUp',
  'KeyC',
  'ArrowDown',
  'KeyC',
  'ArrowLeft',
  'KeyC',
  'ArrowRight',
  'KeyC',
  'KeyA',
  'Enter'
]

export const useDebugCode = () => {
  const [count, setCount] = useState(0)
  const [success, setSuccess] = useState(false)
  const key = useInputEvent()

  useEffect(() => {
    if (key === null) {
      return
    }
    if (key !== debugCode[count]) {
      setCount(0)
      return
    }
    setCount((state) => state + 1)
    if (count + 1 === debugCode.length) {
      setSuccess(true)
    }
  }, [key])

  return success
}
