import React, { useState } from "react"
import Pokemons from "../Components/Pokemons"

function PokeDex(props) {
    const [search, setSearch] = useState("")

    function handleChange(event) {
        setSearch(event.target.value)
    }

    return (
        <div className="pokeDex">
            <nav className="navbar navbar-dark">
                <div className="wrapper">
                    <h1><i className="fa-solid fa-magnifying-glass"></i></h1>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="POKEMON" 
                        aria-label="Username" 
                        aria-describedby="basic-addon1"
                        onChange={handleChange}
                    />
                </div>
            </nav>

            <div
                className="pokemons" 
                style={props.dark ? {background:"rgb(161, 161, 161)"} : {background:"white"}}
            >
                <div className="container">
                    <Pokemons dark={props.dark} search={search}/>
                </div>
            </div>
        </div>
    )
}

export default PokeDex