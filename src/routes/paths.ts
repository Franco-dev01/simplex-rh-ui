const ROOTS_AUTH = '/auth'
const ROOTS_DASHBOARD = '/accueil'
const ROOTS_TASK = '/task'

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

export const PATH_TASK = {
  list: {
    root: path(ROOTS_TASK, '/list'),
  },
}

export const PATH_OTHER = {
  notFound: '/404',
}
