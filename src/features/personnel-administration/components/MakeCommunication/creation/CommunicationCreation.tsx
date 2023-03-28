import { Stack, Typography } from '@mui/material'

import CommunicationForm from './CommunicationForm'
import Paper from '../../../../../components/Paper'
import { FKProvider } from '../../../../../components/Formik'

// ----------------------------------------------------------------------

const CommunicationCreation = () => {
  return (
    <Paper>
      <Stack direction='row' alignItems='center' justifyContent='space-between' sx={{ px: 2 }}>
        <Typography sx={{ color: '#4c5d70' }}>ENREGISTREMENT</Typography>
      </Stack>

      <FKProvider value={{}} onSubmit={() => ({})}>
        <CommunicationForm />
      </FKProvider>
    </Paper>
  )
}

export default CommunicationCreation
