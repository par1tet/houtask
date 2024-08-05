import React from "react"
import { NavigationItem } from "./NavigationItem.jsx"

export const NavigationList = ({navigations, className}) => {
    return (<div>
        {navigations.map((navigation, index) =>
            <NavigationItem
                className={className}
                newPath={navigation.newPath}
                key={index}
            >
                {navigation.title}
            </NavigationItem>
        )}
    </div>)
}