import React from "react"
import { useDispatch, useSelector } from "react-redux"

const AgeController = () => {
    const dispatch = useDispatch()
    const age = useSelector((state) => state.age)
    return (
        <>
            <fieldset>
                <h2>Age State Controller</h2>
                <p>
                    <input
                        type="text"
                        value={age}
                        onChange={(e) => {
                            dispatch({
                                type: "changeAge",
                                age: e.target.value,
                            })
                        }}
                    />
                </p>
                <button
                    onClick={() => {
                        dispatch({ type: "age 증가" })
                    }}
                >
                    증가
                </button>
                <button
                    onClick={() => {
                        dispatch({ type: "age 감소" })
                    }}
                >
                    감소
                </button>
            </fieldset>
        </>
    )
}

export default AgeController
