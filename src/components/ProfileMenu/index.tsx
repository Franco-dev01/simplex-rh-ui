import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import Avatar from '@mui/material/Avatar'
import Box, { BoxProps } from '@mui/material/Box'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import * as React from 'react'

import { ProfileMenuProps } from '../../types'
import callAll from '../../utils/callAll'

import StyledMenu from './StyledMenu'

export default function ProfileMenu({
  items,
  imgSrc,
  name,
  ...boxProps
}: Partial<ProfileMenuProps> & BoxProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box {...boxProps}>
      <Button
        id='profile-menu'
        aria-controls={open ? 'profile-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        variant='contained'
        color='secondary'
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon sx={{ color: '#529869' }} />}
        startIcon={
          <Avatar alt='Remy Sharp' variant='square' src={imgSrc} sx={{ borderRadius: '10px' }} />
        }
        sx={{ fontWeight: 'bold', fontFamily: 'roboto, sans-serif' }}
        size='medium'
        fullWidth
      >
        {name}
      </Button>
      <StyledMenu
        id='profile-menu'
        MenuListProps={{
          'aria-labelledby': 'profile-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {(items || []).map((item: any) => {
          return (
            <MenuItem key={item.label} onClick={callAll(item.onClick, handleClose)} disableRipple>
              {item.icon}
              {item.label}
            </MenuItem>
          )
        })}
      </StyledMenu>
    </Box>
  )
}
