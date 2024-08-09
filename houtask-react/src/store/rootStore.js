import { makeAutoObservable } from "mobx"
import { goalsStore } from "./goalsStore"
import { activePageStore } from "./activePageStore"
import { activeCalendarStore } from "./activeCalendarStore"

export class rootStore {
    goals = new goalsStore()
    activePage = new activePageStore()
    activeCalendar = new activeCalendarStore()

    constructor(goals, activeDays){
        makeAutoObservable(this)
        this.goals.setGoals(goals)
        this.activeCalendar.setActiveDays(activeDays)
    }
}