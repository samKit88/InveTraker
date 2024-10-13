import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

export const useAuthContext = () => {
  const context = useContext(AuthContext)

  if (!context) {
    return 'useAuthContext should be used inside an AuthContextProvider'
  }

  return context
}
