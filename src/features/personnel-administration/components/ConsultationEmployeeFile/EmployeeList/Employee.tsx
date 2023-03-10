import { Archive, Edit } from '@mui/icons-material'
import { GridActionsCellItem } from '@mui/x-data-grid'
import React from 'react'

import DataGrid from '../../../../../components/DataGrid'
import Page from '../../../../../components/Page'
import Paper from '../../../../../components/Paper'
import { cusultationEmployee } from '../../../../../__mocks__/__mocks_data__'

import EmployeeHeader from './EmployeeHeader'

const COLUMNS = [
  {
    field: 'firstname',
    headerName: 'Nom',
    flex: 1,
  },
  {
    field: 'lastname',
    headerName: 'Prenom',
    flex: 1,
  },
  {
    field: 'place',
    headerName: 'Lieu d habitation',
    flex: 1,
  },
  {
    field: 'department',
    headerName: 'Departement',
    flex: 1,
  },
  {
    field: 'actions',
    type: 'actions',
    headerName: 'Actions',
    getActions: ({ row, id }: { row: { id: string }; id: string }) => [
      <GridActionsCellItem
        key={`view-${id}`}
        label='Voir'
        showInMenu
        icon={<Edit fontSize='small' />}
      />,
      <GridActionsCellItem
        key={`view-${id}`}
        label='Editer'
        showInMenu
        icon={<Edit fontSize='small' />}
      />,
      <GridActionsCellItem
        key={`view-${id}`}
        label='Evoluer'
        showInMenu
        icon={<Edit fontSize='small' />}
      />,
      <GridActionsCellItem
        key={`view-${id}`}
        label='Archiver'
        showInMenu
        icon={<Archive fontSize='small' />}
      />,
    ],
  },
]
export default function Employee() {
  return (
    <Page>
      <Paper>
        <EmployeeHeader />
        <DataGrid editMode='cell' columns={COLUMNS} rows={cusultationEmployee} />
      </Paper>
    </Page>
  )
}
