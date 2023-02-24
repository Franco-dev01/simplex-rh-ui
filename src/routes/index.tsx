import { useRoutes } from 'react-router-dom'

import { commonRoutes } from './common'
import protectedRoutes from './protected'
import publicRoutes from './public'

const AppRoutes = () => {
  const routes = [...publicRoutes, ...protectedRoutes]

  return useRoutes([...routes, ...commonRoutes])
}

export default AppRoutes
