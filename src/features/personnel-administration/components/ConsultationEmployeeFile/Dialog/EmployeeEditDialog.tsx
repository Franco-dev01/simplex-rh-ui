import { Avatar, Box, Stack, Button, Typography } from '@mui/material'
import React from 'react'
import simplexLogoImg from '../../../../../assets/images/profile.jpg'
import { Dialog } from '../../../../../components/Dialog'
import { FKProvider, FKTextField } from '../../../../../components/Formik'

export default function EmployeeEditDialog({
  isOpen,
  handleCloseDialog,
}: {
  isOpen: boolean
  handleCloseDialog: () => void
}) {
  return (
    <Dialog title='' open={isOpen} onClose={handleCloseDialog} actions=''>
      <Stack sx={{ postition: 'stiky', height: '470px', overflow: 'scroll' }}>
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
          <Typography color='primary' mt={1}>
            EDITER
          </Typography>
        </Stack>

        <FKProvider value={{}}>
          <Box
            sx={{
              display: 'grid',
              justifyItems: 'center',
              gap: 2,
              p: 2,
              gridTemplateColumns: {
                xs: 'repeat(1, 1fr)',
                sm: 'repeat(1, 1fr)',
                md: 'repeat(1, 1fr)',
              },
            }}
          >
            <FKTextField name='firstname' label='' placeholder='Saisir le nom' fullWidth required />
            <FKTextField
              name='lastname'
              label=''
              placeholder='Saisir le prenom'
              fullWidth
              required
              sx={{
                background: '#0877bc24  !important',
              }}
            />

            <FKTextField name='place' label='' placeholder='Lieu d habitation' fullWidth required />
            <FKTextField
              name='department'
              label=''
              placeholder='Saisir le departement'
              fullWidth
              required
              sx={{
                background: '#0877bc24  !important',
              }}
            />

            <FKTextField
              name='content'
              label=''
              placeholder='Saisir le contenu'
              fullWidth
              required
            />

            <Stack
              direction='row'
              justifyContent='space-between'
              alignItems='center'
              mb={5}
              sx={{ width: '100%' }}
            >
              <Button
                type='reset'
                color='primary'
                onClick={handleCloseDialog}
                sx={{ width: '120px' }}
              >
                ANNULER
              </Button>

              <Button type='submit' color='primary' variant='contained' sx={{ width: '120px' }}>
                EDITER
              </Button>
            </Stack>
          </Box>
        </FKProvider>
      </Stack>
    </Dialog>
  )
}
