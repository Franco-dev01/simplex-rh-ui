import { GetApp, RefreshOutlined, Visibility } from '@mui/icons-material'
import { Stack } from '@mui/material'
import { GridActionsCellItem } from '@mui/x-data-grid'
import React from 'react'
import DataGrid from '../../../../components/DataGrid'
import Page from '../../../../components/Page'
import Paper from '../../../../components/Paper'
import { leaveRequest } from '../../../../__mocks__/__mocks_data__'

const COLUMNS = [
  {
    field: 'startDate',
    headerName: 'Date de debut',
    flex: 1,
  },
  {
    field: 'endDate',
    headerName: 'Date de fin',
    flex: 1,
  },
  {
    field: 'dateNumber',
    headerName: 'Nombre de jour',
    flex: 1,
  },
  {
    field: 'typeLeave',
    headerName: 'Type de conger',
    flex: 1,
  },
  {
    field: 'status',
    headerName: 'Status',
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
        onClick={() => ({})}
      />,
      <GridActionsCellItem
        key={`view-${id}`}
        label='Accepter'
        showInMenu
        icon={<GetApp fontSize='small' />}
        onClick={() => ({})}
      />,
      <GridActionsCellItem
        key={`view-${id}`}
        label='Refuser'
        showInMenu
        icon={<RefreshOutlined fontSize='small' />}
        onClick={() => ({})}
      />,
    ],
  },
]

export default function DemandRequest() {
  return (
    <Page>
      <Paper>
        <DataGrid editMode='cell' columns={COLUMNS} rows={leaveRequest} />
      </Paper>
    </Page>
  )
}
