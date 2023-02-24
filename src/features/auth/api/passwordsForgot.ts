import { AxiosResponse } from 'axios'
import { useMutation } from 'react-query'

import { axiosAuthApi } from '../../../lib/axios'
import { MutationConfig } from '../../../lib/react-query'

export type ForgotPasswordDto = {
  email: string
}

export const forgotPassword = async (data: ForgotPasswordDto): Promise<AxiosResponse> => {
  const response = await axiosAuthApi.post('/auth/forgotten-passwords', data)
  return response.data
}

type UseForgotPasswordOptions = {
  config?: MutationConfig<typeof forgotPassword>
}

export const useForgotPassword = ({ config }: UseForgotPasswordOptions = {}) =>
  useMutation(forgotPassword, config)
