import { Archive, Edit } from '@mui/icons-material'
import { GridActionsCellItem } from '@mui/x-data-grid'
import React from 'react'
import DataGrid from '../../../../../components/DataGrid'
import Paper from '../../../../../components/Paper'
import { functionCompanyData } from '../../../../../__mocks__/__mocks_data__'
import FunctionInCompanyHeader from './FunctionInCompanyHeader'
const COLUMNS = [
  {
    field: 'denomination',
    headerName: 'Dénomination',
    flex: 1,
  },
  {
    field: 'description',
    headerName: 'Description',
    flex: 1,
  },
  {
    field: 'actions',
    type: 'actions',
    headerName: 'Actions',

    getActions: ({ row, id }: { row: { id: string }; id: string }) => [
      <GridActionsCellItem
        key={`view-${id}`}
        label='Editer'
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
export default function FunctionInCompany() {
  return (
    <Paper>
      <FunctionInCompanyHeader />
      <DataGrid editMode='cell' columns={COLUMNS} rows={functionCompanyData} />
    </Paper>
  )
}
