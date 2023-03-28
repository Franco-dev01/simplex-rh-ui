import React from 'react'

import { FormikValues, useFormikContext } from 'formik'
import { FKSelectField } from '../../../../../components/Formik'

type SelectTypeLeave = {
  label: string
  name: string
  required?: boolean
  value?: any
}

export default function SelectPost({ label, name, required }: SelectTypeLeave) {
  const { values, setFieldValue } = useFormikContext<FormikValues>()
  const handleChange = (options: { value: string; label: string }) => {
    setFieldValue(name, options?.value)
  }

  return (
    <FKSelectField
      id={name}
      label={label}
      name={name}
      placeholder='Sélectionner le poste'
      isLoading={false}
      options={[]}
      //   onChange={handleChange}
      noOptionsMessage={() => 'Aucun poste disponible'}
      fullWidth
      required={required}
    />
  )
}
