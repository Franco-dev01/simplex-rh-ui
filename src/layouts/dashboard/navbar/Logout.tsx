import { Stack } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import LogoutIcon from '@mui/icons-material/Logout'
import {
  ListItemIconStyle,
  ListItemStyle,
  ListItemTextStyle,
} from '../../../components/nav-section/vertical/style'
import useAuth from '../../../hooks/useAuth'
import { PATH_AUTH } from '../../../routes/paths'

const Logout = () => {
  const navigate = useNavigate()

  const { logout } = useAuth()

  const handleLogout = async () => {
    try {
      await logout()

      navigate(PATH_AUTH.login.root, { replace: true })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Stack
      spacing={3}
      sx={{
        px: 1.5,
        pb: 5,
        mt: 10,
        width: 1,
        textAlign: 'start',
        display: 'block',
      }}
    >
      <ListItemStyle onClick={handleLogout} activeRoot={true} sx={{ backgroundColor: 'unset' }}>
        <ListItemIconStyle sx={{ color: 'inherit' }}>
          <LogoutIcon />
        </ListItemIconStyle>

        <ListItemTextStyle disableTypography primary='Déconnexion' isCollapse={false} />
      </ListItemStyle>
    </Stack>
  )
}

export default Logout
