import { Archive, Edit } from '@mui/icons-material'
import IconButton from '@mui/material/IconButton'
import { GridActionsCellItem, GridRenderCellParams } from '@mui/x-data-grid'
import React from 'react'
import DataGrid from '../../../../../components/DataGrid'
import Paper from '../../../../../components/Paper'
import { typeOfLeaveData } from '../../../../../__mocks__/__mocks_data__'
import TypeLeaveHeader from './TypeLeaveHeader'

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
    field: 'cota',
    headerName: 'Cota',
    flex: 1,
  },
  {
    field: 'actions',
    type: 'actions',
    headerName: 'Actions',
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
export default function TypeLeave() {
  return (
    <Paper>
      <TypeLeaveHeader />
      <DataGrid editMode='cell' columns={COLUMNS} rows={typeOfLeaveData} />
    </Paper>
  )
}
