import {
  Assignment,
  HolidayVillage,
  AdminPanelSettings,
  Settings,
  Dashboard,
} from '@mui/icons-material'
import React from 'react'
<<<<<<< Updated upstream
=======
import {
  PATH_CONFIGURATION,
  PATH_LEAVE_ABSENCE_MANAGEMENT,
  PATH_PERSONNEL_ADMINISTRATION,
  PATH_TASK_MANAGEMENT,
} from '../../../routes/paths'
>>>>>>> Stashed changes

const navConfig = [
  {
    items: [
      {
<<<<<<< Updated upstream
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
=======
        title: 'Administration du personnel',
        icon: <AdminPanelSettings />,
        path: PATH_PERSONNEL_ADMINISTRATION.employee.root,
        children: [
          {
            title: 'Ajouter un employé',
            path: PATH_PERSONNEL_ADMINISTRATION.employee.root,
          },
          {
            title: 'Consulter fiche employé',
            path: PATH_PERSONNEL_ADMINISTRATION.consultationEmployee.root,
          },
          {
            title: 'Faire un communiqué',
            path: PATH_PERSONNEL_ADMINISTRATION.communication.root,
          },
          {
            title: 'Historique des communiqués',
            path: PATH_PERSONNEL_ADMINISTRATION.communicationHistory.root,
          },
        ],
      },
      {
        title: 'Gestion des congés et absences',
        icon: <AdminPanelSettings />,
        path: PATH_LEAVE_ABSENCE_MANAGEMENT.leaveRequest,
        children: [
          {
            title: 'Demande de congé',
            path: PATH_LEAVE_ABSENCE_MANAGEMENT.leaveRequest,
          },
          {
            title: 'Bilan des demandes',
            path: PATH_LEAVE_ABSENCE_MANAGEMENT.balanceRequest,
          },
          {
            title: 'Gestion des demandes',
            path: PATH_LEAVE_ABSENCE_MANAGEMENT.demandManagement,
          },
        ],
      },
      {
        title: 'Gestion des tâches',
        icon: <AdminPanelSettings />,
        path: '#',
        children: [
          {
            title: 'Ajoute de tâche',
            path: PATH_TASK_MANAGEMENT.task.creation,
          },
          {
            title: 'Liste des projets',
            path: PATH_TASK_MANAGEMENT.project.root,
          },
        ],
>>>>>>> Stashed changes
      },
      {
        title: 'Configuration',
        icon: <Settings />,
<<<<<<< Updated upstream
        path: '#',
        available: false,
=======
        path: PATH_CONFIGURATION.department.root,
        children: [
          {
            title: 'Type de contrat',
            path: PATH_CONFIGURATION.typeContract.root,
          },
          {
            title: 'Type de congé',
            path: PATH_CONFIGURATION.typeLeave.root,
          },
          {
            title: 'Fonction dans l   entreprise',
            path: PATH_CONFIGURATION.functionCompany.root,
          },
          {
            title: 'Departement',
            path: PATH_CONFIGURATION.department.root,
          },
        ],
>>>>>>> Stashed changes
      },
    ],
  },
]

export default navConfig
