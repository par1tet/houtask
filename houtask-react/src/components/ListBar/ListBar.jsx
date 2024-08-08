import React, { useEffect, useRef } from "react"
import cl from "./ListBar.module.css"
import { ListBarItem } from "./ListBarItem.jsx"
import { useStore } from "./../../hooks/useStore.js"
import { observer } from "mobx-react-lite";
import { toJS } from "mobx";

const testList = [
    'test1','test2','test3','test4','test5'
]

export const ListBar = observer(({ className }) => {
    const currentObj = useRef()
    const rootStore = useStore()

    useEffect(() => {
        if (className !== undefined){
            for(let i of className.split(' ')){
                currentObj.current.classList.add(i)
            }
        }
        console.log(toJS(rootStore.goals.activeGoal))
    }, [])

    return (<div className={cl.ListBar} ref={currentObj}>
        {testList.map((item, id) =>
            <ListBarItem
                key={item}
                name={item}
                active={id === toJS(rootStore.goals.activeGoal)}
                id={id}
            >
            </ListBarItem>
        )}
    </div>)
})