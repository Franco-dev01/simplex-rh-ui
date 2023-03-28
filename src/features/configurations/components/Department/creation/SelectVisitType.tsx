import React from 'react'

import { FormikValues, useFormikContext } from 'formik'
import { VISIT_TYPE } from '../../constants'
import { FKSelectField } from '../../../../../components/Formik'

type SelectTypeLeave = {
  label: string
  name: string
  required?: boolean
  value?: any
}

export default function SelectVisitType({ label, name, required }: SelectTypeLeave) {
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
      options={VISIT_TYPE}
      //   onChange={handleChange}
      noOptionsMessage={() => 'Aucune visite disponible'}
      fullWidth
      required={required}
    />
  )
}
