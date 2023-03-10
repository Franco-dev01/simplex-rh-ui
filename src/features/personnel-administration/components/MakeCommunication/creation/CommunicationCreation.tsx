import { Stack, Typography } from '@mui/material'

import CommunicationForm from './CommunicationForm'
import Paper from '../../../../../components/Paper'
import { FKProvider } from '../../../../../components/Formik'

// ----------------------------------------------------------------------

const CommunicationCreation = () => {
  return (
    <Paper>
      <Stack direction='row' alignItems='center' justifyContent='space-between' sx={{ px: 5 }}>
        <Typography>Enregistrement</Typography>
      </Stack>

      <FKProvider value={{}} onSubmit={() => ({})}>
        <CommunicationForm />
      </FKProvider>
    </Paper>
  )
}

export default CommunicationCreation
