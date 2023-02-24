import Box from '@mui/material/Box';

import * as React from 'react';

import TextField from '../TextField';
import { UploadLogoProps } from './types';
import { Input, Label } from './UploadLogo.styles';

function UploadLogo({ handleChange, ...res }: UploadLogoProps) {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <TextField
        {...res}
        fullWidth
        endAdornment={
          <Label htmlFor="file">
            <Input id="file" type="file" onChange={handleChange} accept="image/*" />
            Parcourir
          </Label>
        }
      />
    </Box>
  );
}

export default UploadLogo;
