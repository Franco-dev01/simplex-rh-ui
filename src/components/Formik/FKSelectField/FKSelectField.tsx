import { Field, FieldAttributes } from 'formik';
import SelectField from '../../Form/SelectField';
import { SelectProps } from '../../Form/SelectField/SelectField.types';

const FKSelectField = <T extends SelectProps>(props: FieldAttributes<T>) => (
  <Field component={SelectField} {...props} />
);

export default FKSelectField;
