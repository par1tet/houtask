import React, { useEffect, useRef, useState } from "react"
import cl from './CalendarOfActive.module.css'
import { day, createArrayDay } from './../../../utils/day.js'
import { Day } from "./Day.jsx"
import { ChoiceElement } from "../ChoiceElement.jsx"
import { month } from "../../../utils/getAllMonth.js"
import { useStore } from "./../../../hooks/useStore.js"
import { getDaysByMonth } from '../../../utils/getDaysByMonth.js'

export const CalendarOfActive = ({activeDays}) => {
    const [currentMonth, setCurrentMonth] = useState(1)

    function handlerChange(e){
        setCurrentMonth(month.findIndex(n => n === e.target.value) + 1)
    }

    return (<div className={`${cl.calendar}`}>
        <span>calendar</span>
        <div className={`${cl.calendar__content}`}>
            <ChoiceElement
                options={month}
                onChange={handlerChange}
            ></ChoiceElement>
            
            <div className={`${cl.calendar__content_days}`}>
                {createArrayDay(getDaysByMonth(currentMonth),
                                new Date().getMonth(),
                                activeDays).map(day =>
                    <Day key={day.data} day={day}></Day>
                )}
            </div>
            
        </div>
    </div>)
}