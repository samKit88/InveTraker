import axios, { AxiosError } from 'axios'
import { SigninForm, TokenResponse } from '../Schema/SigninSchema'
import { useMutation, UseMutationResult } from '@tanstack/react-query'

export const signInUser = async (data: SigninForm): Promise<TokenResponse> => {
  const response = await axios.post('http://localhost:3000/auth/signin', data)
  console.log(response.data)
  return response.data
}

export const SigninMutation = (
  onError?: (error: AxiosError | any) => void,
  onSuccess?: (data: any) => void
): UseMutationResult<TokenResponse, AxiosError, SigninForm> => {
  return useMutation({
    mutationFn: signInUser,
    onSuccess: onSuccess,
    onError: onError,
  })
}
