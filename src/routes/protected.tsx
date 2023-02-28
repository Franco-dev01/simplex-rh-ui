import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { Navigate, Outlet, RouteObject, useLocation } from 'react-router-dom'

import ErrorFallback from '../components/ErrorFallback'
import LoadingScreen from '../components/LoadingScreen'
import { PATH_AFTER_LOGIN } from '../config/environements'
import AuthGuard from '../guard/AuthGuard'
import { lazyImport } from '../utils/lazy-import'

const { DashboardLayout } = lazyImport(() => import('../layouts/dashboard'), 'DashboardLayout')
const { DashboardRoutes } = lazyImport(
  () => import('../features/dashboard/routes'),
  'DashboardRoutes',
)

const App = () => {
  const { pathname } = useLocation()

  return (
    //<AuthGuard>
    <DashboardLayout>
      <ErrorBoundary key={pathname} FallbackComponent={ErrorFallback}>
        <Suspense fallback={<LoadingScreen isDashboard={pathname.includes('/')} />}>
          <Outlet />
        </Suspense>
      </ErrorBoundary>
    </DashboardLayout>
    //</AuthGuard>
  )
}

const protectedRoutes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        element: <Navigate to={PATH_AFTER_LOGIN} replace />,
        index: true,
      },
      {
        path: 'accueil/*',
        element: <DashboardRoutes />,
      },
    ],
  },
]

export default protectedRoutes
