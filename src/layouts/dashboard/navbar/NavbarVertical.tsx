/* eslint-disable react/no-unescaped-entities */
import { Avatar, Box, Button, Divider, Drawer, IconButton, Stack, Typography } from '@mui/material'
import { styled, useTheme } from '@mui/material/styles'
import React from 'react'

import Scrollbar from '../../../components/Scrollbar'
import { NAVBAR } from '../../../config/layouts'
import useCollapseDrawer from '../../../hooks/useCollapseDrawer'
import useResponsive from '../../../hooks/useResponsive'
import profileImg from '../../../assets/images/profile.jpg'

import { Email, Place, QuestionMark } from '@mui/icons-material'

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
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
          },
        }}
      >
        <Stack
          spacing={1}
          sx={{
            mt: 2,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Avatar
            alt='Remy Sharp'
            src={profileImg}
            sx={{
              width: 100,
              height: 100,
              borderRadius: '50%',
              objectFit: 'cover',
              boxShadow: '0px 0px 8px #0877bc',
            }}
          />
          <Typography color='primary'>ADMIN SIMPLEX</Typography>
          <Typography color='primary' fontSize={10}>
            Administrateur simplex
          </Typography>
          <Button>Deconnexion</Button>
        </Stack>
        <Box sx={{ flexGrow: 0.4 }} />

        <Stack>
          <Divider />
        </Stack>
        <Box sx={{ flexGrow: 1 }} />

        <Stack
          spacing={1}
          sx={{
            mt: 2,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Email fontSize='large' sx={{ width: 50, height: 50 }} color='primary' />
          <Typography color='primary'>messagerie</Typography>
        </Stack>

        <Box sx={{ flexGrow: 1 }} />
        <Stack
          spacing={1}
          direction='row'
          alignItems='center'
          justifyContent='flex-start'
          sx={{ pb: 2, width: '95%', margin: 'auto' }}
        >
          <IconButton sx={{ border: '1px solid gray' }} size='small'>
            <Place />
          </IconButton>
          <Box display='table-column'>
            <Typography fontSize='small' color='primary'>
              LOCALISATION
            </Typography>
            <Typography fontSize='small' color='primary'>
              Abidjan, Adjame
            </Typography>
          </Box>
        </Stack>

        <Stack
          spacing={1}
          direction='row'
          alignItems='center'
          justifyContent='flex-start'
          sx={{ pb: 5, width: '95%', margin: 'auto' }}
        >
          <IconButton sx={{ border: '1px solid gray' }} size='small'>
            <QuestionMark />
          </IconButton>
          <Box display='table-column'>
            <Typography fontSize='small' color='primary'>
              MANUEL D'UTILISATION
            </Typography>
            <Typography fontSize='small' color='primary'>
              clickez ici pour plus de details
            </Typography>
          </Box>
        </Stack>
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
