import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LeaveCreation, LeavePage } from '../pages'

export default function LeaveRoutes() {
  return (
    <Routes>
      <Route path='list' element={<LeavePage />} />
      <Route path='creation' element={<LeaveCreation />} />
    </Routes>
  )
}
