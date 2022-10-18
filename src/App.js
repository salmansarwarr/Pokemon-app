import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import PokemonCard from "./Components/PokemonCard";
import FirstPage from "./Pages/FirstPage";
import PokeDex from "./Pages/PokeDex"

function App() {
    const [dark, setTheme] = useState(true)

    function themeChange() {
        setTheme((prev) => {
            return !prev
        })
    }

    return(
        <div className="app" style={dark ? {background:"rgb(161, 161, 161)"} : {background:"white"}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<FirstPage dark={dark} themeChange={themeChange}/>}/>
                    <Route path="/pokedex" element={<PokeDex dark={dark}/>}/>
                    <Route path="/:index" element={<PokemonCard dark={dark}/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App

