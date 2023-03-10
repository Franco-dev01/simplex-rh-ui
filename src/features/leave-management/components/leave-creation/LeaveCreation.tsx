import { Stack, Typography } from '@mui/material'
import { FKProvider } from '../../../../components/Formik'
import Page from '../../../../components/Page'
import Paper from '../../../../components/Paper'
import LeaveCreationForm from './LeaveCreationForm'
import simplexLogo from '../../../../assets/logo/Simplex_logoA.jpg'

// ----------------------------------------------------------------------

const LeaveCreation = () => {
  return (
    <Page>
      <Paper>
        <Stack direction='row' alignItems='center' justifyContent='space-between' sx={{ px: 5 }}>
          <Typography>Nouvelle demande</Typography>
          <img src={simplexLogo} width={100} height={100} />
        </Stack>

        <FKProvider value={{}} onSubmit={() => ({})}>
          <LeaveCreationForm />
        </FKProvider>
      </Paper>
    </Page>
  )
}

export default LeaveCreation
