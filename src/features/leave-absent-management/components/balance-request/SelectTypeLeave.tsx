import React from 'react'

import { FormikValues, useFormikContext } from 'formik'
import { FKSelectField } from '../../../../components/Formik'

type SelectTypeLeave = {
  label: string
  name: string
  required?: boolean
  value?: any
}

export default function SelectTypeLeave({ label, name, required }: SelectTypeLeave) {
  const { values, setFieldValue } = useFormikContext<FormikValues>()
  const handleChange = (options: { value: string; label: string }) => {
    setFieldValue(name, options?.value)
  }

  return (
    <FKSelectField
      id={name}
      label={label}
      name={name}
      placeholder='Sélectionner le type de conger'
      isLoading={false}
      options={[]}
      //   onChange={handleChange}
      noOptionsMessage={() => 'Aucun type de conger disponible'}
      fullWidth
      required={required}
    />
  )
}
