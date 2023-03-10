import EmployeeForm from './EmployeeForm'
import { FKProvider } from '../../../../../components/Formik'
import Paper from '../../../../../components/Paper'
import Page from '../../../../../components/Page'
import { Stack, Typography } from '@mui/material'
import simplexLogo from '../../../../../assets/logo/Simplex_logoA.jpg'
// ----------------------------------------------------------------------

const EmployeeFormCreation = () => {
  return (
    <Page>
      <Paper>
        <Stack direction='row' alignItems='center' justifyContent='space-between' sx={{ px: 5 }}>
          <Typography>Nouveau employer</Typography>
          <img src={simplexLogo} width={100} height={100} />
        </Stack>
        <FKProvider value={{}} onSubmit={() => ({})}>
          <EmployeeForm />
        </FKProvider>
      </Paper>
    </Page>
  )
}

export default EmployeeFormCreation
