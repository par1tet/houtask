import { makeAutoObservable } from "mobx"

export class activePageStore {
    activePage = '';

    constructor(){
        makeAutoObservable(this)
    }
}