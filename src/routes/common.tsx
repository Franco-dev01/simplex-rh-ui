import { Navigate, RouteObject } from 'react-router-dom'

import { PATH_AUTH, PATH_OTHER } from './paths'

export const commonRoutes: RouteObject[] = [
  {
    path: '*',
    children: [
      {
        path: '404',
        element: <div>Page not found</div>,
      },
      {
        path: '*',
        element: <Navigate to={PATH_OTHER.notFound} />,
      },
    ],
  },
  {
    path: '/',
    index: true,
    element: <Navigate to={PATH_AUTH.login.root} />,
  },
  {
    path: '*',
    element: <Navigate to={PATH_OTHER.notFound} />,
  },
]
