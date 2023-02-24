import { Form, FormikHelpers, FormikProvider, FormikValues, useFormik } from 'formik';
import { ReactNode } from 'react';

export type FKProviderProps<T> = {
  children: ReactNode;
  value: T;
  onSubmit?: (values: T, helpers?: FormikHelpers<T>) => void;
  validationsSchema?: any | (() => any);
};

export const FKProvider = <T extends FormikValues>({
  children,
  value,
  onSubmit,
  validationsSchema,
}: FKProviderProps<T>) => {
  const fkValue = useFormik({
    initialValues: value,
    enableReinitialize: true,
    validationSchema: validationsSchema && validationsSchema,
    onSubmit: onSubmit!,
    validateOnChange: true,
  });

  return (
    <FormikProvider value={fkValue}>
      <Form onSubmit={fkValue.handleSubmit}>{children}</Form>
    </FormikProvider>
  );
};

export default FKProvider;
