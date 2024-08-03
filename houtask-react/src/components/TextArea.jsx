import React from "react"

export const TextArea = ({title, cols, rows}) => {
    return (<>
        {title}
        <textarea name="" id="" cols={cols} rows={rows} spellCheck="false"></textarea>
    </>)
}