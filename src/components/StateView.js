import React from "react"
import { useSelector } from "react-redux"

const StateView = () => {
    // 값을 참조 할 때는 useSelector
    const count = useSelector((state) => state.count)
    const age = useSelector((state) => state.age)

    return (
        <div>
            <p>Count : {count}</p>
            <p>Age : {age}</p>
        </div>
    )
}

export default StateView
