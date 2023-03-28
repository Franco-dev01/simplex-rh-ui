import Page from '../../../../components/Page'
import Paper from '../../../../components/Paper'
import { FKProvider } from '../../../../components/Formik'
import LeaveRequestCreationForm from './LeaveRequestCreationForm'

// ----------------------------------------------------------------------

const LeaveRequestCreation = () => {
  return (
    <Page>
      <Paper>
        <FKProvider value={{}} onSubmit={() => ({})}>
          <LeaveRequestCreationForm />
        </FKProvider>
      </Paper>
    </Page>
  )
}

export default LeaveRequestCreation
