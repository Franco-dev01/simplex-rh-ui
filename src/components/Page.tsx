/* eslint-disable react/display-name */
import { Box } from '@mui/material'
import React, { forwardRef } from 'react'

type PageProps = {
  children: React.ReactNode
}

const Page = forwardRef(({ children, ...other }: PageProps, ref) => (
  <Box ref={ref} {...other} sx={{ padding: '20px' }}>
    {children}
  </Box>
))

export default Page
