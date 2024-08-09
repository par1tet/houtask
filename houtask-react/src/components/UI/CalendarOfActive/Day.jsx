import React from "react"
import cl from "./CalendarOfActive.module.css"

export const Day = ({day}) => {
    return (<div className={`${(() => {
        if (day.isActive){
            return `${cl["day-active"]}`
        }else{
            return `${cl.day}`
        }
    })()}`}>
        {day.data.split(':')[1]}
    </div>)
}