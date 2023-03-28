import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { BalanceRequest, DemandRequest, LeaveRequest } from '../pages'

export default function ConfigurationRoutes() {
  return (
    <Routes>
      <Route path='leave-request' element={<LeaveRequest />} />

      <Route path='demand-management' element={<DemandRequest />} />

      <Route path='balance-request' element={<BalanceRequest />} />
    </Routes>
  )
}
