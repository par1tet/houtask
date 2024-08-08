import React from "react"
import { ContentBar } from "./../components/UI/ContentBar.jsx"
import { ListBar } from "../components/ListBar/ListBar.jsx"
import { GoalDashBoard } from "../components/GoalDashBoard.jsx"

export const GoalsPage = (props) => {


    return (<div className="goalspage">
        <div className="contentbar">
            <ContentBar className="contentbar__goals">
                <span>goal</span>
                <ListBar></ListBar>
                <GoalDashBoard goal='test'></GoalDashBoard>
            </ContentBar>
        </div>
    </div>)
}