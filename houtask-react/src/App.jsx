import { observer } from "mobx-react-lite"
import { createContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { SideBar } from './components/SideBar.jsx'
import { GoalsPage } from './pages/GoalsPage.jsx'
import { SettingsPage } from './pages/SettingsPage.jsx'
import { StatisticPage } from './pages/StatisticPage.jsx'
import { TasksPage } from './pages/TasksPage.jsx'
import { pagesList } from './utils/constData.js'
import { rootStore } from "./store/rootStore.js"

const myRootStore = new rootStore([
    'test1','test2','test3','test4','test5'
])
export const rootStoreContext = createContext();

const App = observer(() => {
    var hrefPath = window.location.href.split('/')

    if(pagesList.includes(hrefPath[hrefPath.length - 1]))
	{
		myRootStore.activePage.activePage = hrefPath[hrefPath.length - 1]
	}

	return (
	<rootStoreContext.Provider value={myRootStore}>
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
	</rootStoreContext.Provider>
	)
})

export default App
