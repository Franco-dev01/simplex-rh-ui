import { Checkbox, FormControlLabel, Typography } from '@mui/material';
import { LabelFieldProps } from './LabelField.types';

const LabelField = ({ name, label }: LabelFieldProps) => (
  <FormControlLabel
    control={<Checkbox value={name} size="small" color="primary" defaultChecked />}
    label={<Typography variant="caption">{label}</Typography>}
  />
);

export default LabelField;
