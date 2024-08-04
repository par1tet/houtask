import { useState } from 'react'
import { TasksPage } from './pages/TasksPage.jsx'
import { GoalsPage } from './pages/GoalsPage.jsx'
import { StatisticPage } from './pages/StatisticPage.jsx'
import { SettingsPage } from './pages/SettingsPage.jsx'
import { SideBar } from './components/SideBar.jsx'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='app'>
      <SideBar></SideBar>
      <Routes>
        <Route path='/' element={<TasksPage />} />
        <Route path='/goals' element={<GoalsPage />} />
        <Route path='/statistic' element={<StatisticPage />} />
        <Route path='/settings' element={<SettingsPage />} />
      </Routes>
    </div>
  )
}

export default App
