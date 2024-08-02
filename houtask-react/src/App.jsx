import { useState } from 'react'
import { SideBar } from './components/SideBar.jsx'
import { ContentBar } from './components/ContentBar.jsx'

function App() {
  return (
    <div className='app'>
      <SideBar />
      <ContentBar />
    </div>
  )
}

export default App
