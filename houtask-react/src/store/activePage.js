import { makeAutoObservable } from "mobx"

export class activePage {
    activePage = '';

    constructor(){
        makeAutoObservable(this)
    }
}