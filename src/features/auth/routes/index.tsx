import { Navigate, Route, Routes } from 'react-router-dom'

import GuestGuard from '../../../guard/GuestGuard'
import AuthLayout from '../../../layouts/auth'
import { PATH_AUTH } from '../../../routes/paths'

import Login from '../components/login/login'
export const AuthRoutes = () => (
  <Routes>
    <Route path='*' element={<Navigate to={PATH_AUTH.login.root} />} />
    <Route
      path='login'
      element={
        <GuestGuard>
          <AuthLayout>
            <Login />
          </AuthLayout>
        </GuestGuard>
      }
    />
  </Routes>
)
