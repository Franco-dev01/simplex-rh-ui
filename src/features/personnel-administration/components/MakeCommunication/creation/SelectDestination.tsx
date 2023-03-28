import React from 'react'

import { FormikValues, useFormikContext } from 'formik'

import { FKSelectField } from '../../../../../components/Formik'
import { DESTINATION } from '../../../constants'

type SelectDestination = {
  label: string
  name: string
  required?: boolean
  value?: any
}

export default function SelectDestination({ label, name, required }: SelectDestination) {
  const { values, setFieldValue } = useFormikContext<FormikValues>()
  const handleChange = (options: { value: string; label: string }) => {
    setFieldValue(name, options?.value)
  }

  return (
    <FKSelectField
      id={name}
      label={label}
      name={name}
      placeholder='Sélectionner la destination'
      isLoading={false}
      options={DESTINATION}
      //   onChange={handleChange}
      noOptionsMessage={() => 'Aucune destination disponible'}
      fullWidth
      required={required}
    />
  )
}
