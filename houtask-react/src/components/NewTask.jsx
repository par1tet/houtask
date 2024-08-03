import React, { useEffect, useRef } from "react"
import { ChoiceElement } from "./ChoiceElement.jsx"
import { TextArea } from "./TextArea.jsx"

export const NewTask = (props) => {
    function handleStartTask(e){
        const choiceGoalValue = document.querySelector(".contentbar__new-content-section > select").value
        const descriptionValue = document.querySelector(".contentbar__new-content-desc > textarea").value
        const tagsValue = document.querySelector(".contentbar__new-content-tags > textarea").value

        console.log(choiceGoalValue)
        console.log(descriptionValue)
        console.log(tagsValue)
    }

    return (
        <div className="contentbar__new-task">
            <span className="contentbar__new-task_text">
                create new task
            </span>
            <div className="contentbar__new-content">
                <div className="contentbar__new-content-section">
                    <ChoiceElement title="Choice goal" options={[
                        "Отдых",
                        "Еще че та"
                    ]}></ChoiceElement>
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
        </div>
    )
}