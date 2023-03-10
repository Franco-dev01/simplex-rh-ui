import {
  Assignment,
  HolidayVillage,
  AdminPanelSettings,
  Settings,
  Dashboard,
} from '@mui/icons-material'
import React from 'react'
import { PATH_TASK } from '../../../routes/paths'

const navConfig = [
  {
    items: [
      {
        title: 'Administration du personnel',
        icon: <AdminPanelSettings />,
        path: '#',
        children: [
          {
            title: 'Ajouter un employer',
            path: 'personal-administration/employee/add',
          },
          {
            title: 'Consulter fiche employer',
            path: 'personal-administration/consultation-employee/list',
          },
          {
            title: 'Faire une communiquer',
            path: 'personal-administration/communication/list',
          },
          {
            title: 'Faire employer',
            path: 'personal-administration/communication-history/list',
          },
        ],
      },
      {
        title: 'Gestion des conges et absence',
        icon: <AdminPanelSettings />,
        path: '#',
        children: [
          {
            title: 'Employes',
            path: '#',
          },
        ],
      },
      {
        title: 'Gestion des taches',
        icon: <AdminPanelSettings />,
        path: '#',
        children: [
          {
            title: 'Employes',
            path: '#',
          },
        ],
      },
      {
        title: 'Configuration',
        icon: <Settings />,
        path: 'configuration/',
        children: [
          {
            title: 'Type de contrat',
            path: 'configuration/type-contract/list',
          },
          {
            title: 'Type de conger',
            path: 'configuration/type-leave/list',
          },
          {
            title: 'Fonction dans l entreprise',
            path: 'configuration/function-company/list',
          },
          {
            title: 'Departement',
            path: 'configuration/department/list',
          },
        ],
      },
    ],
  },
]

export default navConfig
