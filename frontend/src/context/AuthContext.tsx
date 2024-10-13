import React, { createContext, ReactNode, useReducer } from 'react'
// import{ z } from 'zod'
import { AuthState, AuthAction } from '../schema/AuthSchema'

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
}

type AuthContextType = {
  state: AuthState
  dispatch: React.Dispatch<AuthAction>
}

export const AuthContext = createContext<AuthContextType | null>(null)

export const AuthReducer = (state: AuthState, action: AuthAction) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isAuthenticated: true,
        user: { id: action.payload.id, email: action.payload.email },
      }
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      }

    default:
      return state
  }
}

export const AuthContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState)

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}
