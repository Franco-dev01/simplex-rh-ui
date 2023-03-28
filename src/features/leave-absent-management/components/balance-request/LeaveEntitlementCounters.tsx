import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from '@mui/material'
import React from 'react'
import { FKProvider, FKTextField } from '../../../../components/Formik'
import Page from '../../../../components/Page'
import Paper from '../../../../components/Paper'
import simplexLogo from '../../../../assets/logo/Simplex_logoA.jpg'
import SelectTypeLeave from './SelectTypeLeave'

export default function LeaveEntitlementCounters() {
  return (
    <Page>
      <Paper>
        <Stack direction='row' alignItems='center' justifyContent='space-between' sx={{ px: 5 }}>
          <Typography>Nouvelle demande de conges</Typography>
          <img src={simplexLogo} width={100} height={100} />
        </Stack>

        <FKProvider value={{}} onSubmit={() => ({})}>
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
            <Typography>Date selectionner</Typography>
            <Typography>01-01-2023(jour complete) au 31-01-2023</Typography>
            <Typography>Nombre decompte</Typography>
            <Typography>2 jours</Typography>

            <Typography>Type de conge</Typography>
            <SelectTypeLeave name='leaveType' label='' />

            <Typography>Jour de debut</Typography>

            <FormControl>
              <RadioGroup
                row
                aria-labelledby='demo-row-radio-buttons-group-label'
                name='row-radio-buttons-group'
              >
                <FormControlLabel value='female' control={<Radio />} label='Journne complete' />
                <FormControlLabel value='male' control={<Radio />} label='Apres-midi' />
              </RadioGroup>
            </FormControl>

            <Typography>Jour de fin</Typography>
            <FormControl>
              <RadioGroup
                row
                aria-labelledby='demo-row-radio-buttons-group-label'
                name='row-radio-buttons-group'
              >
                <FormControlLabel value='female' control={<Radio />} label='Journne complete' />
                <FormControlLabel value='male' control={<Radio />} label='matin' />
              </RadioGroup>
            </FormControl>
            <Typography>Raison</Typography>
            <FKTextField fullWidth label='' name='reason' />
            <Button variant='outlined' sx={{ height: 30 }}>
              Soumettre
            </Button>
          </Box>
        </FKProvider>
      </Paper>
    </Page>
  )
}
