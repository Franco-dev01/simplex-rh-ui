import { ReactElement, useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

import LoadingScreen from '../components/LoadingScreen'
import Login from '../features/auth/components/login/login'

import useAuth from '../hooks/useAuth'

type AuthGuardProps = {
  children: ReactElement
}

export default function AuthGuard({ children }: AuthGuardProps) {
  const { isAuthenticated, isInitialized } = useAuth()
  const { pathname } = useLocation()
  const [requestedLocation, setRequestedLocation] = useState<string | null>(null)

  if (!isInitialized) {
    return <LoadingScreen />
  }

  if (!isAuthenticated) {
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname)
    }
    return <Login />
  }

  if (requestedLocation && pathname !== requestedLocation) {
    setRequestedLocation(null)
    return <Navigate to={requestedLocation} />
  }

  return children
}
