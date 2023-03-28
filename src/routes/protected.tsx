import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { Navigate, Outlet, RouteObject, useLocation } from 'react-router-dom'

import ErrorFallback from '../components/ErrorFallback'
import LoadingScreen from '../components/LoadingScreen'
import { PATH_AFTER_LOGIN } from '../config/environements'
// import AuthGuard from '../guard/AuthGuard'
import { lazyImport } from '../utils/lazy-import'

const { DashboardLayout } = lazyImport(() => import('../layouts/dashboard'), 'DashboardLayout')

const { TaskRoutes } = lazyImport(() => import('../features/task-management/routes'), 'TaskRoutes')

const { LeaveRoutes } = lazyImport(
  () => import('../features/leave-management/routes'),
  'LeaveRoutes',
)

const { ConfigurationRoutes } = lazyImport(
  () => import('../features/configurations/routes'),
  'ConfigurationRoutes',
)
const { PersonnelAdministrationRoutes } = lazyImport(
  () => import('../features/personnel-administration/routes'),
  'PersonnelAdministrationRoutes',
)

const { LeaveAbsenceManagementRoutes } = lazyImport(
  () => import('../features/leave-absent-management/routes'),
  'LeaveAbsenceManagementRoutes',
)

const App = () => {
  const { pathname } = useLocation()

  return (
    // <AuthGuard>

    <DashboardLayout>
      <ErrorBoundary key={pathname} FallbackComponent={ErrorFallback}>
        <Suspense fallback={<LoadingScreen isDashboard={pathname.includes('/')} />}>
          <Outlet />
        </Suspense>
      </ErrorBoundary>
    </DashboardLayout>

    // </AuthGuard>
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
        path: 'task/*',
        element: <TaskRoutes />,
      },
      {
        path: 'leave/*',
        element: <LeaveRoutes />,
      },
      {
        path: 'configuration/*',
        element: <ConfigurationRoutes />,
      },
      {
        path: 'personal-administration/*',
        element: <PersonnelAdministrationRoutes />,
      },
      {
        path: 'leave-absence-management/*',
        element: <LeaveAbsenceManagementRoutes />,
      },
    ],
  },
]

export default protectedRoutes
