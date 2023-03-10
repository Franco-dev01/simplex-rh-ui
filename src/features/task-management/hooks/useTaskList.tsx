import React from 'react'

const useTaskList = () => {
  const COLUMNS = [
    {
      field: 'code',
      headerName: 'Code',
      hideSortIcons: true,
      flex: 1,
    },
    {
      field: 'companyName',
      headerName: 'Raison sociale',
      flex: 1,
    },
    {
      field: 'email',
      headerName: 'Email',
      flex: 1,
    },
    {
      field: 'inProgress',
      headerName: 'En cours',
      flex: 1,
    },
    {
      field: 'late',
      headerName: 'Retards',
      flex: 1,
    },
    {
      field: 'solde',
      headerName: 'Solde',
      flex: 1,
    },
    {
      field: 'remittance',
      headerName: 'Remise',
      flex: 1,
    },
    {
      field: 'status',
      headerName: 'Satus',
      flex: 1,
    },
    {
      field: 'actions',
      type: 'actions',
      getActions: () => [],
    },
  ]

  return { COLUMNS }
}

export default useTaskList
