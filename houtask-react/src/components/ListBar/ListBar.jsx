import React, { useEffect, useRef } from "react"
import cl from "./ListBar.module.css"
import { ListBarItem } from "./ListBarItem.jsx"

const testList = [
    'test1','test2','test3','test4','test5'
]

export const ListBar = ({ className }) => {
    const currentObj = useRef()

    useEffect(() => {
        for(let i of className.split(' ')){
            currentObj.current.classList.add(i)
        }
    }, [])

    return (<div className={cl.ListBar} ref={currentObj}>
        {testList.map(item =>
            <ListBarItem
                key={item}
                name={item}
            >
            </ListBarItem>
        )}
    </div>)
}