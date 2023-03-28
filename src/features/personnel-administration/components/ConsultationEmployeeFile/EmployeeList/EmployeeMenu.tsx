import IconButton from '@mui/material/IconButton/IconButton'
import React from 'react'
import { Box, Tooltip, Menu, MenuItem, ListItemIcon } from '@mui/material'
import { Archive, Edit, MoreVert, Redo, Visibility } from '@mui/icons-material'
export default function EmployeeMenu({
  handleOpenDialog,
  handleOpenDialogEdit,
  handleOpenDialogEvolved,
}: {
  handleOpenDialog: () => void
  handleOpenDialogEdit: () => void
  handleOpenDialogEvolved: () => void
}) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title='More options'>
          <IconButton
            onClick={handleClick}
            size='small'
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
          >
            <MoreVert sx={{ color: '#fff' }} />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id='account-menu'
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleOpenDialog}>
          <ListItemIcon>
            <Visibility fontSize='small' />
          </ListItemIcon>
          Details
        </MenuItem>
        <MenuItem onClick={handleOpenDialogEdit}>
          <ListItemIcon>
            <Edit fontSize='small' />
          </ListItemIcon>
          Editer
        </MenuItem>

        <MenuItem onClick={handleOpenDialogEvolved}>
          <ListItemIcon>
            <Redo fontSize='small' />
          </ListItemIcon>
          Evoluer
        </MenuItem>

        <MenuItem onClick={() => ({})}>
          <ListItemIcon>
            <Archive fontSize='small' />
          </ListItemIcon>
          Archiver
        </MenuItem>
      </Menu>
    </React.Fragment>
  )
}
