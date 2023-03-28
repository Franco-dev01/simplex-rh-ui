import { Archive, Edit, Visibility } from '@mui/icons-material'
import { GridActionsCellItem } from '@mui/x-data-grid'
import React from 'react'

export default function useCommunicationHistory() {
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

  return { COLUMNS }
}
