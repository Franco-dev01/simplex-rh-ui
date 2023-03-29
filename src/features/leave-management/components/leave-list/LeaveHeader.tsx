import Box from '@mui/material/Box'
import InputAdornment from '@mui/material/InputAdornment'
import InputBase from '@mui/material/InputBase'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import React from 'react'

import Iconify from '../../../../components/Iconify'

export default function LeaveHeader() {
  return (
    <Stack
      spacing={2}
      justifyContent='space-between'
      direction={{
        xs: 'column',
        sm: 'row',
      }}
      sx={{ py: 2.5 }}
    >
      <Typography color='primary' flexGrow={1} fontWeight={500}>
        Liste des conges et absence
      </Typography>

      <Box>
        <InputBase
          placeholder='Recherche'
          size='small'
          type='text'
          startAdornment={
            <InputAdornment position='start'>
              <Iconify
                icon='eva:search-fill'
                sx={{
                  color: 'text.disabled',
                  width: 20,
                  height: 20,
                }}
              />
            </InputAdornment>
          }
        />
      </Box>
    </Stack>
  )
}
