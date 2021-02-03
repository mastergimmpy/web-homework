import { useState } from 'react'

export const togglePlay = () => {
  const [isActive, setActive] = useState(false)

  useState(() => {
    setActive(!isActive)
  })
  return isActive
}
