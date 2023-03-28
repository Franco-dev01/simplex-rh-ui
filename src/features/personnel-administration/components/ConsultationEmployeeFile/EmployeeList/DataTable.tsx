import { AccountTree } from '@mui/icons-material'
import { Paper, Stack, Table, TableBody, TableCell, TableRow, Typography } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import React from 'react'
import EmployeeDetailsDialog from '../Dialog/EmployeeDetailsDialog'
import EmployeeEditDialog from '../Dialog/EmployeeEditDialog'
import EmployeeEvolvedDialog from '../Dialog/EmployeeEvolvedDialog'
import EmployeeMenu from './EmployeeMenu'

export default function DataTable({ rows }: any) {
  const [isOpen, setIsOpen] = React.useState<boolean>(false)
  const handleOpenDialog = () => setIsOpen(true)
  const handleCloseDialog = () => setIsOpen(false)

  const [isOpenEdit, setIsOpenEdit] = React.useState<boolean>(false)
  const handleOpenDialogEdit = () => setIsOpenEdit(true)
  const handleCloseDialogEdit = () => setIsOpenEdit(false)

  const [isOpenEvolved, setIsOpenEvolved] = React.useState<boolean>(false)
  const handleOpenDialogEvolved = () => setIsOpenEvolved(true)
  const handleCloseDialogEvolved = () => setIsOpenEvolved(false)
  return (
    <Table aria-label='collapsible table'>
      <TableBody>
        <TableRow>
          {rows.map(
            (
              row: {
                profileImg: string
                firstname: string
                lastname: string
                post: string
                color: string
                backgroud: string
              },
              index: number,
            ) => (
              <TableCell key={index} style={{ overflow: 'scroll' }}>
                <Paper
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    background: '#0877bc',
                    borderRadius: '10px',
                    justifyContent: 'space-between',
                    p: 2,
                    height: 150,
                    margin: 'auto',
                  }}
                >
                  <Stack direction='row' justifyContent='space-between' alignItems='center'>
                    <Avatar src={row.profileImg} />
                    <EmployeeMenu
                      {...{ handleOpenDialog, handleOpenDialogEdit, handleOpenDialogEvolved }}
                    />
                  </Stack>

                  <Stack justifyContent='space-between' alignItems='flex-start' mt={2}>
                    <Typography fontWeight='bold' color='white'>
                      {row.firstname.toLocaleUpperCase()}
                    </Typography>
                  </Stack>

                  <Stack justifyContent='space-between' alignItems='flex-start'>
                    <Typography fontSize='12px' sx={{ color: '#b0bec5' }}>
                      {row.post}
                    </Typography>
                  </Stack>
                </Paper>
              </TableCell>
            ),
          )}
        </TableRow>
      </TableBody>
      <EmployeeDetailsDialog isOpen={isOpen} handleCloseDialog={handleCloseDialog} />
      <EmployeeEditDialog isOpen={isOpenEdit} handleCloseDialog={handleCloseDialogEdit} />
      <EmployeeEvolvedDialog isOpen={isOpenEvolved} handleCloseDialog={handleCloseDialogEvolved} />
    </Table>
  )
}
