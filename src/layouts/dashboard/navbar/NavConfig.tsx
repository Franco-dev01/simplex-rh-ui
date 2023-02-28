import {
  Assignment,
  HolidayVillage,
  AdminPanelSettings,
  Settings,
  Dashboard,
} from '@mui/icons-material'
import React from 'react'

const navConfig = [
  {
    items: [
      {
        title: 'Tableau de bord',
        icon: <Dashboard />,
        path: '#',
        available: false,
      },
      {
        title: 'Gestion des taches',
        icon: <Assignment />,
        path: '#',
        available: false,
      },
      {
        title: 'Gestion des conges',
        icon: <HolidayVillage />,
        path: '#',
        available: false,
      },
      {
        title: 'Administration du personnel',
        icon: <AdminPanelSettings />,
        path: '#',
        available: false,
      },
      {
        title: 'Configuration',
        icon: <Settings />,
        path: '#',
        available: false,
      },
    ],
  },
]

export default navConfig
