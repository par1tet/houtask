import React from "react"
import cl from './WeekActive.module.css'

export const WeekActive = ({ActiveDays}) => {
    return (<div className={`${cl.weekactive}`}>
        <span>last week</span>
        <div className={`${cl.weekactive__content}`}></div>
    </div>)
}