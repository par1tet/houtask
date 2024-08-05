import React from "react"
import { NewTask } from './../components/NewTask.jsx'
import { LastTasks } from './../components/LastTasks.jsx'

export const TasksPage = (props) => {
    return (<div className="contentbar">
        <NewTask></NewTask>
        <LastTasks></LastTasks>
    </div>)
}