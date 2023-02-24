import LogoutIcon from '@mui/icons-material/Logout'
import { AppBar, Stack, Toolbar, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import React from 'react'
import { useNavigate } from 'react-router-dom'

import IconButton from '../../../components/IconButton'
import Iconify from '../../../components/Iconify'
import MenuButton from '../../../components/ProfileMenu'
import { HEADER, NAVBAR } from '../../../config/layouts'
import useAuth from '../../../hooks/useAuth'
import useOffSetTop from '../../../hooks/useOffSetTop'
import useResponsive from '../../../hooks/useResponsive'
import { PATH_AUTH } from '../../../routes/paths'
import { cssStyles } from '../../../utils/cssStyles'
import { pxToRem } from '../../../utils/getFontValues'
import getFullName from '../../../utils/getFullName'

// ----------------------------------------------------------------------

const RootStyle = styled(AppBar, {
  shouldForwardProp: (prop) =>
    prop !== 'isCollapse' && prop !== 'isOffset' && prop !== 'verticalLayout',
})(
  ({
    isCollapse,
    isOffset,
    verticalLayout,
    theme,
  }: {
    isCollapse: boolean
    isOffset: boolean
    verticalLayout: any
    theme?: any
  }) => ({
    ...cssStyles(theme).bgBlur(),
    boxShadow: 'none',
    color: '#545454',
    height: HEADER.MOBILE_HEIGHT,
    zIndex: theme.zIndex.appBar + 1,
    transition: theme.transitions.create(['width', 'height'], {
      duration: theme.transitions.duration.shorter,
    }),
    [theme.breakpoints.up('lg')]: {
      height: HEADER.DASHBOARD_DESKTOP_HEIGHT,
      width: `calc(100% - ${NAVBAR.DASHBOARD_WIDTH + 1}px)`,
      ...(isCollapse && {
        width: `calc(100% - ${NAVBAR.DASHBOARD_COLLAPSE_WIDTH}px)`,
      }),
      ...(isOffset && {
        height: HEADER.DASHBOARD_DESKTOP_OFFSET_HEIGHT,
      }),
      ...(verticalLayout && {
        width: '100%',
        height: HEADER.DASHBOARD_DESKTOP_OFFSET_HEIGHT,
        backgroundColor: theme.palette.background.default,
      }),
    },
  }),
)

// ----------------------------------------------------------------------

type DashboardHeaderProps = {
  onOpenSidebar?: () => void
  isCollapse?: boolean
  verticalLayout?: boolean
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  onOpenSidebar,
  isCollapse = false,
  verticalLayout = false,
}) => {
  const isOffset = useOffSetTop(HEADER.DASHBOARD_DESKTOP_HEIGHT) && !verticalLayout
  const isDesktop = useResponsive('up', 'lg')
  const navigate = useNavigate()
  const { logout, user } = useAuth()

  const handleLogout = async () => {
    try {
      await logout()

      navigate(PATH_AUTH.login.root, { replace: true })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <RootStyle
      isCollapse={isCollapse}
      isOffset={isOffset}
      verticalLayout={verticalLayout}
      sx={{ background: 'transparent' }}
    >
      <Toolbar
        sx={{
          minHeight: '100% !important',
          px: { lg: 4.5 },
          justifyContent: 'space-between',
          gap: 2,
        }}
      >
        {!isDesktop && (
          <IconButton
            onClick={onOpenSidebar}
            sx={{
              mr: 1,
            }}
          >
            <Iconify icon='eva:menu-2-fill' />
          </IconButton>
        )}

        <Stack flexGrow={1} />
        <Stack
          direction='row'
          alignItems='center'
          spacing={{
            xs: 0.5,
            sm: 1.5,
          }}
        >
          <IconButton size='large' sx={{ boxShadow: '' }}>
            <Iconify icon='ci:notification' fontSize={['0.75rem', '1rem', '1.5rem']} />
            <Typography fontFamily='Roboto, sans-serif' fontWeight='bold'>
              3
            </Typography>
          </IconButton>

          <MenuButton
            name={getFullName(user?.firstName, user?.lastName)}
            imgSrc={user?.picture}
            items={[
              {
                icon: <LogoutIcon />,
                label: 'Déconnexion',
                onClick: handleLogout,
              },
            ]}
            sx={{
              boxShadow: '',
              borderRadius: pxToRem(10),
            }}
          />
        </Stack>
      </Toolbar>
    </RootStyle>
  )
}

export default DashboardHeader
