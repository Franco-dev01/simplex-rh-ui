import { Archive, Edit } from '@mui/icons-material'
import { GridActionsCellItem } from '@mui/x-data-grid'
import React from 'react'

import DataGrid from '../../../../../components/DataGrid'
import Page from '../../../../../components/Page'
import Paper from '../../../../../components/Paper'
import { communicationHistory } from '../../../../../__mocks__/__mocks_data__'
import CommunicationHistoryHeader from './CommunicationHistoryHeader'

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
        label='Archiver'
        showInMenu
        icon={<Archive fontSize='small' />}
      />,
    ],
  },
]
export default function CommunicationHistory() {
  return (
    <Page>
      <Paper>
        <CommunicationHistoryHeader />
        <DataGrid editMode='cell' columns={COLUMNS} rows={communicationHistory} />
      </Paper>
    </Page>
  )
}
