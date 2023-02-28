import { Box, Grid } from '@mui/material'
import { Stack } from '@mui/system'

import Page from '../../../components/Page'

export function Dashboard() {
  return (
    <Page>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <span>Bienvenue</span>
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
