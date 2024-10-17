import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface User {
  // firstName: string
  // lastName: string
  email: string
}

export interface AuthState {
  user?: User | null
  accessToken?: string | null
  refreshToken?: string | null
}

const initialState: AuthState = {
  user: null,
  accessToken: null,
  refreshToken: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      // console.log(state, action.payload)
      state.user = action.payload
    },
    setAccessToken: (state, action: PayloadAction<string>) => {
      // console.log(state, action.payload)

      state.accessToken = action.payload
    },
    setRefreshToken: (state, action: PayloadAction<string>) => {
      // console.log(state, action.payload)

      state.refreshToken = action.payload
    },

    logout: (state) => {
      state.user = null
      state.accessToken = undefined
      state.refreshToken = undefined
    },
  },
})

export const { setUser, setAccessToken, setRefreshToken, logout } =
  authSlice.actions

export default authSlice.reducer
