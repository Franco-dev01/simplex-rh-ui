import { Box, Drawer, Stack } from '@mui/material'
import { styled, useTheme } from '@mui/material/styles'
import React from 'react'

import Logo from '../../../components/Logo'
import { NavSectionVertical } from '../../../components/nav-section'
import Scrollbar from '../../../components/Scrollbar'
import { NAVBAR } from '../../../config/layouts'
import useCollapseDrawer from '../../../hooks/useCollapseDrawer'
import useResponsive from '../../../hooks/useResponsive'

import Logout from './Logout'
import navConfig from './NavConfig'

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    flexShrink: 0,
    transition: theme.transitions.create('width', {
      duration: theme.transitions.duration.shorter,
    }),
  },
}))

type NavbarVerticalProps = {
  isOpenSidebar: boolean
  onCloseSidebar: () => void
}

const NavbarVertical: React.FC<NavbarVerticalProps> = ({ isOpenSidebar, onCloseSidebar }) => {
  const theme = useTheme()

  const isDesktop = useResponsive('up', 'lg')

  const { isCollapse, collapseClick } = useCollapseDrawer()

  const renderContent = (
    <Stack
      direction='row'
      spacing={2}
      sx={{
        height: '100vh',
      }}
    >
      <Scrollbar
        sx={{
          height: 1,
          '& .simplebar-content': {
            height: 1,
            display: 'flex',
            flexDirection: 'column',
          },
        }}
      >
        <Stack
          spacing={3}
          sx={{
            pt: 3,
            pl: 4,
            fontSize: 20,
          }}
        >
          <Logo />
        </Stack>

        <NavSectionVertical navConfig={navConfig} />
        <Box sx={{ flexGrow: 1 }} />
        <Logout />
      </Scrollbar>
    </Stack>
  )

  return (
    <RootStyle
      sx={{
        width: {
          lg: isCollapse ? NAVBAR.DASHBOARD_COLLAPSE_WIDTH : NAVBAR.DASHBOARD_WIDTH,
        },
        ...(collapseClick && {
          position: 'absolute',
        }),
      }}
    >
      {!isDesktop && (
        <Drawer
          open={isOpenSidebar}
          onClose={onCloseSidebar}
          PaperProps={{ sx: { width: NAVBAR.DASHBOARD_WIDTH } }}
        >
          {renderContent}
        </Drawer>
      )}

      {isDesktop && (
        <Drawer
          open
          variant='persistent'
          PaperProps={{
            sx: {
              width: NAVBAR.DASHBOARD_WIDTH,
              borderRightStyle: 'unset',
              boxShadow: '0 0 15px rgba(17, 17, 26, 0.1)',
              bgcolor: 'background.default',
              transition: () =>
                theme.transitions.create('width', {
                  duration: theme.transitions.duration.standard,
                }),
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </RootStyle>
  )
}

export default NavbarVertical
