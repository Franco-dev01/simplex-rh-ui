import { MarkAsUnread, Visibility } from '@mui/icons-material'
import { Avatar, Stack, Typography } from '@mui/material'
import { GridActionsCellItem } from '@mui/x-data-grid'
import React from 'react'
import DataGrid from '../../../../../components/DataGrid'
import { Dialog } from '../../../../../components/Dialog'
import { taskOfProject } from '../../../../../__mocks__/__mocks_data__'
import simplexLogoImg from '../../../../../assets/images/profile.jpg'
import { TaskDetails } from '../../task/task-details'

export default function TaskListDialog({
  isOpen,
  handleCloseDialog,
}: {
  isOpen: boolean
  handleCloseDialog: () => void
}) {
  const [isDetails, setIsDetails] = React.useState<boolean>(false)

  const COLUMNS = [
    {
      field: 'title',
      headerName: 'Intitule',
      flex: 1,
    },
    {
      field: 'deadline',
      headerName: 'Delais de realisation',
      flex: 1,
    },

    {
      field: 'status',
      headerName: 'Statut',
      flex: 1,
    },

    {
      headerName: 'Actions',
      field: 'actions',
      type: 'actions',
      getActions: ({ row, id }: { row: { id: string }; id: string }) => [
        <GridActionsCellItem
          key={`view-${id}`}
          label='Voir'
          showInMenu
          icon={<Visibility fontSize='small' />}
          onClick={() => setIsDetails(true)}
        />,
        <GridActionsCellItem
          key={`view-${id}`}
          label='marqué comme fait'
          showInMenu
          icon={<MarkAsUnread fontSize='small' />}
        />,
      ],
    },
  ]
  return (
    <Dialog title='' open={isOpen} onClose={handleCloseDialog} actions=''>
      <Stack direction='column' alignItems='center' justifyContent='center' mt={1} mb={1}>
        <Avatar
          alt='Remy Sharp'
          src={simplexLogoImg}
          sx={{
            width: 90,
            height: 90,
            objectFit: 'cover',
            boxShadow: '0px 0px 3px #0877bc',
          }}
        />
        <Typography color='primary' mt={1}>
          {isDetails ? 'DETAIL DE LA TACHE' : 'LISTE DES TACHES'}
        </Typography>
      </Stack>
      {isDetails ? (
        <TaskDetails />
      ) : (
        <DataGrid editMode='cell' columns={COLUMNS} rows={taskOfProject} />
      )}
    </Dialog>
  )
}
