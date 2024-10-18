import axios, { AxiosError } from 'axios'
import { TokenResponse } from '../Schema/SigninSchema'
import { useMutation, UseMutationResult } from '@tanstack/react-query'
import { SignupForm } from '../Schema/SignupSchema'

// interface SignupPayload  {
//   firsName: string
//   lastName: string
//   email: string
//   password: string
// }

export const signUpUser = async (data: SignupForm): Promise<TokenResponse> => {
  const response = await axios.post('http://localhost:3000/auth/signup', data)
  console.log(response.data)
  return response.data
}

export const SignUpMutation = (
  onError?: (error: AxiosError | any) => void,
  onSuccess?: (data: any) => void
): UseMutationResult<TokenResponse, AxiosError, SignupForm> => {
  return useMutation({
    mutationFn: signUpUser,
    onSuccess,
    onError,
  })
}
