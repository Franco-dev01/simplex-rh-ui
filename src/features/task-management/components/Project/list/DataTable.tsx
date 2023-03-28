import { AccountTree } from '@mui/icons-material'
import { Paper, Stack, Table, TableBody, TableCell, TableRow, Typography } from '@mui/material'
import React from 'react'
import { TaskListDialog } from '../Dialog'

export default function DataTable({ rows }: any) {
  const [isOpen, setIsOpen] = React.useState<boolean>(false)
  const handleCloseDialog = () => {
    setIsOpen(false)
  }
  const handleOpenDialog = () => {
    setIsOpen(true)
  }
  return (
    <Table aria-label='collapsible table'>
      <TableBody>
        <TableRow>
          {rows.map((row: { title: string; createAt: string }, index: number) => (
            <TableCell key={index} style={{ overflow: 'scroll' }}>
              <Paper
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  background: '#0877bc',
                  justifyContent: 'space-between',
                  '&: hover': {
                    cursor: 'pointer',
                  },
                  p: 2,
                  height: 150,
                  margin: 'auto',
                }}
                onClick={handleOpenDialog}
              >
                <Stack direction='row' justifyContent='space-between' alignItems='center'>
                  <Typography color='white'>
                    <AccountTree />
                  </Typography>
                  <Typography color='white'>Detais</Typography>
                </Stack>

                <Stack justifyContent='space-between' alignItems='flex-start'>
                  <Typography fontWeight='bold' color='white'>
                    {row.title}
                  </Typography>
                </Stack>
                <Stack justifyContent='space-between' alignItems='flex-start'>
                  <Typography color='white'>{row.createAt}</Typography>
                </Stack>
              </Paper>
            </TableCell>
          ))}
        </TableRow>
      </TableBody>
      <TaskListDialog isOpen={isOpen} handleCloseDialog={handleCloseDialog} />
    </Table>
  )
}
