import { Visibility } from '@mui/icons-material'
import { Stack, Typography } from '@mui/material'
import { GridActionsCellItem } from '@mui/x-data-grid'
import React from 'react'
import DataGrid from '../../../../components/DataGrid'
import Page from '../../../../components/Page'
import Paper from '../../../../components/Paper'
import simplexLogo from '../../../../assets/logo/Simplex_logoA.jpg'
import { statusOfLeaveEntitlements } from '../../../../__mocks__/__mocks_data__'

const COLUMNS = [
  {
    field: 'type',
    headerName: 'Type',
    flex: 1,
  },
  {
    field: 'date',
    headerName: 'Periode de prise',
    flex: 1,
  },
  {
    field: 'right',
    headerName: 'Droits',
    flex: 1,
  },
  {
    field: 'leaveAlreadyTaken',
    headerName: 'Conges deja pris',
    flex: 1,
  },
  {
    field: 'leaveTaken',
    headerName: 'Conges pose',
    flex: 1,
  },
  {
    field: 'approvedLeave',
    headerName: 'Conges approuve',
    flex: 1,
  },
  {
    field: 'availableBalance',
    headerName: 'Solde disponible',
    flex: 1,
  },
]

export default function StatusLeaveEntitlements() {
  return (
    <Page>
      <Paper>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography>Etat de vos droit de conges</Typography>
          <img src={simplexLogo} width={100} height={100} />
        </Stack>
        <DataGrid editMode='cell' columns={COLUMNS} rows={statusOfLeaveEntitlements} />
      </Paper>
    </Page>
  )
}
