import { Box, IconButton } from '@mui/material'
import { m } from 'framer-motion'
import React, { forwardRef } from 'react'

const varSmall = {
  hover: { scale: 1.1 },
  tap: { scale: 0.95 },
}

const varMedium = {
  hover: { scale: 1.09 },
  tap: { scale: 0.97 },
}

const varLarge = {
  hover: { scale: 1.08 },
  tap: { scale: 0.99 },
}

type AnimateWrapProps = { children: React.ReactNode } & Size

const AnimateWrap: React.FC<AnimateWrapProps> = ({ size, children }) => {
  const isSmall = size === 'small'
  const isLarge = size === 'large'

  return (
    <Box
      component={m.div}
      whileTap='tap'
      whileHover='hover'
      variants={(isSmall && varSmall) || (isLarge && varLarge) || varMedium}
      sx={{
        display: 'inline-flex',
      }}
    >
      {children}
    </Box>
  )
}
type Size = { size: 'small' | 'medium' | 'large' }

type IconButtonAnimateProps = {
  children: React.ReactNode
  color: 'inherit' | 'default' | 'primary' | 'info' | 'success' | 'warning' | 'error'
} & Size

const IconButtonAnimate = forwardRef<IconButtonAnimateProps, any>(
  ({ children, size = 'medium', ...other }, ref) => (
    <AnimateWrap size={size}>
      <IconButton size={size} ref={ref} {...other}>
        {children}
      </IconButton>
    </AnimateWrap>
  ),
)

IconButtonAnimate.displayName = 'IconButtonAnimate'

export default IconButtonAnimate
