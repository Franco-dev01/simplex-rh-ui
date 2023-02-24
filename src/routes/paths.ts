const ROOTS_AUTH = '/auth'
const ROOTS_DASHBOARD = '/accueil'

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

/* export const PATH_TAX_DIRECTORY = {
  root: ROOT_TAX_DIRECTORY,
  taxRegimes: {
    list: path(ROOT_TAX_DIRECTORY, '/regimes-fiscaux'),
    creation: path(ROOT_TAX_DIRECTORY, '/regimes-fiscaux/creation'),
    edition: (taxRegimeId: string) =>
      path(ROOT_TAX_DIRECTORY, `/regimes-fiscaux/${taxRegimeId}/edition`),
  },
  taxServices: {
    list: path(ROOT_TAX_DIRECTORY, '/services-impots'),
    creation: path(ROOT_TAX_DIRECTORY, '/services-impots/creation'),
    edition: (taxServiceId: string) =>
      path(ROOT_TAX_DIRECTORY, `/services-impots/${taxServiceId}/edition`),
  },
  generalTaxOffice: {
    list: path(ROOT_TAX_DIRECTORY, '/direction-generale-impots'),
    creation: path(ROOT_TAX_DIRECTORY, '/direction-generale-impots/creation'),
    edition: (generalTaxOfficeId: string) =>
      path(ROOT_TAX_DIRECTORY, `/direction-generale-impots/${generalTaxOfficeId}/edition`),
  },
};*/

export const PATH_OTHER = {
  notFound: '/404',
}
