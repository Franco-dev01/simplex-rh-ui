import { ButtonProps } from '@mui/material';
import Button from '@mui/material/Button';
import { Link, To } from 'react-router-dom';

type TRouterDomMuiButtonProps = {
  reloadDocument?: boolean;
  replace?: boolean;
  state?: any;
  to: To;
} & ButtonProps;

export default function RouterDomMuiButton({
  to,
  reloadDocument,
  replace,
  state,
  ...buttonProps
}: TRouterDomMuiButtonProps) {
  return (
    <Link
      to={to}
      replace={replace}
      reloadDocument={reloadDocument}
      state={state}
      style={{ textDecoration: 'none' }}
    >
      <Button {...buttonProps} />
    </Link>
  );
}
