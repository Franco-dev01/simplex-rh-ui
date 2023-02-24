import Box from '@mui/material/Box'
import React from 'react'

import { pxToRem } from '../../utils/getFontValues'

type AuthLayoutProps = {
  children: React.ReactNode
}

function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: pxToRem(50),
        marginBottom: pxToRem(50),
      }}
    >
      {children}
    </Box>
  )
}

export default AuthLayout
