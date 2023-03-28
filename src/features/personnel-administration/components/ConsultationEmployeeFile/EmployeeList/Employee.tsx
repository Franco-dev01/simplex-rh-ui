import React from 'react'

import Page from '../../../../../components/Page'
import Paper from '../../../../../components/Paper'
import { EmployeeList } from '../../../../../__mocks__/__mocks_data__'
import DataTable from './DataTable'

import EmployeeHeader from './EmployeeHeader'

export default function Employee() {
  return (
    <Page>
      <Paper>
        <EmployeeHeader />
        <DataTable rows={EmployeeList} />
      </Paper>
    </Page>
  )
}
