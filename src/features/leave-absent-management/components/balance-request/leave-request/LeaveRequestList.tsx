import { Visibility } from '@mui/icons-material'
import { Stack, Typography } from '@mui/material'
import { GridActionsCellItem } from '@mui/x-data-grid'
import React from 'react'
import DataGrid from '../../../../../components/DataGrid'
import Page from '../../../../../components/Page'
import Paper from '../../../../../components/Paper'
import { leaveRequest } from '../../../../../__mocks__/__mocks_data__'
import LeaveReauestDetailsDialog from './LeaveRequestDetailsDialog'

export default function LeaveRequestList() {
  const [isOpen, setIsOpen] = React.useState<boolean>(false)
  const handleOpenDialog = () => setIsOpen(true)
  const handleCloseDialog = () => setIsOpen(false)

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
      headerName: 'Nombre de jours',
      flex: 1,
    },
    {
      field: 'typeLeave',
      headerName: 'Type de conge',
      flex: 1,
    },
    {
      field: 'status',
      headerName: 'Etat',
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
          onClick={handleOpenDialog}
        />,
      ],
    },
  ]
  return (
    <Page>
      <Paper>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color='primary'>Liste des demandes</Typography>
        </Stack>
        <DataGrid editMode='cell' columns={COLUMNS} rows={leaveRequest} />
      </Paper>
      <LeaveReauestDetailsDialog isOpen={isOpen} handleCloseDialog={handleCloseDialog} />
    </Page>
  )
}
