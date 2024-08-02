import React from "react"
import { NewTask } from "./NewTask.jsx"

export const ContentBar = (props) => {
    return (<div className="contentbar">
        <NewTask></NewTask>
        <div className="contentbar__last-tasks">
            last tasks
        </div>
    </div>)
}