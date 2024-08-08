import React, { useEffect, useRef } from "react"
import cl from "./ListBar.module.css"
import { ListBarItem } from "./ListBarItem.jsx"

export const ListBar = ({ className, listItems, activeItem }) => {
    const currentObj = useRef()

    useEffect(() => {
        if (className !== undefined){
            for(let i of className.split(' ')){
                currentObj.current.classList.add(i)
            }
        }
    }, [])

    return (<div className={cl.ListBar} ref={currentObj}>
        {listItems.map((item, id) =>
            <ListBarItem
                key={item}
                name={item}
                active={id === activeItem}
                id={id}
            >
            </ListBarItem>
        )}
    </div>)
}