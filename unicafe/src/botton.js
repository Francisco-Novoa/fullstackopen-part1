import React from "react"

export default function Button({ handleClick, text, value }) {
    return (
        <button
            onClick={()=>{handleClick(value+1)}}>
              {text}
        </button>
    )
}