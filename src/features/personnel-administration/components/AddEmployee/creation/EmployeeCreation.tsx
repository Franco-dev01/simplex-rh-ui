import EmployeeForm from './EmployeeForm'
import { FKProvider } from '../../../../../components/Formik'
import Paper from '../../../../../components/Paper'
import Page from '../../../../../components/Page'

// ----------------------------------------------------------------------

const EmployeeFormCreation = () => {
  return (
    <Page>
      <Paper>
        <FKProvider value={{}} onSubmit={() => ({})}>
          <EmployeeForm />
        </FKProvider>
      </Paper>
    </Page>
  )
}

export default EmployeeFormCreation
