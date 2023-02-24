import { AxiosResponse } from 'axios'
import { useMutation } from 'react-query'

import { axiosAuthApi } from '../../../lib/axios'
import { MutationConfig } from '../../../lib/react-query'

import { TPasswordDTO } from '../types'

export const resetPassword = async ({ data }: TPasswordDTO): Promise<AxiosResponse> => {
  const response = await axiosAuthApi.put('/auth/reset-passwords', data)
  return response.data
}

type UseResetPasswordOptions = {
  config?: MutationConfig<typeof resetPassword>
}

export const useResetPassword = ({ config }: UseResetPasswordOptions = {}) =>
  useMutation(resetPassword, config)
