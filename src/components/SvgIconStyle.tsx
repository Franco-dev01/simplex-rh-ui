import { Box, SxProps } from '@mui/material'
import React from 'react'

type SvgIconStyleProps = {
  src: string
  sx?: SxProps
}

const SvgIconStyle: React.FC<SvgIconStyleProps> = ({ src, sx }) => (
  <Box
    component='span'
    sx={{
      width: 24,
      height: 24,
      display: 'inline-block',
      bgcolor: 'currentColor',
      mask: `url(${src}) no-repeat center / contain`,
      WebkitMask: `url(${src}) no-repeat center / contain`,
      ...sx,
    }}
  />
)

export default SvgIconStyle
