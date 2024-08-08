import { makeAutoObservable } from "mobx"
import { goalsStore } from "./goalsStore"
import { activePageStore } from "./activePageStore"

export class rootStore {
    goals = new goalsStore()
    activePage = new activePageStore()

    constructor(){
        makeAutoObservable(this)
    }
}