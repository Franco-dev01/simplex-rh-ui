import React from 'react'
import { RouteObject } from 'react-router-dom'

import { lazyImport } from '../utils/lazy-import'

const { AuthRoutes } = lazyImport(() => import('../features/auth/index'), 'AuthRoutes')

const publicRoutes: RouteObject[] = [
  {
    path: 'auth/*',
    element: <AuthRoutes />,
  },
]

export default publicRoutes
