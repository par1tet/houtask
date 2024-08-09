import React from "react"
import cl from './CalendarOfActive.module.css'
import { day, createArrayDay } from './../../../utils/day.js'
import { Day } from "./Day.jsx"

export const CalendarOfActive = ({activeDays}) => {
    return (<div className={`${cl.calendar}`}>
        <span>calendar</span>
        <div className={`${cl.calendar__content}`}>
            {createArrayDay(30, new Date().getMonth(), activeDays).map(day =>
                <Day key={day.data} day={day}></Day>
            )}
        </div>
    </div>)
}