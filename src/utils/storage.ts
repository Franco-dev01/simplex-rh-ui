const storagePrefix = 'simplex-rh'

const storage = {
  // ressources token
  getIdToken: () => JSON.parse(window.localStorage.getItem(`${storagePrefix}id_token`) as string),
  setIdToken: (idToken: string) => {
    window.localStorage.setItem(`${storagePrefix}id_token`, JSON.stringify(idToken))
  },
  clearIdToken: () => {
    window.localStorage.removeItem(`${storagePrefix}id_token`)
  },
  // auth token
  getAccessToken: () =>
    JSON.parse(window.localStorage.getItem(`${storagePrefix}access_token`) as string),
  setAccessToken: (accessToken: string) => {
    window.localStorage.setItem(`${storagePrefix}access_token`, JSON.stringify(accessToken))
  },
  clearAccessToken: () => {
    window.localStorage.removeItem(`${storagePrefix}access_token`)
  },
  // account
  getAccount: () => JSON.parse(window.localStorage.getItem(`${storagePrefix}account`) as any),
  setAccount: (account: Record<string, any>) => {
    window.localStorage.setItem(`${storagePrefix}account`, JSON.stringify(account))
  },
  clearAccount: () => {
    window.localStorage.removeItem(`${storagePrefix}account`)
  },
}

export { storage }
