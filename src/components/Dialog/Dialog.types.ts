import { ReactNode } from 'react'
import { PaperProps } from '@mui/material'

export type DialogProps = {
  children: ReactNode
  open: boolean
  container?: () => null | HTMLElement
  onClose: () => void
  paperProps?: PaperProps
  title: ReactNode
  actions: ReactNode
}
