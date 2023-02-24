import { IconButtonProps } from '@mui/material/IconButton';
import { forwardRef } from 'react';

import StyledIconButton from './StyledIconButton';

function IconButton(props: IconButtonProps, ref: any) {
  return <StyledIconButton {...props} ref={ref} />;
}

export default forwardRef(IconButton);
