import React, { useEffect } from "react"
import { NavigationItem } from "./UI/NavigationItem.jsx"
import { NavigationList } from "./UI/NavigationList.jsx"

const navigations = [
    {"title":"Tasks", "newPath":"/tasks"},
    {"title":"Goals", "newPath":"/goals"},
    {"title":"Statistic", "newPath":"/statistic"},
]

export const SideBar = (props) => {
    return (<div className="sidebar">
        <div className="sidebar__profile">

        </div>
        <nav className="sidebar__profile_navigation">
            <NavigationList className="sidebar__profile_navigation_item" navigations={navigations}/>
            <NavigationItem className="sidebar__profile_navigation_item" newPath="/settings">
                Settings
            </NavigationItem>
        </nav>
    </div>)
}