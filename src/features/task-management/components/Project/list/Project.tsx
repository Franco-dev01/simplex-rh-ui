import React from 'react'

import Page from '../../../../../components/Page'
import Paper from '../../../../../components/Paper'
import { projects } from '../../../../../__mocks__/__mocks_data__'
import DataTable from './DataTable'
import ProjectHeader from './ProjectHeader'

export default function Project() {
  return (
    <Page>
      <Paper>
        <ProjectHeader />
        <DataTable rows={projects} />
      </Paper>
    </Page>
  )
}
