import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Project, TaskCreation } from '../pages'

export default function TaskRoutes() {
  return (
    <Routes>
      <Route path='creation' element={<TaskCreation />} />
      <Route path='project/list' element={<Project />} />
    </Routes>
  )
}
