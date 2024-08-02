import React from "react"

export const NewTask = (props) => {
    return (
        <div className="contentbar__new-task">
            <span className="contentbar__new-task_text">
                create new task
            </span>
            <div className="contentbar__new-content">
                <div className="contentbar__new-content-section">
                    choice goal
                    <select>
                        <option value="Отдых">Отдых</option>
                        <option value="Еще чета">Еще чета</option>
                    </select>
                </div>
                <div className="contentbar__new-content-desc">

                </div>
                <div className="contentbar__new-content-starttask">

                </div>
            </div>
        </div>
    )
}