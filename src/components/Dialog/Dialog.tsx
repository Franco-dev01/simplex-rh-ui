import { StyledDialog } from './Dialog.styles'
import { DialogActions, DialogContent, DialogTitle } from '@mui/material'
import { DialogProps } from './Dialog.types'

const Dialog = ({
  title,
  paperProps,
  container,
  open,
  onClose,
  children,
  actions,
}: DialogProps) => (
  <StyledDialog PaperProps={paperProps} container={container} open={open} onClose={onClose}>
    <DialogTitle>{title}</DialogTitle>
    <DialogContent>{children}</DialogContent>
    <DialogActions>{actions}</DialogActions>
  </StyledDialog>
)

export default Dialog
