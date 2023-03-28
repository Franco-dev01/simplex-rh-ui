import React from 'react'

import { FormikValues, useFormikContext } from 'formik'
import { FKSelectField } from '../../../../components/Formik'

type SelectLeaveType = {
  label: string
  name: string
  required?: boolean
  value?: any
}

export default function SelectLeaveType({ label, name, required }: SelectLeaveType) {
  const { values, setFieldValue } = useFormikContext<FormikValues>()
  const handleChange = (options: { value: string; label: string }) => {
    setFieldValue(name, options?.value)
  }

  return (
    <FKSelectField
      id={name}
      label={label}
      name={name}
      placeholder='Sélectionner la visite'
      isLoading={false}
      options={[]}
      //   onChange={handleChange}
      noOptionsMessage={() => 'Aucune visite disponible'}
      fullWidth
      required={required}
    />
  )
}
