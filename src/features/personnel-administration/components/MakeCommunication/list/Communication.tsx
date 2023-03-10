import React from 'react'
import DataGrid from '../../../../../components/DataGrid'
import Paper from '../../../../../components/Paper'
import { departmentData } from '../../../../../__mocks__/__mocks_data__'
import CommunicationHeader from './CommunicationHeader'

const COLUMNS = [
  {
    field: 'title',
    headerName: 'Titre',
    flex: 1,
  },
  {
    field: 'description',
    headerName: 'Contenu principal',
    flex: 1,
  },
  {
    field: 'destination',
    headerName: 'Destination',
    flex: 1,
  },
]
export default function Communication() {
  return (
    <Paper>
      <CommunicationHeader />
      <DataGrid editMode='cell' columns={COLUMNS} rows={departmentData} />
    </Paper>
  )
}
