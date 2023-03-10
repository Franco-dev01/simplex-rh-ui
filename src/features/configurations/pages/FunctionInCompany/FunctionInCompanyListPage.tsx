import { Grid } from '@mui/material'
import React from 'react'
import Page from '../../../../components/Page'
import { FunctionInCompany, FunctionInCompanyCreation } from '../../components'

export default function FunctionInCompanyListPage() {
  return (
    <Page>
      <Grid container spacing={2}>
        <Grid item md={3}>
          <FunctionInCompanyCreation />
        </Grid>
        <Grid item md={9}>
          <FunctionInCompany />
        </Grid>
      </Grid>
    </Page>
  )
}
