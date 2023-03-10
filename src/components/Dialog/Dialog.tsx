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
  'data-testid': dataTestid,
}: DialogProps) => (
  <StyledDialog
    data-testid={dataTestid}
    PaperProps={paperProps}
    container={container}
    open={open}
    onClose={onClose}
  >
    <DialogTitle data-testid='dialog-title'>{title}</DialogTitle>
    <DialogContent data-testid='dialog-content'>{children}</DialogContent>
    <DialogActions data-testid='dialog-actions'>{actions}</DialogActions>
  </StyledDialog>
)

export default Dialog
