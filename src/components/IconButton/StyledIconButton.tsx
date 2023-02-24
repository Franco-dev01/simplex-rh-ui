import { alpha, styled } from '@mui/material';
import MuiIconButton from '@mui/material/IconButton';

const StyledIconButton = styled(MuiIconButton)(({ theme, color }) => ({
  borderRadius: '10px',
  background: theme.palette.common.white,
  minHeight: 50,
  minWidth: 50,
  ...(color === 'primary' && {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: alpha(theme.palette.primary.main, 0.9),
    },
  }),
  ...(color === 'secondary' && {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: alpha(theme.palette.secondary.main, 0.9),
    },
  }),
}));

export default StyledIconButton;
