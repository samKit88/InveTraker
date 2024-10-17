// dispatchers.ts

import { TokenResponse } from '../../Schema/SigninSchema'
import { useAppDispatch } from '../store'

import { setAccessToken, setRefreshToken, setUser } from './authSlice'

export const dispatchUser = (
  data: TokenResponse,
  dispatch: ReturnType<typeof useAppDispatch>
) => {
  // console.log(data.user)
  dispatch(setUser(data.user))
  dispatch(setAccessToken(data.accessToken))
  dispatch(setRefreshToken(data.refreshToken))
}
