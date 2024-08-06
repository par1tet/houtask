import { useState, createContext } from 'react'
import { TasksPage } from './pages/TasksPage.jsx'
import { GoalsPage } from './pages/GoalsPage.jsx'
import { StatisticPage } from './pages/StatisticPage.jsx'
import { SettingsPage } from './pages/SettingsPage.jsx'
import { SideBar } from './components/SideBar.jsx'
import { Routes, Route } from 'react-router-dom'
import { observer } from "mobx-react-lite"
import { activePage } from './store/activePage.js'
import { toJS } from "mobx";
import { pagesList } from './store/constData.js'

const myActivePage = new activePage()
export const activePageContext = createContext();

const App = observer(() => {
    var hrefPath = window.location.href.split('/')

    if(pagesList.includes(hrefPath[hrefPath.length - 1]))
	{
		myActivePage.activePage = hrefPath[hrefPath.length - 1]
	}

	return (
	<activePageContext.Provider value={myActivePage}>
		<div className='app'>
			<SideBar></SideBar>
			<Routes>
				<Route path='/' element={<div />} />
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
