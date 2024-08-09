import React, { useRef, useEffect } from "react"
import cl from "./ListBar.module.css"
import { useStore } from "../../../hooks/useStore"

export const ListBarItem = ({name, active, id}) => {
    const thisItem = useRef()
    const rootStore = useStore()

    useEffect(() => {
        if(active){
            thisItem.current.classList.add('listbaritem-active')
        }else{
            thisItem.current.classList.toggle('listbaritem-active')
        }
    }, [active])

    function handleClick(e){
        rootStore.goals.setActiveGoal(id)
    }

    return (<div
        className={cl.ListBarItem}
        ref={thisItem}
        onClick={handleClick}
        >
        {name}
    </div>)
}