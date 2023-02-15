import React from "react"
import { useDispatch } from "react-redux"

const AgeController = () => {
    const dispatch = useDispatch()
    return (
        <>
            <fieldset>
                <h2>Age State Controller</h2>
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
