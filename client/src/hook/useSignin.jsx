import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { json } from 'react-router-dom'
import { useSignup } from './useSignup'

export const useSgnin = () => {
  const [isLoding, setIsLoading] = useState()
  const [error, setError] = useState()
  const { dispatch } = useAuthContext()

  const signin = async (firstName, lastName, email, password) => {
    setIsLoading(true)
    setError(false)

    const response = await fetch('http://localhost:3000/auth/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ firstName, lastName, email, password }),
    })

    const json = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
    }

    if (response.ok) {
      localStorage.setItem('user', JSON.stringify(json))

      dispatch({ type: 'LOGIIN', payload: json })
    }
    setIsLoading(false)
  }

  return { signin, isLoding, error }
}
