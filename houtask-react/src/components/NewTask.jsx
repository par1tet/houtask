import React from "react"

export const NewTask = (props) => {
    return (
        <div className="contentbar__new-task">
            <span className="contentbar__new-task_text">
                create new task
            </span>
            <div className="contentbar__new-content">
                <div className="contentbar__new-content-section">
                    Choice goal
                    <select>
                        <option value="Отдых">Отдых</option>
                        <option value="Еще чета">Еще чета</option>
                    </select>
                </div>
                <div className="contentbar__new-content-desc">
                    Add description
                    <textarea name="" id="" cols="30" rows="10" spellcheck="false"></textarea>
                </div>
                <div className="contentbar__new-content-tags">
                    Add tags
                    <textarea name="" id="" cols="30" rows="5" spellcheck="false"></textarea>
                </div>
                <div className="contentbar__new-content-starttask">
                    <button>Start task</button>
                </div>
            </div>
        </div>
    )
}