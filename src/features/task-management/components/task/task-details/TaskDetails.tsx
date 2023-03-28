import { Box, Typography } from '@mui/material'
import React from 'react'

export default function TaskDetails() {
  return (
    <Box
      sx={{
        display: 'grid',
        justifyItems: 'flex-start',
        alignItems: 'center',
        gap: 2,
        p: 2,
        gridTemplateColumns: {
          xs: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(2, 1fr)',
        },
      }}
    >
      <Typography>Intituler</Typography>
      <Typography>Lorem </Typography>
      <Typography>Date de realisation</Typography>
      <Typography>01-01-2023</Typography>
    </Box>
  )
}
