import { Field, FieldAttributes } from 'formik';
import { TextFieldProps } from '../../Form/TextField/TextField.types';
import UploadLogo from '../../Form/upload/UploadLogo';

const FKUpload = <T extends TextFieldProps>(props: FieldAttributes<T>) => (
  <Field component={UploadLogo} {...props} />
);

export default FKUpload;
