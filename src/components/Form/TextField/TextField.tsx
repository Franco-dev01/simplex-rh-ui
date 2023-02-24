import { FormHelperText as MuiFormHelperText, InputBase } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { FieldProps, getIn } from 'formik';
import React from 'react';
import { TextFieldProps } from './TextField.types';

const TextField = React.forwardRef(
  (
    {
      label,
      controlId,
      helperText,
      inputLabelProps,
      error,
      required,
      fullWidth,
      disabled,
      onBlur,
      field,
      form,
      ...rest
    }: Partial<FieldProps> & TextFieldProps,
    ref
  ) => {
    const fieldErrorMessage = field?.name && getIn(form?.errors, field?.name);
    const hasError =
      error ?? (field?.name && !!getIn(form?.touched, field?.name) && !!fieldErrorMessage);

    return (
      <FormControl error={!!hasError} fullWidth={fullWidth} id={controlId} required={required}>
        {label && (
          <InputLabel {...inputLabelProps} shrink data-testid="input-label">
            {label}
          </InputLabel>
        )}
        <InputBase
          disabled={disabled ?? form?.isSubmitting}
          {...field}
          {...rest}
          onBlur={
            onBlur ??
            ((e: React.FocusEvent<HTMLInputElement>) => {
              field?.onBlur(e ?? field?.name);
            })
          }
          fullWidth={fullWidth}
          inputRef={ref}
          ref={ref}
          data-testid="input-field"
        />
        <MuiFormHelperText error={!!hasError} data-testid="helper-text">
          {hasError ? fieldErrorMessage : helperText}
        </MuiFormHelperText>
      </FormControl>
    );
  }
);

TextField.displayName = 'TextField';

export default TextField;
