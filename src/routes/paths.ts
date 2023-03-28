const ROOTS_AUTH = '/auth'
const ROOTS_DASHBOARD = '/accueil'
const ROOTS_TASK = '/task'
const ROOTS_CONFIGURATION = '/configuration'
const ROOTS_LEAVE_ABSENCE_MANAGEMENT = '/leave-absence-management'
const ROOTS_PERSONNAL_ADMINISTRATION = '/personal-administration'

export function path(root: string, resLint: string) {
  return `${root}${resLint}`
}

export const PATH_DASHBOARD = {
  dashboard: ROOTS_DASHBOARD,
}

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: {
    root: path(ROOTS_AUTH, '/login'),
    chooseProfile: path(ROOTS_AUTH, '/connexion/choix-profil'),
  },
  passwordForgot: {
    root: path(ROOTS_AUTH, '/mot-de-passe-oublie'),
  },
  resetPassword: {
    root: path(ROOTS_AUTH, '/reinitialiser-mot-de-passe'),
  },
}

export const PATH_TASK_MANAGEMENT = {
  task: {
    root: path(ROOTS_TASK, '/list'),
    creation: path(ROOTS_TASK, '/creation'),
  },
  project: {
    root: path(ROOTS_TASK, '/project/list'),
  },
}

export const PATH_CONFIGURATION = {
  typeContract: {
    root: path(ROOTS_CONFIGURATION, '/type-contract/list'),
  },
  typeLeave: {
    root: path(ROOTS_CONFIGURATION, '/type-leave/list'),
  },
  department: {
    root: path(ROOTS_CONFIGURATION, '/department/list'),
  },
  functionCompany: {
    root: path(ROOTS_CONFIGURATION, '/function-company/list'),
  },
}

export const PATH_PERSONNEL_ADMINISTRATION = {
  employee: {
    root: path(ROOTS_PERSONNAL_ADMINISTRATION, '/employee/add'),
  },
  consultationEmployee: {
    root: path(ROOTS_PERSONNAL_ADMINISTRATION, '/consultation-employee/list'),
  },
  communication: {
    root: path(ROOTS_PERSONNAL_ADMINISTRATION, '/communication/list'),
  },
  communicationHistory: {
    root: path(ROOTS_PERSONNAL_ADMINISTRATION, '/communication-history/list'),
  },
}

export const PATH_LEAVE_ABSENCE_MANAGEMENT = {
  leaveRequest: path(ROOTS_LEAVE_ABSENCE_MANAGEMENT, '/leave-request'),
  balanceRequest: path(ROOTS_LEAVE_ABSENCE_MANAGEMENT, '/balance-request'),
  demandManagement: path(ROOTS_LEAVE_ABSENCE_MANAGEMENT, '/demand-management'),
}

export const PATH_OTHER = {
  notFound: '/404',
}
