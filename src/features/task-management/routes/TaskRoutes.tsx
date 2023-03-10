import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { TaskCreation, TaskPage } from '../pages'

export default function TaskRoutes() {
  return (
    <Routes>
      <Route path='list' element={<TaskPage />} />
      <Route path='creation' element={<TaskCreation />} />
    </Routes>
  )
}
