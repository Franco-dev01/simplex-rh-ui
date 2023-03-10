import { styled } from '@mui/material/styles'
import { DataGrid as MuiDataGrid, gridClasses } from '@mui/x-data-grid'

import { pxToRem } from '../../utils/getFontValues'

const StyledDataGrid = styled(MuiDataGrid)(({ theme }) => ({
  border: 'none',
  color: theme.palette.secondary.contrastText,
  fontWeight: 'medium',
  fontSize: pxToRem(12),
  [`& .${gridClasses.columnHeaders}`]: {
    borderRadius: pxToRem(10),
  },
  [`& .${gridClasses.cell}, & .${gridClasses.columnHeaders}`]: {
    border: 'none',
  },
  [`& .${gridClasses.columnHeadersInner}`]: {
    background: theme.palette.primary.light,
  },
  [`& .${gridClasses.row}:nth-of-type(even)`]: {
    background: theme.palette.grey[100],
  },
  [`& .${gridClasses.columnSeparator}`]: {
    display: 'none',
  },
  '& .MuiCheckbox-root .MuiSvgIcon-root': {
    fontSize: 'large',
  },
}))

export default StyledDataGrid
