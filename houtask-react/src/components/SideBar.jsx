import React from "react"

export const SideBar = (props) => {
    return (<div className="sidebar">
        <div className="sidebar__profile">

        </div>
        <nav className="sidebar__profile_navigation">
            <div>
                <div className="sidebar__profile_navigation_item">
                    Tasks
                </div>
                <div className="sidebar__profile_navigation_item">
                    Goals
                </div>
                <div className="sidebar__profile_navigation_item">
                    Statistic
                </div>
            </div>
            <div className="sidebar__profile_navigation_item">
                Settings
            </div>
        </nav>
    </div>)
}