import { useState } from 'react'
import { TasksPage } from './pages/TasksPage.jsx'
import { SideBar } from './components/SideBar.jsx'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='app'>
      <SideBar></SideBar>
      <Routes>
        <Route path='/' element={<TasksPage />} />
      </Routes>
    </div>
  )
}

export default App
