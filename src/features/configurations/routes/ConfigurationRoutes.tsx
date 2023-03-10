import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Department, FunctionInCompanyList, TypeOfContract, TypeOfLeave } from '../pages'

export default function ConfigurationRoutes() {
  return (
    <Routes>
      <Route path='department/list' element={<Department />} />

      <Route path='function-company/list' element={<FunctionInCompanyList />} />

      <Route path='type-leave/list' element={<TypeOfLeave />} />

      <Route path='type-contract/list' element={<TypeOfContract />} />
    </Routes>
  )
}
