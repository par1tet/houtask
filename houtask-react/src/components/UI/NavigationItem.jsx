import React, {useEffect, useContext} from "react"
import { useNavigate } from "react-router-dom"
import { activePageContext } from "../../App.jsx";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";

export const NavigationItem = observer(({children, className, newPath}) => {
    const navigate = useNavigate();
    const activePage = useContext(activePageContext)

    const handleClick = e => {
        console.log(children)
        activePage.activePage = children
        console.log(toJS(activePage))
        navigate(newPath)
    }
    
    return (<div className={`${className} ${children.toLowerCase()}`} onClick={handleClick}>
        {children}
    </div>)
})