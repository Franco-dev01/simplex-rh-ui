import { Avatar, Box, Stack, Typography } from '@mui/material'
import React from 'react'
import simplexLogoImg from '../../../../../assets/images/profile.jpg'
import { Dialog } from '../../../../../components/Dialog'

export default function LeaveReauestDetailsDialog({
  isOpen,
  handleCloseDialog,
}: {
  isOpen: boolean
  handleCloseDialog: () => void
}) {
  return (
    <Dialog title='' open={isOpen} onClose={handleCloseDialog} actions=''>
      <Stack direction='column' alignItems='center' justifyContent='center' mt={1} mb={1}>
        <Avatar
          alt='Remy Sharp'
          src={simplexLogoImg}
          sx={{
            width: 90,
            height: 90,
            objectFit: 'cover',
            boxShadow: '0px 0px 3px #0877bc',
          }}
        />
        <Typography color='primary'>Details de la demande de conges</Typography>
      </Stack>

      <Box
        sx={{
          display: 'grid',
          justifyItems: 'start',
          gap: 2,
          p: 5,
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(2, 1fr)',
          },
        }}
      >
        <Typography>justification de la demande:</Typography>
        <Typography>Lorem ipsum dolor sit amet</Typography>
        <Typography>justification du rejet de la demande:</Typography>
        <Typography>Lorem, ipsum dolor.</Typography>
      </Box>
    </Dialog>
  )
}
