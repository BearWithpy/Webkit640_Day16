import React from "react"
import { useDispatch } from "react-redux"

const CountController = () => {
    const dispatch = useDispatch()
    return (
        <>
            <fieldset>
                <h2>Count State Controller</h2>
                <button
                    onClick={() => {
                        dispatch({ type: "count 증가" })
                    }}
                >
                    증가
                </button>
                <button
                    onClick={() => {
                        dispatch({ type: "count 감소" })
                    }}
                >
                    감소
                </button>
            </fieldset>
        </>
    )
}

export default CountController
