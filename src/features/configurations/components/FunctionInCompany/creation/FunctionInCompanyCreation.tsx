import Paper from '../../../../../components/Paper'
import { FKProvider } from '../../../../../components/Formik'
import FunctionInCompanyForm from './FunctionInCompanyForm'
import { Stack, Typography } from '@mui/material'

// ----------------------------------------------------------------------

const FunctionInCompanyCreation = () => {
  return (
    <Paper>
      <Stack direction='row' alignItems='center' justifyContent='space-between' sx={{ px: 5 }}>
        <Typography>Enregistrement</Typography>
      </Stack>
      <FKProvider value={{}} onSubmit={() => ({})}>
        <FunctionInCompanyForm />
      </FKProvider>
    </Paper>
  )
}

export default FunctionInCompanyCreation
