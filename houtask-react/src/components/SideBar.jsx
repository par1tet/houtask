import React from "react"
import { NavigationItem } from "./NavigationItem.jsx"
import { NavigationList } from "./NavigationList.jsx"

export const SideBar = (props) => {
    return (<div className="sidebar">
        <div className="sidebar__profile">

        </div>
        <nav className="sidebar__profile_navigation">
            <NavigationList className="sidebar__profile_navigation_item" navigations={[
                {"title":"Tasks", "newPath":"/"},
                {"title":"Goals", "newPath":"/goals"},
                {"title":"Statistic", "newPath":"/statistic"},
            ]}/>
            <NavigationItem className="sidebar__profile_navigation_item" newPath="/settings">
                Settings
            </NavigationItem>
        </nav>
    </div>)
}