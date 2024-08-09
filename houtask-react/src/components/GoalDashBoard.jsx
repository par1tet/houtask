import React from "react"
import cl from './GoalDashBoard.module.css'
import { CalendarOfActive } from "./UI/CalendarOfActive/CalendarOfActive"
import { WeekActive } from "./UI/WeekActive/WeekActive"
import { useStore } from "../hooks/useStore"
import { toJS } from "mobx"

export const GoalDashBoard = ({goal}) => {

    return (<div className={`${cl.GoalDashBoard}`}>
        <div className={`${cl.GoalDashBoardContent}`}>
            <div className={`${cl.GoalDashBoardContentData}`}>
                <span>title: {goal.name}</span>
                <span>desc: {goal.desc}</span>
            </div>
            <div className={`${cl.GoalDashBoardContentDaysAndActions}`}>
                <div className={`${cl.GoalDashBoardContentDays}`}>
                    <CalendarOfActive activeDays={
                        toJS(useStore().activeCalendar.activeDays)
                    }></CalendarOfActive>
                </div>
                <div className={`${cl.GoalDashBoardContentActions}`}>
                    <WeekActive></WeekActive>
                </div>
            </div>
        </div>
    </div>)
}