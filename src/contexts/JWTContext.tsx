import { createContext, ReactNode, useEffect, useMemo, useReducer } from 'react'

import {
  LoginCredentialsDTO,
  loginWithAccessTokenAndIdAccount,
  loginWithCredentials,
} from '../features/auth/api/login'
import { TActionMap, TAuthState, TAuthUser, TJWTContextType } from '../types'
import { isValidToken, setSession } from '../utils/jwt'
import { storage } from '../utils/storage'

enum Types {
  Initial = 'INITIALIZE',
  Login = 'LOGIN',
  Logout = 'LOGOUT',
}

type JWTAuthPayload = {
  [Types.Initial]: {
    isAuthenticated: boolean
    user: TAuthUser
  }
  [Types.Login]: {
    user: TAuthUser
  }
  [Types.Logout]: undefined
}

export type JWTActions = TActionMap<JWTAuthPayload>[keyof TActionMap<JWTAuthPayload>]

export const initialState: TAuthState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
}

export const JWTReducer = (state: TAuthState, action: JWTActions) => {
  switch (action.type) {
    case 'INITIALIZE':
      return {
        isAuthenticated: action.payload.isAuthenticated,
        isInitialized: true,
        user: action.payload.user,
      }
    case 'LOGIN':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
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

const AuthContext = createContext<TJWTContextType | null>({
  ...initialState,
  method: 'jwt',
  loginWithEmailAndPassword: () => Promise.resolve(),
  loginWithIdProfil: () => Promise.resolve(),
  logout: () => Promise.resolve(),
})

function AuthProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(JWTReducer, initialState)

  useEffect(() => {
    const initialize = async () => {
      try {
        const idToken = storage.getIdToken()

        if (idToken && isValidToken(idToken)) {
          setSession(idToken)

          dispatch({
            type: Types.Initial,
            payload: {
              isAuthenticated: true,
              user: storage.getAccount(),
            },
          })
        } else {
          dispatch({
            type: Types.Initial,
            payload: {
              isAuthenticated: false,
              user: null,
            },
          })
        }
      } catch (err) {
        console.error(err)
        dispatch({
          type: Types.Initial,
          payload: {
            isAuthenticated: false,
            user: null,
          },
        })
      }
    }

    initialize()
  }, [])

  const loginWithEmailAndPassword = async (data: LoginCredentialsDTO) => {
    const response = await loginWithCredentials(data)
    const { accessToken, account } = response.data

    storage.setAccessToken(accessToken)
    storage.setAccount(account)
    return account
  }

  const loginWithIdProfil = async (id: string) => {
    const responseLoginWithAccessToken = await loginWithAccessTokenAndIdAccount(id)
    const { idToken } = responseLoginWithAccessToken.data

    setSession(idToken)
    const account = storage.getAccount()
    account.profiles.map((profil: any) => {
      if (profil.id === id) {
        profil.isActive = true
        return profil
      }
      profil.isActive = false
      return profil
    })

    storage.setAccount(account)

    dispatch({
      type: Types.Login,
      payload: {
        user: storage.getAccount(),
      },
    })

    return responseLoginWithAccessToken.data
  }

  const logout = async () => {
    setSession(null)
    dispatch({ type: Types.Logout })
  }

  const authProviderValue = useMemo(
    () => ({
      ...state,
      method: 'jwt',
      loginWithEmailAndPassword,
      loginWithIdProfil,
      logout,
    }),
    [loginWithEmailAndPassword, loginWithIdProfil, logout],
  )

  return <AuthContext.Provider value={authProviderValue}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
