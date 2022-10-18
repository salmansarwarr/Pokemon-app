import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import Loading from '../Pages/Loading'

function Pokemons(props) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=30")
            .then((res) => {
                setData(res.data.results)
                setLoading(false)
            })
            .catch((err) => {
                document.write(err)
            })
    }, [])

    return (
        <>
            {
                loading ? <Loading dark={props.dark} /> :
                    data.map((item, index) => {
                        return (
                            (props.search.length == 0 || props.search.toLowerCase() == item.name.slice(0, props.search.length)) &&
                            <NavLink to={`/${index + 1}`} style={{ textDecoration: "none" }} key={index}>
                                <div className="card pokemon-card">
                                    <img
                                        className="card-img-top"
                                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
                                        alt="Card image cap"
                                    />
                                    <div className="card-body">
                                        <p className="card-text">{index + 1}. {item.name}</p>
                                    </div>
                                </div>
                            </NavLink>
                        )
                    })
            }
        </>
    )
}

export default Pokemons