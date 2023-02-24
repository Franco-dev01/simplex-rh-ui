import { Grid, Stack, Typography } from '@mui/material'

import { LoginForm } from './LoginForm'

export default function Login() {
  return (
    <Grid container sx={{ height: '80vh', width: '100%' }}>
      <Grid item xs={12} md={12} display='flex' alignItems='center' justifyContent='center'>
        <Stack sx={{ width: '30%' }}>
          <Typography
            variant='h3'
            sx={{
              mb: 4,
              lineHeight: 1,
              color: (theme) => theme.palette.secondary.contrastText,
              fontWeight: 600,
            }}
          >
            Bienvenue sur simplex-rh
          </Typography>

          <LoginForm />
        </Stack>
      </Grid>
    </Grid>
  )
}
