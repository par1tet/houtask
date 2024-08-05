import React from "react"
import { useNavigate } from "react-router-dom"

export const NavigationItem = ({children, className, newPath}) => {
    const navigate = useNavigate();

    function handleClick(e){
        navigate(newPath)
    }

    return (<div className={className} onClick={handleClick}>
        {children}
    </div>)
}