import React, { ReactElement } from 'react'
import { Navigate } from 'react-router-dom'

import { PATH_DASHBOARD } from '../routes/paths'

import useAuth from '../hooks/useAuth'

type GuestGuardProps = {
  children: ReactElement
}

export default function GuestGuard({ children }: GuestGuardProps) {
  const { isAuthenticated } = useAuth()

  if (isAuthenticated) {
    return <Navigate to={PATH_DASHBOARD.dashboard} />
  }

  return children
}
