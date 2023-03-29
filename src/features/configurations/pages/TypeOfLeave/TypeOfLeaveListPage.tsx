import { Grid } from '@mui/material'
import React from 'react'
import Page from '../../../../components/Page'
import { TypeLeave, TypeOfLeaveCreation } from '../../components'

export default function TypeOfLeaveListPage() {
  return (
    <Page>
      <Grid container spacing={2}>
        <Grid item md={3}>
          <TypeOfLeaveCreation />
        </Grid>
        <Grid item md={9}>
          <TypeLeave />
        </Grid>
      </Grid>
    </Page>
  )
}
