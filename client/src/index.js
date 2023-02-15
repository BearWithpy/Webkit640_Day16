import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"

// react-redux 관련 모듈 import
import { Provider } from "react-redux"
import { legacy_createStore as createStore } from "redux"

const currentState = { count: 10, age: 21 }

function reducer(state = currentState, action) {
    if (currentState === undefined) {
        return { count: 10 }
    }
    if (action.type === "count 증가") {
        state.count++
    }
    if (action.type === "count 감소") {
        state.count--
    }
    if (action.type === "age 증가") {
        state.age++
    }
    if (action.type === "age 감소") {
        state.age--
    }
    if (action.type === "changeCount") {
        state.count = action.count
    }
    if (action.type === "changeAge") {
        state.age = action.age
    }

    const newState = { ...state }
    return newState
}

let store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <Provider store={store}>
        <App />
    </Provider>
)
