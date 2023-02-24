import {
  OptionsObject,
  SnackbarMessage,
  useSnackbar,
  VariantType,
  WithSnackbarProps,
} from 'notistack';
import React from 'react';

type ToastProps = {
  variant: VariantType;
  msg: SnackbarMessage;
  options?: OptionsObject;
};

let useSnackbarRef: WithSnackbarProps;

export const SnackbarUtilsConfigurator: React.FC = () => {
  useSnackbarRef = useSnackbar();
  return null;
};

export default {
  success(msg: SnackbarMessage, options: OptionsObject = {}) {
    this.toast({
      msg,
      variant: 'success',
      options,
    });
  },
  warning(msg: SnackbarMessage, options: OptionsObject = {}) {
    this.toast({
      msg,
      variant: 'warning',
      options,
    });
  },
  info(msg: SnackbarMessage, options: OptionsObject = {}) {
    this.toast({
      msg,
      variant: 'info',
      options,
    });
  },
  error(msg: SnackbarMessage, options: OptionsObject = {}) {
    this.toast({
      msg,
      variant: 'error',
      options,
    });
  },
  toast({ msg, variant = 'default', options = {} }: ToastProps) {
    useSnackbarRef.enqueueSnackbar(msg, {
      ...options,
      variant,
    });
  },
};
