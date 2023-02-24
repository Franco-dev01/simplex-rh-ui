import { TextFieldProps } from '../TextField/TextField.types';

export interface UploadLogoProps extends TextFieldProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
