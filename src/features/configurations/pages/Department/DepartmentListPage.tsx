import { Grid } from '@mui/material'
import React from 'react'
import Page from '../../../../components/Page'
import { Department, DepartmentCreation } from '../../components'

export default function DepartmentListPage() {
  return (
    <Page>
      <Grid container spacing={2}>
        <Grid item md={3}>
          <DepartmentCreation />
        </Grid>
        <Grid item md={9}>
          <Department />
        </Grid>
      </Grid>
    </Page>
  )
}
