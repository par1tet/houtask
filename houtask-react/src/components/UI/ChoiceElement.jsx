import React, {forwardRef} from "react"

export const ChoiceElement = forwardRef(({title, options, onChange}, ref) => {
    return (<>
        {title}
        <select ref={ref} onChange={onChange}>
            {options.map((option, index) => {
                return (
                    <option value={option} key={index}>{option}</option>
                )
            })}
        </select>
    </>)
})