import { Box } from '@mui/material'
import { alpha, styled, SxProps } from '@mui/material/styles'
import React from 'react'
import SimpleBarReact from 'simplebar-react'

import { isMobile } from '../utils/is-mobile'

const RootStyle = styled('div')(() => ({
  flexGrow: 1,
  height: '100%',
  overflow: 'hidden',
  marginLeft: '0px !important',
}))

export const SimpleBar = styled(SimpleBarReact)(({ theme }) => ({
  maxHeight: '100%',
  '& .simplebar-scrollbar': {
    '&:before': {
      backgroundColor: alpha(theme.palette.grey[600], 0.48),
    },
    '&.simplebar-visible:before': {
      opacity: 1,
    },
  },
  '& .simplebar-track.simplebar-vertical': {
    width: 10,
  },
  '& .simplebar-track.simplebar-horizontal .simplebar-scrollbar': {
    height: 6,
  },
  '& .simplebar-mask': {
    zIndex: 'inherit',
  },
}))

type ScrollbarProps = {
  sx?: SxProps
  children: React.ReactNode
}

const Scrollbar: React.FC<ScrollbarProps> = ({ children, sx, ...other }) => {
  const userAgent = typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent

  if (isMobile(userAgent)) {
    return (
      <Box sx={{ overflowX: 'auto', ...sx }} {...other}>
        {children}
      </Box>
    )
  }

  return (
    <RootStyle>
      <SimpleBar timeout={500} clickOnTrack={false} sx={sx} {...other}>
        {children}
      </SimpleBar>
    </RootStyle>
  )
}

export default Scrollbar
