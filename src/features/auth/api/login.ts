import { AxiosResponse } from 'axios'
import { useMutation } from 'react-query'

import { axiosAuthApi } from '../../../lib/axios'
import { MutationConfig } from '../../../lib/react-query'
import { storage } from '../../../utils/storage'

export type LoginCredentialsDTO = {
  login: string
  password: string
}

export const loginWithCredentials = async (data: LoginCredentialsDTO): Promise<AxiosResponse> => {
  const response = await axiosAuthApi.post('/auth/login', data)
  return response.data
}

export const loginWithAccessTokenAndIdAccount = async (id: string): Promise<AxiosResponse> => {
  const response = await axiosAuthApi.get(`/auth/${id}`, {
    headers: {
      token: storage.getAccessToken(),
    },
  })
  return response.data
}

type UseLoginWithAccessTokenAndIdAccountOptions = {
  config?: MutationConfig<typeof loginWithAccessTokenAndIdAccount>
}

export const useLoginWithAccessTokenAndIdAccount = ({
  config,
}: UseLoginWithAccessTokenAndIdAccountOptions = {}) =>
  useMutation(loginWithAccessTokenAndIdAccount, config)
