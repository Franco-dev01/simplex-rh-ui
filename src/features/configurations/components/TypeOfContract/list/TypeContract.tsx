import { Archive, Edit } from '@mui/icons-material'
import IconButton from '@mui/material/IconButton/IconButton'
import { GridActionsCellItem, GridRenderCellParams } from '@mui/x-data-grid'
import React from 'react'
import DataGrid from '../../../../../components/DataGrid'
import Paper from '../../../../../components/Paper'
import { typeOfContractData } from '../../../../../__mocks__/__mocks_data__'
import TypeContractHeader from './TypeContractHeader'

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
    renderCell: (params: GridRenderCellParams) => (
      <>
        <IconButton size='small'>
          <Edit fontSize='small' />
        </IconButton>
        <IconButton size='small'>
          <Archive fontSize='small' />
        </IconButton>
      </>
    ),
  },
]
export default function TypeContract() {
  return (
    <Paper>
      <TypeContractHeader />
      <DataGrid editMode='cell' columns={COLUMNS} rows={typeOfContractData} />
    </Paper>
  )
}
