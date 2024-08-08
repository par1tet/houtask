import { makeAutoObservable } from "mobx"

export class goalsStore {
    goals = [];
    activeGoal = 0;

    constructor(goals){
        makeAutoObservable(this)
        this.goals = goals
    }

    addGoal(name){
        this.goals.push(name)
    }

    setGoals(goals){
        this.goals = goals
    }
}