import { Field, FieldAttributes } from 'formik';
import { TextFieldProps } from '../../Form/TextField/TextField.types';
import TextField from '../../Form/TextField/TextField';

const FKTextField = <T extends TextFieldProps>(props: FieldAttributes<T>) => (
  <Field component={TextField} {...props} />
);

export default FKTextField;
