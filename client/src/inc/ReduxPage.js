import React from "react"
import AgeController from "../components/AgeController"
import CountController from "../components/CountController"
import StateView from "../components/StateView"

const ReduxPage = () => {
    return (
        <div>
            <h2> Redux Practice </h2>
            <StateView />
            <CountController />
            <AgeController />
        </div>
    )
}

export default ReduxPage
