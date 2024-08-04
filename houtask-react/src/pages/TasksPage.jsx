import React from "react"
import { NewTask } from './../components/NewTask.jsx'

export const TasksPage = (props) => {
    return (<div className="contentbar">
        <NewTask></NewTask>
        <div className="contentbar__last-tasks">
            last tasks
        </div>
    </div>)
}