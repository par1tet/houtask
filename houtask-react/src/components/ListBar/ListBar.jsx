import React, { useEffect, useRef } from "react"
import cl from "./ListBar.module.css"
import { ListBarItem } from "./ListBarItem.jsx"
import { useStore } from "./../../hooks/useStore.js"
import { observer } from "mobx-react-lite";
import { toJS } from "mobx";

export const ListBar = observer(({ className }) => {
    const currentObj = useRef()
    const rootStore = useStore()

    useEffect(() => {
        if (className !== undefined){
            for(let i of className.split(' ')){
                currentObj.current.classList.add(i)
            }
        }
    }, [])

    return (<div className={cl.ListBar} ref={currentObj}>
        {toJS(rootStore.goals.goals).map((item, id) =>
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