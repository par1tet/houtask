import { useState, createContext } from 'react'
import { TasksPage } from './pages/TasksPage.jsx'
import { GoalsPage } from './pages/GoalsPage.jsx'
import { StatisticPage } from './pages/StatisticPage.jsx'
import { SettingsPage } from './pages/SettingsPage.jsx'
import { SideBar } from './components/SideBar.jsx'
import { Routes, Route } from 'react-router-dom'
import { observer } from "mobx-react-lite"
import { activePage } from './store/activePage.js'

const myActivePage = new activePage()
export const activePageContext = createContext();

const App = observer(() => {
  return (
    <activePageContext.Provider value={myActivePage}>
      <div className='app'>

      <SideBar></SideBar>
      <Routes>
        <Route path='/tasks' element={<TasksPage />} />
        <Route path='/goals' element={<GoalsPage />} />
        <Route path='/statistic' element={<StatisticPage />} />
        <Route path='/settings' element={<SettingsPage />} />
      </Routes>
      </div>
    </activePageContext.Provider>
  )
})

export default App
