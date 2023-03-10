import { Stack } from '@mui/material'
import React from 'react'

import DataGrid from '../../../../components/DataGrid'
import Iconify from '../../../../components/Iconify'
import Page from '../../../../components/Page'
import Paper from '../../../../components/Paper'
import RouterDomMuiButton from '../../../../components/RouterDomMuiButton'

import LeaveHeader from './LeaveHeader'

const COLUMNS = [
  {
    field: 'code',
    headerName: 'Code',
    hideSortIcons: true,
    flex: 1,
  },
  {
    field: 'dateOfRequest',
    headerName: 'Date de la demande',
    flex: 1,
  },
  {
    field: 'requestor',
    headerName: 'Demandeur',
    flex: 1,
  },
  {
    field: 'stateOfRequest',
    headerName: 'Etat de la demande',
    flex: 1,
  },
  {
    field: 'department',
    headerName: 'Département',
    flex: 1,
  },
  {
    field: 'actions',
    type: 'actions',
    getActions: () => [],
  },
]
export default function Leave() {
  return (
    <Page>
      <Stack justifyContent='flex-start' alignItems='flex-end' sx={{ pb: 2 }}>
        <RouterDomMuiButton
          to='/leave/creation'
          sx={{ ml: 2 }}
          startIcon={<Iconify icon='eva:plus-fill' />}
        >
          Creer une demander
        </RouterDomMuiButton>
      </Stack>
      <Paper>
        <LeaveHeader />

        <DataGrid editMode='cell' columns={COLUMNS} rows={[]} />
      </Paper>
    </Page>
  )
}
