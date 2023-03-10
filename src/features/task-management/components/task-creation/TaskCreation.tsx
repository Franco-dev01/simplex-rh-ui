import { Stack, Typography } from '@mui/material'
import { FKProvider } from '../../../../components/Formik'
import Page from '../../../../components/Page'
import Paper from '../../../../components/Paper'
import TaskCreationForm from './TaskCreationForm'
import simplexLogo from '../../../../assets/logo/Simplex_logoA.jpg'

// ----------------------------------------------------------------------

const TaskCreation = () => {
  return (
    <Page>
      <Paper>
        <Stack direction='row' alignItems='center' justifyContent='space-between' sx={{ px: 5 }}>
          <Typography>Nouvelle tache</Typography>
          <img src={simplexLogo} width={100} height={100} />
        </Stack>

        <FKProvider value={{}} onSubmit={() => ({})}>
          <TaskCreationForm />
        </FKProvider>
      </Paper>
    </Page>
  )
}

export default TaskCreation
