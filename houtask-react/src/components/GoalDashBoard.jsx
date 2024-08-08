import React from "react"
import cl from './GoalDashBoard.module.css'

export const GoalDashBoard = ({goal}) => {
    return (<div className={cl.GoalDashBoard}>
        {goal}
    </div>)
}