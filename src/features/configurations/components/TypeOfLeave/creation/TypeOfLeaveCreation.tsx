import TypeOfLeaveForm from './TypeOfLeaveForm'
import Paper from '../../../../../components/Paper'
import { FKProvider } from '../../../../../components/Formik'
import { Stack, Typography } from '@mui/material'

// ----------------------------------------------------------------------

const TypeOfLeaveCreation = () => {
  return (
    <Paper>
      <Stack direction='row' alignItems='center' justifyContent='space-between' sx={{ px: 5 }}>
        <Typography>Enregistrement</Typography>
      </Stack>
      <FKProvider value={{}} onSubmit={() => ({})}>
        <TypeOfLeaveForm />
      </FKProvider>
    </Paper>
  )
}

export default TypeOfLeaveCreation
