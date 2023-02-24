export type TResetPassword = {
  token: string;
  password: string;
};

export type TResetPasswordProps = {
  password: string;
  confirmPassword: string;
};

export type TPasswordDTO = {
  data: TResetPassword;
};
