import Axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'

import { AUTH_API_URL, CORE_API_URL } from '../config/environements'

const axiosCoreApi = Axios.create({
  baseURL: CORE_API_URL,
})

axiosCoreApi.interceptors.request.use(
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  (response: AxiosRequestConfig<any>) => response,
  (error: AxiosError) => Promise.reject(error),
)

axiosCoreApi.interceptors.response.use(
  (response: AxiosResponse<any>) => response,
  (error: AxiosError) => Promise.reject(error.response && error.response.data),
)

/*
 * axios authenfiction api url
 */
const axiosAuthApi = Axios.create({
  baseURL: AUTH_API_URL,
})

axiosAuthApi.interceptors.request.use(
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  (response: AxiosRequestConfig<any>) => response,
  (error: AxiosError) => Promise.reject(error),
)

axiosAuthApi.interceptors.response.use(
  (response: AxiosResponse<any>) => response,
  (error: AxiosError) => Promise.reject(error.response && error.response.data),
)

export { axiosCoreApi, axiosAuthApi }
