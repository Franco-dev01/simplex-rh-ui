import FormControl from '@mui/material/FormControl';
import MuiFormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import { FieldProps, getIn } from 'formik';
import { forwardRef, Ref } from 'react';
import { ActionMeta } from 'react-select';
import Select from './Select';
import { SelectProps } from './SelectField.types';

const FKReactSelect = (props: SelectProps & FieldProps, ref: Ref<HTMLSelectElement>) => {
  const {
    id,
    label,
    helperText,
    error,
    fullWidth,
    field,
    form: { touched, setFieldValue, isSubmitting, errors },
    options,
    onChange,
    isDisabled,
    onBlur,
    value,
    required,
    ...selectProps
  } = props;

  const fieldErrorMessage = getIn(errors, field?.name);
  const hasError: boolean = getIn(touched, field?.name) && !!fieldErrorMessage;

  const handleChange = (selectedOption: any, actionMeta: ActionMeta<unknown>) => {
    if (!onChange) {
      setFieldValue(field.name, selectedOption);
    } else {
      onChange(selectedOption, actionMeta);
    }
  };

  const getValue = () => {
    if (options) {
      return (options || []).find(
        (option: any) => option.value === field.value || option.id === field.value
      );
    }

    if (value) {
      return value;
    }

    return undefined;
  };

  return (
    <FormControl
      id={field?.name}
      variant="standard"
      error={error || hasError}
      fullWidth={fullWidth}
      required={required}
    >
      {label && (
        <InputLabel
          sx={{
            position: 'inherit',
          }}
          htmlFor={field?.name}
        >
          {label}
        </InputLabel>
      )}

      <Select
        error={hasError}
        {...field}
        {...selectProps}
        id={field?.name}
        inputId={field?.name}
        instanceId={field?.name}
        isDisabled={isDisabled ?? isSubmitting}
        value={getValue()}
        onChange={handleChange}
        onBlur={field.onBlur(field.name)}
        options={options}
        ref={ref}
      />

      <MuiFormHelperText error={hasError}>
        {hasError ? fieldErrorMessage : helperText}
      </MuiFormHelperText>
    </FormControl>
  );
};

FKReactSelect.displayName = 'ReactSelect';

export default forwardRef(FKReactSelect);
