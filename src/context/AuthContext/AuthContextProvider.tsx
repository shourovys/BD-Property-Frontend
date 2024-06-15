import { authApi } from '@/api/urls'
import { ISingleServerResponse } from '@/types/pages/common'
import { setSession } from '@/utils/jwt'
import { useEffect, useMemo, useState } from 'react'
import useSWR from 'swr'
import { IAuthContext, IUserResponse } from '../../types/context/auth'
import { LOCAL_STORAGE_KEY } from '../../utils/config'
import AuthContext from './AuthContext'

const initialState: IAuthContext = {
  user: null,
  loading: true,
  isAuthenticated: false,
  logout: () => null,
  login: () => null,
  refresh: () => null,
}

interface AuthProviderProps {
  children: React.ReactNode
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  // Define the initial state for the authentication context
  const [state, setState] = useState<IAuthContext>(initialState)

  // Function to handle user login and update the state
  const login = (user: IUserResponse) => {
    setState((prevState) => ({
      ...prevState,
      ...user,
      isAuthenticated: true,
      loading: false,
    }))
  }

  // Function to handle user logout and update the state
  const logout = () => {
    setSession()
    setState((prevState) => ({
      ...prevState,
      user: null,
      partition: null,
      license: null,
      layout: '',
      permissions: [],
      isAuthenticated: false,
      loading: false,
    }))
  }

  // Get the access token from local storage, if available
  const token =
    typeof window !== 'undefined'
      ? window.localStorage.getItem(LOCAL_STORAGE_KEY.accessToken)
      : null

  // Use SWR to fetch the user data and update the state on success or error
  const { mutate: configMutate } = useSWR(token ? authApi.profile : null, {
    // const { mutate: configMutate } = useSWR(token && !state.isAuthenticated ? authApi.config : null, {
    onSuccess: (data: ISingleServerResponse<IUserResponse>) => {
      if (data.results.id) {
        setState((prevState) => ({
          ...prevState,
          user: data.results,
          loading: false,
          isAuthenticated: true,
        }))
      } else {
        setState((prevState) => ({
          ...prevState,
          user: null,
          isAuthenticated: false,
          loading: false,
        }))
      }
    },
    onError: () => {
      setSession() // removing all section local data
      setState((prevState) => ({
        ...prevState,
        user: null,
        isAuthenticated: false,
        loading: false,
      }))
    },
  })

  useEffect(() => {
    configMutate()
  }, [])

  // Function to trigger the configuration data refresh
  const refresh = () => {
    configMutate()
  }

  // Provide the authentication context with the required values and functions
  return (
    <AuthContext.Provider
      value={useMemo(
        () => ({
          ...state,
          login,
          logout,
          refresh,
        }),
        [state]
      )}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
