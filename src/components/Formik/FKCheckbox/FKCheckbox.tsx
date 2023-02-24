import { Checkbox as MuiCheckbox, FormControlLabel } from '@mui/material';
import { useField } from 'formik';
import { FC } from 'react';
import { CheckboxProps } from './FKCheckbox.types';

const FKCheckbox: FC<CheckboxProps> = ({ name, label, color }) => {
  const [field] = useField(name);
  console.log('[label]', label);
  return <FormControlLabel control={<MuiCheckbox color={color} {...field} />} label={label} />;
};

export default FKCheckbox;
