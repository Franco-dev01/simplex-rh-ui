import { Archive, Edit, Visibility } from '@mui/icons-material'
import { GridActionsCellItem } from '@mui/x-data-grid'
import React from 'react'

import DataGrid from '../../../../../components/DataGrid'
import Page from '../../../../../components/Page'
import Paper from '../../../../../components/Paper'
import { communicationHistory } from '../../../../../__mocks__/__mocks_data__'
import CommunicationHistoryDetailsDialog from '../Dialog/CommunicationHistoryDetailsDialog'
import CommunicationHistoryEditDialog from '../Dialog/CommunicationHistoryEditDialog'
import CommunicationHistoryHeader from './CommunicationHistoryHeader'

export default function CommunicationHistory() {
  const [isOpen, setIsOpen] = React.useState<boolean>(false)
  const handleOpenDialog = () => setIsOpen(true)
  const handleCloseDialog = () => setIsOpen(false)

  const [isOpenEdit, setIsOpenEdit] = React.useState<boolean>(false)
  const handleOpenDialogEdit = () => setIsOpenEdit(true)
  const handleCloseDialogEdit = () => setIsOpenEdit(false)

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
          icon={<Visibility fontSize='small' />}
          onClick={handleOpenDialog}
        />,
        <GridActionsCellItem
          key={`view-${id}`}
          label='Editer'
          showInMenu
          icon={<Edit fontSize='small' />}
          onClick={handleOpenDialogEdit}
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
  return (
    <Page>
      <Paper>
        <CommunicationHistoryHeader />
        <DataGrid editMode='cell' columns={COLUMNS} rows={communicationHistory} />
      </Paper>
      <CommunicationHistoryDetailsDialog isOpen={isOpen} handleCloseDialog={handleCloseDialog} />
      <CommunicationHistoryEditDialog
        isOpen={isOpenEdit}
        handleCloseDialog={handleCloseDialogEdit}
      />
    </Page>
  )
}
