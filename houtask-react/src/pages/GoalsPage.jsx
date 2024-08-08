import React from "react"
import { ContentBar } from "./../components/UI/ContentBar.jsx"
import { ListBar } from "../components/ListBar/ListBar.jsx"

export const GoalsPage = (props) => {
    return (<div className="goalspage">
        <div className="contentbar">
            <ContentBar className="contentbar__goals">
                goal
                <ListBar></ListBar>
            </ContentBar>
        </div>
    </div>)
}