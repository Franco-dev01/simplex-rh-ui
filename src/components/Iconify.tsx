/* eslint-disable react/display-name */
import { Icon, IconifyIcon } from '@iconify/react'
import { Box, BoxProps } from '@mui/material'
import { forwardRef } from 'react'

type IconifyProps = {
  icon: IconifyIcon | string
} & BoxProps

const Iconify = forwardRef<any, IconifyProps>(({ icon, ...other }, ref) => (
  <Box component={Icon} icon={icon} ref={ref} {...other} />
))

export default Iconify
