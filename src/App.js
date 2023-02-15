import "./App.css"
import AgeController from "./components/AgeController"
import CountController from "./components/CountController"

import StateView from "./components/StateView"

function App() {
    return (
        <div className="App">
            <h1>Hello World</h1>
            <StateView />
            <CountController />
            <AgeController />
        </div>
    )
}

export default App
