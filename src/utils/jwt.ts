import jwtDecode from 'jwt-decode'
import { QueryCache } from 'react-query'

import { axiosAuthApi, axiosCoreApi } from '../lib/axios'
import { storage } from './storage'

const queryCache = new QueryCache()

const isValidToken = (idToken: string) => {
  if (!idToken) {
    return false
  }
  const decoded = jwtDecode<{ exp: number }>(idToken)
  const currentTime = Date.now() / 1000
  return decoded.exp > currentTime
}

const setSession = (idToken: string | null) => {
  if (idToken) {
    storage.setIdToken(idToken)

    axiosCoreApi.defaults.headers.common.Authorization = `Bearer ${idToken}`
    axiosAuthApi.defaults.headers.common.Authorization = `Bearer ${idToken}`
  } else {
    queryCache.clear()
    storage.clearAccount()
    storage.clearIdToken()
    storage.clearAccessToken()

    delete axiosCoreApi.defaults.headers.common.Authorization
    delete axiosAuthApi.defaults.headers.common.Authorization
  }
}

export { isValidToken, setSession }
