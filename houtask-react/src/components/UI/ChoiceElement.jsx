import React from "react"

export const ChoiceElement = ({title, options}) => {
    return (<>
        {title}
        <select>
            {options.map((option, index) => {
                return (
                    <option value={option} key={index}>{option}</option>
                )
            })}
        </select>
    </>)
}