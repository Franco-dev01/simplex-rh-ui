import { Button, Stack } from '@mui/material'
import React from 'react'
import { FKProvider } from '../../../../../components/Formik'
import Page from '../../../../../components/Page'
import Paper from '../../../../../components/Paper'
import CreateProjectDialog from '../Dialog/CreateProjectDialog'
import TaskCreationForm from './TaskCreationForm'

// import { isopen, handleCloseDialog, handleopenDialog } from '../../../hooks'
// ----------------------------------------------------------------------

const TaskCreation = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false)
  const handleCloseDialog = () => {
    setIsOpen(false)
  }
  const handleOpenDialog = () => {
    setIsOpen(true)
  }
  return (
    <Page>
      <Paper>
        <Stack direction='row' alignItems='center' justifyContent='flex-end' sx={{ px: 2 }}>
          <Button onClick={handleOpenDialog}>CREATION D UN PROJET</Button>
        </Stack>

        <FKProvider value={{}} onSubmit={() => ({})}>
          <TaskCreationForm />
        </FKProvider>
      </Paper>
      <CreateProjectDialog isOpen={isOpen} handleCloseDialog={handleCloseDialog} />
    </Page>
  )
}

export default TaskCreation
