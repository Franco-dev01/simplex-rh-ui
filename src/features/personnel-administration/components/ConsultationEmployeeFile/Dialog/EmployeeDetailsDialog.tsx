import { Avatar, Box, Stack, Typography } from '@mui/material'
import React from 'react'
import simplexLogoImg from '../../../../../assets/images/profile.jpg'
import { Dialog } from '../../../../../components/Dialog'

export default function EmployeeDetailsDialog({
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
        <Typography color='primary'>Details de l employe</Typography>
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
        <Typography>Nom</Typography>
        <Typography>Kouakou</Typography>

        <Typography>Prenom</Typography>
        <Typography>Francis</Typography>

        <Typography>Lieu d habitation</Typography>
        <Typography>Yopougon</Typography>

        <Typography>Departement</Typography>
        <Typography>Developpement</Typography>
      </Box>
    </Dialog>
  )
}
