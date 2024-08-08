import React from "react"
import { ContentBar } from "./../components/UI/ContentBar.jsx"
import { ListBar } from "../components/ListBar/ListBar.jsx"
import { GoalDashBoard } from "../components/GoalDashBoard.jsx"
import { useStore } from './../hooks/useStore.js'
import { toJS } from 'mobx'
import { observer } from "mobx-react-lite";

export const GoalsPage = observer((props) => {
    const rootStore = useStore()

    return (<div className="goalspage">
        <div className="contentbar">
            <ContentBar className="contentbar__goals">
                <span>goal</span>
                <ListBar
                    listItems={toJS(rootStore.goals.goals).map(goal => goal.name)}
                    activeItem={toJS(rootStore.goals.activeGoal)}
                ></ListBar>
                <GoalDashBoard goal={toJS(rootStore.goals.goals[rootStore.goals.activeGoal]).name}></GoalDashBoard>
            </ContentBar>
        </div>
    </div>)
})