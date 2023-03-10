import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AddEmployee, CommunicationHistory, Employee, MakeCommunication } from '../pages'

export default function PersonnelAdministrationRoutes() {
  return (
    <Routes>
      <Route path='employee/add' element={<AddEmployee />} />

      <Route path='communication-history/list' element={<CommunicationHistory />} />

      <Route path='consultation-employee/list' element={<Employee />} />

      <Route path='communication/list' element={<MakeCommunication />} />
    </Routes>
  )
}
