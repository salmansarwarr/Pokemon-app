import React, { useState } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import axios from 'axios'
import Loading from '../Pages/Loading'

function PokemonCard(props) {
    const { index } = useParams()
    const [name, setName] = useState("")
    const [ability, setAbility] = useState("")
    const [baseExperience, setBaseExperience] = useState("")
    const [loading, setloading] = useState(true)

    axios.get(`https://pokeapi.co/api/v2/pokemon/${index}/`)
        .then((res) => {
            setName(res.data.forms[0].name)
            setAbility(res.data.abilities[0].ability.name)
            setBaseExperience(res.data.base_experience)
            setloading(false)
        })

    return (
        loading ? <Loading dark={props.dark}/> :
        <div
            className='detail-card'
            style={props.dark ? {background:"rgb(161, 161, 161)"} : {background:"white"}}
        >
            <div className="card">
                <div className='top'>
                    <div className='index'>
                        {index}
                    </div>
                    <h1>{name}</h1>
                    <img
                        className="card-img-top"
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`}
                        alt="Card image cap"
                    />
                </div>
                <div className='middle'>
                    <h3><span>Ability</span>: {ability}</h3>
                    <h3><span>Base Experience</span>: {baseExperience}</h3>
                </div>
                <div className="bottom">
                    <NavLink to={"/pokedex"}>
                        <button type="button" className="btn">
                            back to pokedex
                        </button>
                    </NavLink>
                </div>
            </div>
        </div> 
    )
}

export default PokemonCard