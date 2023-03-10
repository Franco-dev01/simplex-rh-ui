import { Dialog, dialogClasses, styled } from '@mui/material'

export const StyledDialog = styled(Dialog)({
  [`& .${dialogClasses.container}`]: {
    height: 'inherit',
  },
  [`& .${dialogClasses.paper}`]: {
    top: 50,
    flexGrow: 1,
  },
})
