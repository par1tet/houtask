import { makeAutoObservable } from "mobx"

export class goalsStore {
    goals = [];
    activeGoal = 0;

    constructor(){
        makeAutoObservable(this)
    }

    addGoal(name){
        this.goals.push(name)
    }

    setGoals(goals){
        this.goals = goals
    }
}