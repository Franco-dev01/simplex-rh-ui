import Paper from '../../../../../components/Paper'
import { FKProvider } from '../../../../../components/Formik'
import FunctionInCompanyForm from './FunctionInCompanyForm'
import { Stack, Typography } from '@mui/material'

// ----------------------------------------------------------------------

const FunctionInCompanyCreation = () => {
  return (
    <Paper>
      <Stack direction='row' alignItems='center' justifyContent='space-between' sx={{ px: 2 }}>
        <Typography sx={{ color: '#4c5d70' }}>ENREGISTREMENT</Typography>
      </Stack>
      <FKProvider value={{}} onSubmit={() => ({})}>
        <FunctionInCompanyForm />
      </FKProvider>
    </Paper>
  )
}

export default FunctionInCompanyCreation
