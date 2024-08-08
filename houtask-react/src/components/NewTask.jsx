import React from "react"
import { ChoiceElement } from "./UI/ChoiceElement.jsx"
import { TextArea } from "./UI/TextArea.jsx"
import { ContentBar } from "./UI/ContentBar.jsx"
import { useStore } from './../hooks/useStore.js'
import { toJS } from "mobx"

export const NewTask = (props) => {
    const rootStore = useStore()

    function handleStartTask(e){
        const choiceGoalValue = document.querySelector(".contentbar__new-content-section > select").value
        const descriptionValue = document.querySelector(".contentbar__new-content-desc > textarea").value
        const tagsValue = document.querySelector(".contentbar__new-content-tags > textarea").value

        console.log(choiceGoalValue)
        console.log(descriptionValue)
        console.log(tagsValue)
    }

    return (
        <ContentBar className="contentbar__new-task">
            <span className="contentbar__new-task_text">
                create new task
            </span>
            <div className="contentbar__new-content">
                <div className="contentbar__new-content-section">
                    <ChoiceElement title="Choice goal" options={toJS(
                        rootStore.goals.goals
                    ).map(goal => goal.name)}></ChoiceElement>
                </div>
                <div className="contentbar__new-content-desc">
                    <TextArea title={"Add description"} cols="36" rows="10"></TextArea>
                </div>
                <div className="contentbar__new-content-tags">
                    <TextArea title={"Add tags"} cols="36" rows="5"></TextArea>
                </div>
                <div className="contentbar__new-content-starttask">
                    <button onClick={handleStartTask}>Start task</button>
                </div>
            </div>
        </ContentBar>
    )
}