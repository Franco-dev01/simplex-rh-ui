import { Box, Grid, Typography } from '@mui/material'
import { Stack } from '@mui/system'

import Page from '../../../components/Page'
import useAuth from '../../../hooks/useAuth'
import getFullName from '../../../utils/getFullName'

export function Dashboard() {
  const { user } = useAuth()

  return (
    <Page>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <span>Bienvenue</span>
            <Typography
              sx={{
                lineHeight: 1,
                color: (theme) => theme.palette.secondary.contrastText,
              }}
              variant='h5'
              paragraph
            >
              {getFullName(user?.firstName, user?.lastName)}
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <Stack
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                marginTop: '10%',
              }}
            >
              Bientôt disponible
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Page>
  )
}
