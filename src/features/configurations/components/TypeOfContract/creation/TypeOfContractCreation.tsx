import TypeOfContractForm from './TypeOfContractForm'

import Paper from '../../../../../components/Paper'
import { FKProvider } from '../../../../../components/Formik'
import { Stack, Typography } from '@mui/material'

// ----------------------------------------------------------------------

const TypeOfContractCreation = () => {
  return (
    <Paper>
      <Stack direction='row' alignItems='center' justifyContent='space-between' sx={{ px: 5 }}>
        <Typography>Enregistrement</Typography>
      </Stack>
      <FKProvider value={{}} onSubmit={() => ({})}>
        <TypeOfContractForm />
      </FKProvider>
    </Paper>
  )
}

export default TypeOfContractCreation
