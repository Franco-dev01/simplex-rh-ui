import { Avatar, Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { Dialog } from '../../../../../components/Dialog'
import { FKProvider, FKTextField } from '../../../../../components/Formik'
import simplexLogoImg from '../../../../../assets/images/profile.jpg'

export default function CreateProjectDialog({
  isOpen,
  handleCloseDialog,
}: {
  isOpen: boolean
  handleCloseDialog: () => void
}) {
  return (
    <Dialog title='' open={isOpen} onClose={handleCloseDialog} actions=''>
      <Stack direction='column' alignItems='center' justifyContent='center' mt={1}>
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
          ENREGISTREMENT
        </Typography>
      </Stack>
      <FKProvider value={{}}>
        <Box
          sx={{
            display: 'grid',
            justifyItems: 'center',
            gap: 2,
            p: 5,
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(1, 1fr)',
              md: 'repeat(1, 1fr)',
            },
          }}
        >
          <FKTextField
            name='name'
            label=''
            placeholder='Saisir le detail'
            fullWidth
            required
            multiline
            rows={1.5}
          />
          <FKTextField
            name='name'
            label=''
            placeholder='Saisir la denomination'
            fullWidth
            required
            multiline
            rows={1.5}
          />

          <Stack
            direction='row'
            justifyContent='space-between'
            alignItems='flex-end'
            width='100%'
            mt={2}
            spacing={2}
          >
            <Button type='reset' color='primary' variant='outlined' sx={{ height: 25 }}>
              ANNULER
            </Button>
            <Button type='submit' color='primary' variant='outlined' sx={{ height: 25 }}>
              ENREGISTRER
            </Button>
          </Stack>
        </Box>
      </FKProvider>
    </Dialog>
  )
}
