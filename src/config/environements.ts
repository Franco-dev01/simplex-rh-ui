import { PATH_DASHBOARD } from '../routes/paths'
import { getApisUrl } from '../utils/getApisUrl'

const hostname = window && window.location && window.location.hostname

const { coreApiHost, authApiHost } = getApisUrl(hostname)

export const PAPPERS_URL = process.env.REACT_APP_PAPPERS_API_URL as string

export const PAPPERS_API_KEY = process.env.REACT_APP_PAPPERS_API_KEY as string

export const isDev = () => process.env.NODE_ENV === 'development'

export const CORE_API_URL = `${coreApiHost}`

export const AUTH_API_URL = `${authApiHost}`

// ROOT PATH AFTER LOGIN SUCCESSFUL
export const PATH_AFTER_LOGIN = PATH_DASHBOARD.dashboard
