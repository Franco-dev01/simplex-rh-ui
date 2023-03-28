import Box from '@mui/material/Box'
import InputAdornment from '@mui/material/InputAdornment'
import InputBase from '@mui/material/InputBase'
import Stack from '@mui/material/Stack'
import React from 'react'
import Iconify from '../../../../../components/Iconify'

export default function FunctionInCompanyHeader() {
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
