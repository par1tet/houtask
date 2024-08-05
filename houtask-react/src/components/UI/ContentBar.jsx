import React from "react"

export const ContentBar = ({children, className}) => {
    return (<div className={className}>
        {children}
    </div>)
}