import { Grid } from '@mui/material'
import React from 'react'
import Page from '../../../../components/Page'
import { Communication, CommunicationCreation } from '../../components/MakeCommunication'

export default function MakeCommunicationListPage() {
  return (
    <Page>
      <Grid container spacing={2}>
        <Grid item md={3}>
          <CommunicationCreation />
        </Grid>
        <Grid item md={9}>
          <Communication />
        </Grid>
      </Grid>
    </Page>
  )
}
