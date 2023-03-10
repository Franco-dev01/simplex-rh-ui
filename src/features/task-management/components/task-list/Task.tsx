import { Visibility } from '@mui/icons-material'
import { Stack } from '@mui/material'
import { GridActionsCellItem } from '@mui/x-data-grid'
import React from 'react'

import DataGrid from '../../../../components/DataGrid'
import Iconify from '../../../../components/Iconify'
import Page from '../../../../components/Page'
import Paper from '../../../../components/Paper'
import RouterDomMuiButton from '../../../../components/RouterDomMuiButton'
import { taskList } from '../../../../__mocks__/__mocks_data__'

import TaskHeader from './TaskHeader'

const COLUMNS = [
  {
    field: 'createAt',
    headerName: 'Date de creation',
    flex: 1,
  },
  {
    field: 'creator',
    headerName: 'Createur',
    flex: 1,
  },
  {
    field: 'executor',
    headerName: 'Exécutant',
    flex: 1,
  },
  {
    field: 'department',
    headerName: 'Département',
    flex: 1,
  },
  {
    field: 'state',
    headerName: 'Etat',
    flex: 1,
  },
  {
    field: 'project',
    headerName: 'projet',
    flex: 1,
  },
  {
    field: 'actions',
    type: 'actions',
    getActions: ({ row, id }: { row: { id: string }; id: string }) => [
      <GridActionsCellItem
        key={`view-${id}`}
        label='Voir'
        showInMenu
        icon={<Visibility fontSize='small' />}
      />,
    ],
  },
]
export default function Task() {
  return (
    <Page>
      <Stack justifyContent='flex-start' alignItems='flex-end' sx={{ pb: 2 }}>
        <RouterDomMuiButton
          to='/task/creation'
          sx={{ ml: 2 }}
          startIcon={<Iconify icon='eva:plus-fill' />}
        >
          Creer une nouvelle tache
        </RouterDomMuiButton>
      </Stack>

      <Paper>
        <TaskHeader />
        <DataGrid editMode='cell' columns={COLUMNS} rows={taskList} />
      </Paper>
    </Page>
  )
}
