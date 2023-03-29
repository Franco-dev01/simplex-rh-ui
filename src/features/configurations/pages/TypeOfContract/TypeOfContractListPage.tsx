import { Grid } from '@mui/material'
import React from 'react'
import Page from '../../../../components/Page'
import { TypeContract, TypeOfContractCreation } from '../../components'

export default function TypeOfContractListPage() {
  return (
    <Page>
      <Grid container spacing={2}>
        <Grid item md={3}>
          <TypeOfContractCreation />
        </Grid>
        <Grid item md={9}>
          <TypeContract />
        </Grid>
      </Grid>
    </Page>
  )
}
