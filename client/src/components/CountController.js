import React from "react"
import { useDispatch, useSelector } from "react-redux"

const CountController = () => {
    const dispatch = useDispatch()
    const count = useSelector((state) => state.count)
    return (
        <>
            <fieldset>
                <h2>Count State Controller</h2>
                <p>
                    <input
                        type="text"
                        value={count}
                        onChange={(e) => {
                            dispatch({
                                type: "changeCount",
                                count: e.target.value,
                            })
                        }}
                    />
                </p>
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
