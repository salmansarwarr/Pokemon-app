import React from 'react'
import { NavLink } from 'react-router-dom'

function FirstPage(props) {
    return(
        <div 
            className='first-page' 
            style={props.dark ? {background:"rgb(65, 64, 64)"} : {background:"white"}}
        >
            <h1>POKEMON</h1>
            <NavLink to="/pokedex" className='btn btn-sm get-started'>
                <span>GET STARTED</span> <i className="fa-solid fa-paper-plane"></i> 
            </NavLink>
            <button
                type='button'
                className='btn btn-secondary theme'
                style={props.dark ? { color:"whitesmoke" } : { color:"black" }}
                onClick={props.themeChange}
            > 
                <i className="fa-solid fa-circle-half-stroke"></i> <span> theme </span>
            </button>
        </div>
    )
}

export default FirstPage