import { Grid } from '@mui/material';
import { ReactNode } from 'react';

const FormContainer = ({ children }: { children: ReactNode }) => (
  <Grid item xs={12} md={6} display="flex" alignItems="center" justifyContent="center">
    {children}
  </Grid>
);

export default FormContainer;
