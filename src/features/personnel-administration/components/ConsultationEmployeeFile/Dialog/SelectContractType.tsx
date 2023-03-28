import React from 'react'

import { FormikValues, useFormikContext } from 'formik'
import { FKSelectField } from '../../../../../components/Formik'

type SelectTypeLeave = {
  label: string
  name: string
  required?: boolean
  value?: any
}

export default function SelectContractType({ label, name, required }: SelectTypeLeave) {
  const { values, setFieldValue } = useFormikContext<FormikValues>()
  const handleChange = (options: { value: string; label: string }) => {
    setFieldValue(name, options?.value)
  }

  return (
    <FKSelectField
      id={name}
      label={label}
      name={name}
      placeholder='Sélectionner le type de contrat'
      isLoading={false}
      options={[]}
      //   onChange={handleChange}
      noOptionsMessage={() => 'Aucun type de contrat disponible'}
      fullWidth
      required={required}
    />
  )
}
