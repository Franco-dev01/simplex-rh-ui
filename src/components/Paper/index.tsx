import { Box, Button, PaperProps, Stack, Typography } from '@mui/material'
import MuiPaper from '@mui/material/Paper'
import React from 'react'
import { RiCloseLine } from 'react-icons/ri'

import { pxToRem } from '../../utils/getFontValues'

type TPaperProps = {
  children: React.ReactNode
  onClose?: (args?: any) => void
  isClose?: boolean
  title?: string
} & PaperProps

export default function Paper({
  children,
  onClose,
  isClose = false,
  title,
  sx,
  ...rest
}: TPaperProps) {
  return (
    <Box
      sx={{
        ...sx,
        '& > :not(style)': {
          padding: '10px',
          height: '100%',
          flexGrow: 1,
        },
        height: '100%',
      }}
    >
      <MuiPaper elevation={0.9} {...rest} sx={{ borderRadius: '10px' }}>
        {isClose && (
          <Stack direction='row-reverse'>
            <Button
              color='error'
              size='small'
              sx={{
                marginBottom: pxToRem(15),
              }}
              endIcon={<RiCloseLine />}
              onClick={onClose}
            >
              fermer
            </Button>
          </Stack>
        )}
        {title ? (
          <Typography align='center' marginBottom={9} variant='h5' fontWeight={500}>
            {title}
          </Typography>
        ) : null}

        {children}
      </MuiPaper>
    </Box>
  )
}
