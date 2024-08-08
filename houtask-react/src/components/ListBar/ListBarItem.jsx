import React from "react"
import cl from "./ListBar.module.css"

export const ListBarItem = ({name}) => {
    return (<div className={cl.ListBarItem}>
        {name}
    </div>)
}