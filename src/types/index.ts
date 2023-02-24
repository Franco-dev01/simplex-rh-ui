import {
  PaperProps,
  DialogProps,
  StepperProps,
  DialogTitleProps,
  DialogContentProps,
  SelectProps as MuiSelectProps,
} from '@mui/material'

import { InputBaseProps } from '@mui/material/InputBase'
import { SxProps } from '@mui/material/styles'
import { FieldProps } from 'formik/dist/Field'
import React, { ReactNode } from 'react'
import { ActionMeta, Props as RSSelectProps } from 'react-select'
import { LoginCredentialsDTO } from '../features/auth/api/login'

export type TActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key
      }
    : {
        type: Key
        payload: M[Key]
      }
}

export type TAuthUser = null | Record<string, any>

export type TAuthState = {
  isAuthenticated: boolean
  isInitialized: boolean
  user: TAuthUser
}

export type TJWTContextType = {
  isAuthenticated: boolean
  isInitialized: boolean
  method: string
  user: TAuthUser
  loginWithEmailAndPassword: (data: LoginCredentialsDTO) => Promise<any>
  loginWithIdProfil: (id: string) => Promise<any>
  logout: () => Promise<void>
}

export type BaseInputProps = InputBaseProps

export type TStepperProps = {
  stepperLabel: string[]
  activeStep: number
  completed: {
    [k: number]: boolean
  }
} & StepperProps

export interface TextFieldProps extends InputBaseProps {
  label?: string
  controlId?: string
  helperText?: any
  inputLabelProps?: object
  InputProps?: object
}

export type FieldBaseProps = {
  controlId: string
  required: boolean
  placeholder: string
  name: string
  formHelperText: string
  label: string | React.ReactNode
  xs?: SxProps
  ariaLabel?: string
  fontSize?: string
}

export type Options = {
  value: any
  label: string
}

export type ProfileMenuProps = {
  items: TMenuItem[]
  imgSrc: string
  name: string
}

export type ModalProps = {
  dialogTitleProps?: DialogTitleProps
  title?: ReactNode
  children?: ReactNode
  contentProps?: DialogContentProps
  onClose?: React.MouseEventHandler<HTMLButtonElement>
  width?: string | number
} & DialogProps

export type TMenuItem = {
  icon: JSX.Element
  label: string
  onClick?: React.MouseEventHandler<HTMLLIElement>
}

export type TPaperProps = {
  children: React.ReactNode
  onClose?: (args?: any) => void
  isClose: boolean
} & PaperProps

export type ModalProviderProps = {
  children: React.ReactNode
}

export type ReactSelectProps = RSSelectProps & {
  size?: 'medium' | 'small'
  label?: ReactNode
  helperText?: any
  controlId?: string
  fullWidth?: boolean
  error?: boolean
  onChange?: (newValue: unknown, actionMeta: ActionMeta<unknown>) => void
}

export type SelectProps = {
  options?: Options[]
  label?: ReactNode
  helperText?: any
  controlId?: string
  fullWidth?: boolean
} & MuiSelectProps

export type FormikReactSelectFieldProps = Omit<ReactSelectProps, 'component' | 'type'> &
  Partial<FieldProps>

export type BaseEntity = {
  id: string
  createdAt: number
  updateAt: number
}
