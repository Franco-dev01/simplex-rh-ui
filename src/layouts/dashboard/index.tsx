import { Box, styled } from '@mui/material'
import { ReactNode, useState } from 'react'

import { HEADER, NAVBAR } from '../../config/layouts'
import useCollapseDrawer from '../../hooks/useCollapseDrawer'
import useSettings from '../../hooks/useSettings'

import DashboardHeader from './header'
import NavbarVertical from './navbar/NavbarVertical'
import NavBottom from './navbar/NavBottom'

const MainStyle: any = styled('main', {
  shouldForwardProp: (prop: any) => prop !== 'collapseClick',
})(({ collapseClick, theme }: any) => ({
  flexGrow: 1,
  paddingTop: HEADER.MOBILE_HEIGHT + 24,
  paddingBottom: HEADER.MOBILE_HEIGHT + 24,
  [theme.breakpoints.up('lg')]: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: HEADER.DASHBOARD_DESKTOP_HEIGHT + 24,
    paddingBottom: HEADER.DASHBOARD_DESKTOP_HEIGHT + 24,
    width: `calc(100% - ${NAVBAR.DASHBOARD_WIDTH}px)`,
    height: '100vh',
    overflowY: 'scroll',
    transition: theme.transitions.create('margin-left', {
      duration: theme.transitions.duration.shorter,
    }),
    ...(collapseClick && {
      marginLeft: NAVBAR.DASHBOARD_COLLAPSE_WIDTH,
    }),
  },
}))

type DashboardLayoutProps = {
  children: ReactNode
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const { themeMode } = useSettings()
  const { collapseClick, isCollapse } = useCollapseDrawer()

  const [open, setOpen] = useState(false)

  return (
    <Box
      sx={{
        display: { lg: 'flex' },
        minHeight: { lg: 1 },
        background: '#f9f9f9',
      }}
    >
      <NavbarVertical isOpenSidebar={open} onCloseSidebar={() => setOpen(false)} />

      <MainStyle collapseClick={collapseClick}>
        {children} <NavBottom />
      </MainStyle>
    </Box>
  )
}
