import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import ContactPage from "./inc/ContactPage"

import Header from "./inc/Header"
import MainPage from "./inc/MainPage"
import PracticePage from "./inc/PracticePage"
import ReduxPage from "./inc/ReduxPage"

function App() {
    return (
        <div className="App">
            <h1>Junsu Day 16</h1>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/redux" element={<ReduxPage />} />
                    <Route path="/prac" element={<PracticePage />} />
                    {/* <Route path="/redux" element={ReduxPage}/> */}
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
