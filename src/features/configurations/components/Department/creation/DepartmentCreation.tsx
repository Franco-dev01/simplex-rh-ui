import { Stack, Typography } from '@mui/material'

import DepartmentForm from './DepartmentForm'
import Paper from '../../../../../components/Paper'
import { FKProvider } from '../../../../../components/Formik'

// ----------------------------------------------------------------------

const DepartmentCreation = () => {
  return (
    <Paper>
      <Stack direction='row' alignItems='center' justifyContent='space-between' px={2}>
        <Typography sx={{ color: '#4c5d70' }}>ENREGISTREMENT</Typography>
      </Stack>

      <FKProvider value={{}} onSubmit={() => ({})}>
        <DepartmentForm />
      </FKProvider>
    </Paper>
  )
}

export default DepartmentCreation
