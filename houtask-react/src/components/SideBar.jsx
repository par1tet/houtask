import React, { useEffect } from "react"
import { NavigationItem } from "./UI/NavigationItem.jsx"
import { NavigationList } from "./UI/NavigationList.jsx"
import { pages } from "../store/constData.js"

export const SideBar = (props) => {
    return (<div className="sidebar">
        <div className="sidebar__profile">

        </div>
        <nav className="sidebar__profile_navigation">
            <NavigationList className="sidebar__profile_navigation_item" navigations={pages}/>
            <NavigationItem className="sidebar__profile_navigation_item" newPath="/settings">
                Settings
            </NavigationItem>
        </nav>
    </div>)
}